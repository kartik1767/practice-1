import React from 'react'
import "../styles/footer.scss"

function Footer() {
    return (
        <footer>
            <div>
                <h1>TechyStar</h1>
                <p>@all rights reserved</p>
            </div>

            <div>
                <h5>Follow Us</h5>
                <div>
                    <a href="#" target={"_blank"}>
                        Youtube
                    </a>
                    <a href="#" target={"_blank"}>
                        Instagram
                    </a>
                    <a href="#" target={"_blank"}>
                        Github
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer