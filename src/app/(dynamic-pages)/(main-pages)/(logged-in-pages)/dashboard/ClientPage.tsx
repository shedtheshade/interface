'use client';

import { T } from '@/components/ui/Typography';
import { Popover } from '@/components/ui/Popover';
import { Button } from '@/components/ui/Button';
import { insertPrivateItemAction } from '@/data/user/privateItems';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { use, useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import { set } from 'nprogress';
import Image from 'next/image';
import { supabaseUserClientComponentClient } from '@/supabase-clients/supabaseUserClientComponentClient';
import { Loader } from 'lucide-react';
import { HoverCard } from '@/components/ui/HoverCard';

export const ClientPage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const toastRef = useRef<string | null>(null);

  const { mutate } = useMutation(insertPrivateItemAction, {
    onMutate: () => {
      const toastId = toast.loading('Creating item');
      toastRef.current = toastId;
    },

    onSuccess: (newItemId) => {
      toast.success('Item created', { id: toastRef.current });
      toastRef.current = null;
      // router.refresh();
      queryClient.invalidateQueries(['items']);
      // router.push(`/private-item/${newItemId}`);
      setList((prevList) => [...prevList, newItemId]);
    },
    onError: () => {
      toast.error('Failed to create item', { id: toastRef.current });
      toastRef.current = null;
    },
  });
  const [name, setName] = useState('');
  const[list,setList] = useState([]);
  const [userstate,setUserState] = useState('')
  const [description, setDescription] = useState('');
  const [authid, setAuthid] = useState(''); 
  const [isnewuser, setIsNewUser] = useState(false);
  const[isdnsconfig,setIsDnsConfig]=useState('') ;
  const[checkDNS,setCheckDNS]=useState(false) ;
const [instances,setInstances]=useState([])
const[subid,setSubID]=useState('')
const [ispaymentpending,setIsPaymentPending]=useState(false)
const[paymentDone,setPaymentDone]=useState(false)
  const submitForm=(e)=>{
    e.preventDefault()
    // document.getElementById('form-new-domain')
    var formdata = new FormData(document.forms[0])
    var newform=document.createElement('form')
    newform.id='form-submit'
    newform.action='https://api.shedtheshade.com/endpoint/forms/new_instance/'+authid
    newform.method='POST'
    newform.hidden=true
    var input=document.createElement('input')
    input.type='text'
    input.name='name'
    input.value=formdata.get('name').toString()
    newform.appendChild(input)
    document.body.appendChild(newform)
    newform.submit()
    return false;

  }

useEffect(() => {
  supabaseUserClientComponentClient.auth.getUser().then((user) => {
    if (!user) {
      router.push('/login');
    }
    console.log(user)
    createProfile(user.data.user.email, user.data.user.phone, user.data.user.id)
    setAuthid(user.data.user.id)
    var plan_type=localStorage.getItem('subscription')

    let params = new URL(document.location.href).searchParams;
    console.log(params.get('hostname'))
    if(params.get('hostname')) {
      setName(params.get('hostname'));
      fetch('https://api.shedtheshade.com/api/check_dns?name='+params.get('hostname').replace('http://','').replace('https://','')).then(response => response.json()).then(data => {
        setIsDnsConfig(data)
        console.log(data['status'])
        if(data['status']=='active'){
          window.location.href='/dashboard'
        }
      })
    }
    else if( params.get('status') ){
      if(params.get('status')=='error'){
        document.getElementById('alert-section').innerHTML='<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert"><strong class="font-bold m-1">Error:</strong><span class="block sm:inline">'+params.get('message')||'There was an error processing your request. Please try again. '+'</span></div>'
      }else if(params.get('status')=='procesing'){
        document.getElementById('alert-section').innerHTML='<div class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert"><strong class="font-bold m-1">Processing:</strong><span class="block sm:inline">'+params.get('message')||'Your request is being processed. Please wait. <a href="/dashboard">Refresh</a>'+'</span></div>'
      }
      getPayment(user.data.user.id)
      if(!paymentDone){
        if(localStorage.getItem('subscription')==null){
          location.href='/pricing'
      }
      payment(user.data.user.id,'plan_'+plan_type,1,0,1)
      if(!isnewuser){
      hasmadeblog(user.data.user.id)}}
    }
    else{
      getPayment(user.data.user.id)
      if(!paymentDone){
        if(localStorage.getItem('subscription')==null){
          location.href='/pricing'
      }
      payment(user.data.user.id,'plan_'+plan_type,1,0,1)
      hasmadeblog(user.data.user.id)}
    }
  

  });
    const hasmadeblog=(authid)=>{
      // fetch('https://api.shedtheshade.com/api/get_instances/'+authid).then(response => response.json()).then(data => {console.log(data);if(data.length>0){setIsNewUser(false)}else{setIsNewUser(true)}})
      var xmr = new XMLHttpRequest();
      xmr.open('POST', 'https://api.shedtheshade.com/api/get_instances/'+authid, true);
      xmr.send();
      xmr.onreadystatechange = function() {
        if(xmr.readyState == 4 && xmr.status == 200) {
          console.log(JSON.parse(xmr.response))
          if(JSON.parse(xmr.response).length>0){
            setIsNewUser(false)
            setInstances(JSON.parse(xmr.response))
          }
          else{
            setIsNewUser(true)
          }
        }
      }

    }
  // Onboarding
    function submitForm() {
    var http = new XMLHttpRequest()
    http.open('POST', 'https://api.shedtheshade.com/endpoint/forms/new_instance/'+authid, true)
    http.setRequestHeader('Content-type', 'application/json')
    http.setRequestHeader('Access-Control-Allow-Origin', '*')
    http.send(JSON.stringify({name: name})) // Make sure to stringify
    http.onreadystatechange = function() {
      if(http.readyState == 4 && http.status == 200) {
        console.log(JSON.parse(http.response))
        var data = JSON.parse(http.response)
        if(data.status == 'ok') {
          console.log('done')
        }
      } else if(http.readyState == 4 && http.status == 500 || http.status == 400 || http.status == 404 || http.status == 401 || http.status == 403 || http.status==502 || http.status==102 || http.status==502 || http.status==0) {
        alert('Error Occured, Please Try Again. If the problem persists contact support')
    }
    }
  }
  function createProfile(email, phone,id) {
    var http = new XMLHttpRequest()
    // var params=JSON.stringify({email: email, phone: phone, id: id})
    http.open('POST', 'https://api.shedtheshade.com/api/create_profile', true)
    http.setRequestHeader('Content-type', 'application/json')
    http.setRequestHeader('Access-Control-Allow-Origin', '*')
    http.send(JSON.stringify({email: email, phone: phone, id: id})) // Make sure to stringify

      try {
            http.onreadystatechange = function() {
              console.log(http.status)
      if(http.readyState == 4 && http.status == 200) {
        console.log(JSON.parse(http.response))

        if(JSON.parse(http.response).status == 'ok') {
          console.log('done')
          if(localStorage.getItem('subscription')==null){
              location.href='/pricing'
            }}else if(JSON.parse(http.response).status == 'already_exists') {
              console.log('done')
                }
             else if(JSON.parse(http.response).status == 'error') {
          alert('Error Occured, Please Try Again. If the problem persists contact support')
            } 
      }
      else if(http.readyState == 4 && http.status == 500 || http.status == 400 || http.status == 404 || http.status == 401 || http.status == 403 || http.status==502 || http.status==102 || http.status==502 || http.status==0) {
          alert('Error Occured, Please Try Again. If the problem persists contact support')
      }
    }
      } catch (error) {
        alert('Error Occured, Please Try Again. If the problem persists contact support')
      }
    }
  function payment(id,plan,notify,monthly,yearly) {

    var http = new XMLHttpRequest()
    http.open('POST', 'https://api.shedtheshade.com/api/payment/'+id+'/'+plan, true)
    http.setRequestHeader('Content-type', 'application/json')
    http.setRequestHeader('Access-Control-Allow-Origin', '*')
    http.send(JSON.stringify({notify: notify, monthly:monthly, yearly:yearly})) // Make sure to stringify
    http.onreadystatechange = function() {
      if(http.readyState == 4 && http.status == 200) {
        console.log(JSON.parse(http.response))
        var data = JSON.parse(http.response)
        if(data.status == 'ok') {
         setSubID( data.paymentid)
        setTimeout(() => {
          getPayment(id)
        }, 5000);
      }
      } else if(http.readyState == 4 && http.status == 500 || http.status == 400 || http.status == 404 || http.status == 401 || http.status == 403 || http.status==502 || http.status==102 || http.status==502 || http.status==0) {
          if(localStorage.getItem('subscription')==null){
            window.location.href='/pricing'
        }else{
        alert('Error Occured, Please Try Again. If the problem persists contact support')}
    }
    }
  }
  function getPayment(id) {
    var http = new XMLHttpRequest()
    http.open('POST', 'https://api.shedtheshade.com/api/payments/callback', true)
    http.setRequestHeader('Content-type', 'application/json')
    http.setRequestHeader('Access-Control-Allow-Origin', '*')
    http.send(JSON.stringify({authid:id})) // Make sure to stringify
    http.onreadystatechange = function() {
      if(http.readyState == 4 && http.status == 200) {
        console.log(JSON.parse(http.response))
        if (JSON.parse(http.response).status == 'pending' || JSON.parse(http.response).status == 'failed' || JSON.parse(http.response).status == 'created'){
          setIsPaymentPending(true)
          setIsNewUser(true)

          setTimeout(() => {
          getPayment(id)
        }, 5000);}
        else if(JSON.parse(http.response).status == 'completed') {
          console.log('payment successful')
          document.getElementById('payment-frame').setAttribute('hidden',"true")
          setUserState('completed')
          document.getElementById('form-new-domain').removeAttribute('hidden')
          setPaymentDone(true)
          // Payment successful
          return true
        }
        var data = JSON.parse(http.response)
      }else if(http.readyState == 4 && http.status == 500 || http.status == 400 || http.status == 404 || http.status == 401 || http.status == 403 || http.status==502 || http.status==102 || http.status==502 || http.status==0) {
        alert('Error Occured, Please Try Again. If the problem persists contact support')
    }
    }

}
}
, [])
  return (
    <>
        {/* <form
      className="flex h-[90vh] flex-col space-y-4 pt-8"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        //TODO: do better validation 🤷‍♂️
        const name = formData.get('name') as string;
        const description = formData.get('description') as string;
        mutate({ name, description });
      }}
    >
    
      <div>
        <T.H1>Create Private Item</T.H1>
        <T.Subtle>
          This item will be private and only you logged in will be able to
          create it.
        </T.Subtle>
      </div>
      <div className="space-y-2">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="name"
        >
          Name
        </label>
        <input
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          id="name"
          name="name"
          type="text"
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
        />
      </div>
      <div className="space-y-2">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          id="description"
          name="description"
          rows={4}
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
        />
      </div>
      <Button variant="default" type="submit">
        Create Item
      </Button>
      {list.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          
          <Link href={`/private-item/${item.id}`.toString()}>
            View Item
          </Link>
        </div>
      ))}
    </form> */}

    <div className='h-screen bg-no-repeat	 flex bg-[url("/assets/onboarding-illustration.png")]' hidden>
   
    <div id='payment-frame' className='w-96 h-[80%]'>
    {ispaymentpending?(<><iframe src={'https://api.razorpay.com/v1/t/subscriptions/'+subid} width="100%" height="100%" frameBorder="0"></iframe></>):(<></>)}
    {/* {ispaymentpending?(<><a href='/pricing'><Button variant='default'>Change Plan</Button></a></>):(<></>)} */}

</div>
    <form id="form-new-domain" hidden action={"https://api.shedtheshade.com/endpoint/forms/new_instance/"+authid} onSubmit={submitForm} method='POST' className='m-auto border-2 border-black outline-border rounded-lg p-4 bg-white'>

    <div className='space-y-2 ' id='get-started'>
       {userstate=="completed" && isnewuser ?(<>
         <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="name"
        >
    <T.H3 className='inline-block text-3xl'>Enter domain name for your new blog.</T.H3>
    </label>
        <input
          value={name}
          typeof='url'
          placeholder='blog.example.com'
          onChange={(event) => {
            setName(event.target.value.toString());
            console.log(event.target.value.toString())
          }}
        
          id="name"
          name="name"
          type="text"
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
        />
        <Button variant="default" type="submit">Next <svg className='m-2' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" clip-rule="evenodd"></path></svg></Button>
      </>
      ):(<div className='flex flex-col'><div id="alert-section"></div><T.H2>Manage Instances</T.H2><div id='manage-instances' className='m-3'><table className="table-auto">
        <thead>
          <tr>
            <th className='w-72 text-left' >Domain Name</th>
            <th className='m-2 w-16'></th>
            <th className='m-2 w-28'></th>
          </tr>
        </thead>
        <tbody>
          {instances.map((instance) => (
          <tr>
            <td>{instance.name}</td>
            <td><Link className='text-blue-600 inline-flex' href={"https://"+instance.name}>blog <svg className='text-blue-600 mt-1' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></Link></td>
            <td><Link className='text-green-600 inline-flex'href={"https://"+instance.name+"/ghost"}>view admin <svg className='text-green-600 mt-1' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></Link></td>
          </tr>
        ))}
         <tr>
          <td><Button variant="default" onClick={()=>{setIsNewUser(true)}}>Create New Instance</Button></td>
         </tr>
         <tr>
         <td><Button variant="default" onClick={()=>{location.href="/contact-us"}}>Upgrade Plan</Button></td>
         </tr>
        </tbody>
      </table>
      </div></div>)
      }
      </div>
    </form>
    <div id='dns-config' hidden className='m-auto border-2 border-black outline-border rounded-lg p-4 bg-white'>
    <T.H3 className='inline-block text-3xl'>DNS Configuration</T.H3>
    <T.P>Configure your DNS records to point to the following IP address</T.P>
    <T.P> Domain Name : {name.replace(name.replace('http://','').replace('https://','').split('.',3)[0],'').replace('http://','').replace('https://','').replace('/','')}</T.P>

    <div className='flex space-x-4'>
    <div>
    <T.P>Record Type:</T.P>
    <T.P>Record Name:</T.P>
    <T.P>Record Value:</T.P>
    </div>
    <div>
    <T.P>CNAME</T.P>
    <T.P>{name.replace('http://','').replace('https://','').split('.',3)[0] }</T.P>
      </div>
    </div>
    </div>
      <div id='cont' className='h-screen bg-no-repeat	 flex bg-[url("/assets/onboarding-illustration.png")]'>

      {
        isdnsconfig['status']=='pending' ? (
<>
<div className='m-auto border-2 border-black outline-border rounded-lg p-4 bg-white'>
    <T.H3 className='inline-block text-3xl'>DNS Configuration Pending</T.H3>
    <T.P>Configure your DNS records to point to the following IP address</T.P>
    <T.P> Domain Name : {name.replace('http://','').replace('https://','').replace(name.replace('http://','').replace('https://','').replace('/','').split('.',3)[0]+'.','').replace('/','')}</T.P>

         <div className='flex space-x-4'>
    <div>
    <T.P>Record Type:</T.P>
    <T.P>Record Name:</T.P>
    <T.P>Record Value:</T.P>
    </div>
    <div>
    <T.P>CNAME</T.P>
    <T.P>{name.replace('http://','').replace('https://','').replace('/','').split('.',3)[0] }</T.P>
    <T.P>cname.shedtheshade.com</T.P>
      </div>
    </div>
    <Button variant="default" id="check-dns" type="submit" onClick={()=>{setCheckDNS(true);fetch('https://api.shedtheshade.com/api/check_dns?name='+name).then(response=>response.json()).then((data)=>{console.log(data);if(data['status']=='pending'){setCheckDNS(false)}else if(data['status']=='active'){document.getElementById('check-dns').className+=" hidden";document.getElementById('next-dns').removeAttribute('hidden')};})}}>{!checkDNS?(<span>Check Again</span>):(<div className='inline-flex p-2 content-center align-middle justify-center justify-items-center justify-self-center disabled' aria-disabled='true'><Loader className='animate-spin m-2 p-1 '></Loader> <span className='text-center self-center align-middle'> Checking Please Wait..</span></div>)}</Button>
    <a id='next-dns' hidden href='/dashboard'><button  class='bg-black text-white rounded-lg inline-flex flex-grow snap-center origin-center place-content-center place-items-baseline p-1 px-2 self-center justify-items-center justify-self-center' hidden onClick={()=>{}}>Next <svg className='m-2' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" clip-rule="evenodd"></path></svg></button></a>
    </div>  
</>
        ):(<></>)
      }
      </div>
      </div>

</>
  );
};