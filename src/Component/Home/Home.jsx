import React from 'react';
import {HOME,HomeContent,HomeImages,Image,ImageObject_1,ImageObject_2,ImageObject_3,SayHi,Myname,MySkill} from "./Home.js"
import Image_1 from "../../images/Person.png"
import Imageobject_1 from "../../images/object_1.png"
import Imageobject_2 from "../../images/object_2.png"
import Imageobject_3 from "../../images/object_3.png"
export const Home=()=>{
    return (
       <HOME>
            <HomeContent>
               <SayHi>Hi ! I Am </SayHi>
               <Myname>Mohammad Piramun</Myname>
               <MySkill></MySkill>

            </HomeContent>
            <HomeImages>
                 <Image src={Image_1}></Image>
                  <ImageObject_1 src={Imageobject_1}></ImageObject_1>
                  <ImageObject_2 src={Imageobject_2}></ImageObject_2>
                  <ImageObject_3 src={Imageobject_3}></ImageObject_3>
            </HomeImages>
       </HOME>
    )
}