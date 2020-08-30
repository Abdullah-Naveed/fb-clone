import React from "react";
import { SidebarRow } from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags"
import PeopleIcon from "@material-ui/icons/People"
import ChatIcon from "@material-ui/icons/Chat"
import StorefrontIcon from "@material-ui/icons/Storefront"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import { ExpandMoreOutlined } from "@material-ui/icons"

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow
        Icon=""
        src="https://lh3.googleusercontent.com/-D24v2VO0cHs/Vo6sSHT4RJI/AAAAAAAADb4/nYRIbpOQI00O0Wh-SGrcGCqFei-Z3zcHwCEwYBhgLKtMDAL1Ocqwq1irLjTz5k6FyCCEQBT99o-2jYGWwUNzRyGhLzIsVUk6Cjab7XTc6qxu311xoGGk-S_Ugzafo9k_OuxYTbRax4-_sAVpUEFILs-5GTieaAs7pwLHdUt1a1iQCZETHheWwI8GF0T16O99XMOk7bebOBG9FvTPeeajjiI3sGWFHI4CrUZK4wEexT_OhOpzPR86t9JCl2giVCa4jjr9rwNRieH171Co2S3LTo2V45RpDyoUO8AY8Sca6RxzZkmiOJMdEb437Hl_vqSJj3kbGQAiHb9FLOImrOyRq-vPzT5yJQnvCgo_T6iHP-cgqJgCUSSXYTNqHqleJl5nV_14i__CkjxqDngSQNInn9T51IUGgRCMXNey78bX_L136pBIodwUJf4VJWZ0XXQCubSK8Ma7aa_yozwWgqoo1477yEGJscWNrbJeD8TZGDVYvImQQCHMF2sK3TqcpdqAczmHukEuyeBed4Yg3A_zplzMX-Aj0jrG9lgvzLtraUSIXOZlqu9qv8PCTyxCRiAjBazWRKIkcBdywslDqdgKyfkF9mf38T98v1YY0e7Cy5es2XFKS3V3ekY-ye-0IEiBywGEux5LXUVMsWOFDdbWKdI3s8t4w1amr-gU/w138-h140-p/thumb_12487230_10206681367730046_4560189565512936573_o_1024.jpg"
        title="Abdullah Naveed"
      />

      <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center'/>
      <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
      <SidebarRow Icon={PeopleIcon} title='Friends'/>
      <SidebarRow Icon={ChatIcon} title='Messenger'/>
      <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
      <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
      <SidebarRow Icon={ExpandMoreOutlined} title='Marketplace'/>
    </div>
  );
};
