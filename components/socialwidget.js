import Link from "next/link";
import styles from './layout.module.css'
import { Follow } from 'react-twitter-widgets'
export default function SocialWidget () {
    return (
        <div>
            <br />
            <Follow username='melissastmoore'></Follow>
            {/* <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:4RUivryHDsx8Q9s6kcs3YP?si=b5lk1WtRRg-RrHWkLv-IKw&size=detail&theme=light" width="300" height="56" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowtransparency="true"></iframe>
            <br/>
            <br/>
            <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="F3CS2KAF2B3DL" />
                <input type="image" src="https://i.imgur.com/uyF3zgm.png" border="0" name="submit" title="Help support future music and tv show ventures by Donating!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form> */}
            {/* <br /> */}
            {/* <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="F3CS2KAF2B3DL" />
                <input type="image" src="https://i.imgur.com/uyF3zgm.png" border="0" name="submit" title="Help support future music and tv show ventures by Donating!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form> */}
            <br />
        </div>
    )
}