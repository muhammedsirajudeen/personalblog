'use server'

import { readdir } from "fs/promises";
import Link from "next/link";
import path from 'path'
export default async function Home() {
  const postsDir = path.join(process.cwd(), "src/posts");
  const files = await readdir(postsDir);
  
  return (
    <>
  <div className="flex w-full justify-center" >
    <h1 className="font-thin text-3xl mt-4" >MUHAMMED SIRAJUDEEN</h1>
  </div>
    <div className="flex flex-col" >
      {
        files.map((file,index)=>{
          return <Link key={index} href={`/post/${file}`} >{file}</Link>
        })
      }

    </div>
    </>
  );
}
