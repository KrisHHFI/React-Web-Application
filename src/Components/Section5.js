import React, { } from 'react';
import About from '../Images/About.png';

export default function Section5() {

    return (
        <div class="PageContent5" id="Section5">
            <div class="SectionTitle Section3Title">
                About
            </div>
            <div class="PageContent5Child">
                <img src={About} />
            </div>
            <div class="PageContent5Child padding">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <span class="Blue">et dolore
                magna aliqua</span>. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. 
                <br /><br />
                Duis aute irure dolor in <span class="Blue">reprehenderit in voluptate</span> velit esse cillum dolore eu fugiat nulla pariatur.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
            </div>
        </div>
    );
}