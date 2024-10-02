import { DiscussionEmbed } from 'disqus-react';
import { useEffect, useState } from 'react';

export default function DisqusComponent({ articleId, title}:any){
    let [pageUrl, setPageUrl]= useState('');
    useEffect(()=>{
        if (window !== undefined) {
            setTimeout(()=>{
                setPageUrl(`${window.location.protocol}//${window.location.hostname}${window.location.port ? ':'+window.location.port: ''}${window.location.pathname}`);
            },500)
        }
    },[])
    if(pageUrl == '')
        return <span>Loading comments...</span>

    return <>
        <DiscussionEmbed
            shortname='arun-tech-blogs'
            config={
                {
                    url: pageUrl,
                    identifier: articleId,
                    title: title,
                    language: 'en_US' //e.g. for Traditional Chinese (Taiwan)
                }
            }
        />
    </>
}