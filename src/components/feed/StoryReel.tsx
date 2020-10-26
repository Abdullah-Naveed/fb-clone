import React from "react";
import {Story} from "./Story";
import image1 from 'theme/assets/storyReel/1.jpeg'
import image2 from 'theme/assets/storyReel/2.jpeg'
import image3 from 'theme/assets/storyReel/3.jpeg'
import image4 from 'theme/assets/storyReel/4.jpeg'
import image5 from 'theme/assets/storyReel/5.jpeg'

export const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story
                image={image2}
                profileSrc="https://lh3.googleusercontent.com/-D24v2VO0cHs/Vo6sSHT4RJI/AAAAAAAADb4/nYRIbpOQI00O0Wh-SGrcGCqFei-Z3zcHwCEwYBhgLKtMDAL1Ocqwq1irLjTz5k6FyCCEQBT99o-2jYGWwUNzRyGhLzIsVUk6Cjab7XTc6qxu311xoGGk-S_Ugzafo9k_OuxYTbRax4-_sAVpUEFILs-5GTieaAs7pwLHdUt1a1iQCZETHheWwI8GF0T16O99XMOk7bebOBG9FvTPeeajjiI3sGWFHI4CrUZK4wEexT_OhOpzPR86t9JCl2giVCa4jjr9rwNRieH171Co2S3LTo2V45RpDyoUO8AY8Sca6RxzZkmiOJMdEb437Hl_vqSJj3kbGQAiHb9FLOImrOyRq-vPzT5yJQnvCgo_T6iHP-cgqJgCUSSXYTNqHqleJl5nV_14i__CkjxqDngSQNInn9T51IUGgRCMXNey78bX_L136pBIodwUJf4VJWZ0XXQCubSK8Ma7aa_yozwWgqoo1477yEGJscWNrbJeD8TZGDVYvImQQCHMF2sK3TqcpdqAczmHukEuyeBed4Yg3A_zplzMX-Aj0jrG9lgvzLtraUSIXOZlqu9qv8PCTyxCRiAjBazWRKIkcBdywslDqdgKyfkF9mf38T98v1YY0e7Cy5es2XFKS3V3ekY-ye-0IEiBywGEux5LXUVMsWOFDdbWKdI3s8t4w1amr-gU/w138-h140-p/thumb_12487230_10206681367730046_4560189565512936573_o_1024.jpg"
                title="Abdullah Naveed"/>

            <Story
                image={image1}
                profileSrc="https://www.randomlists.com/img/people/jim_carrey.webp"
                title="Jim Carrey"/>

            <Story
                image={image3}
                profileSrc="https://www.randomlists.com/img/people/drake.webp"
                title="Drake"/>

            <Story
                image={image4}
                profileSrc="https://www.randomlists.com/img/people/will_smith.webp"
                title="Will Smith"/>

            <Story
                image={image5}
                profileSrc="https://www.randomlists.com/img/people/jackie_chan.webp"
                title="Jackie Chan"/>
        </div>
    )
}
