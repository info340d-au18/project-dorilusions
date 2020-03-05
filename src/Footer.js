import React, { Component } from 'react';
import './w3.css';
import './App.css';

export class Footer extends Component {
    render(){
        return(
            <footer class="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">
                <div class="w3-container w3-content" style="max-width:800px" id="contact">
                    <h2 class="w3-wide w3-center">CONTACT</h2>
                    <div class="w3-row w3-center  w3-padding-32">
                        <div class="w3-col w3-large w3-margin-bottom">
                            <i class="fa fa-map-marker" style="width:30px"></i>Seattle, WA 98105 United States<br/>
                            <i class="fa fa-phone" style="width:30px"></i><a href="tel:425-879-6802">Phone: 425-879-6802</a>
                            <br/>
                            <i class="fa fa-envelope" style="width:30px"> </i> <a href="mailto:uwtaiko@gmail.com">Email:
                                uwtaiko@gmail.com</a><br/>
                        </div>
                    </div>
                </div>

                <a class="fa fa-facebook-official w3-hover-opacity" href="https://www.facebook.com/uwtaikokai/"></a>
                <a class="fa fa-instagram w3-hover-opacity" href="https://www.instagram.com/taikokai/"></a>
                <a class="fa fa-youtube w3-hover-opacity" href="https://www.youtube.com/channel/UCfNit59pCLMfxQzRrVRrXTQ"></a>
                <p class="byline">&copy; Dorothy Lu and Aaron Zhao</p>
            </footer>
        )
    }
}