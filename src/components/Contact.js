import React from 'react'
import "../styles/contact.scss"

function Contact() {
  return (
    <div className="contact">
        <main>
            <h1>Contact</h1>

            <form action="">
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder='Type Here' />
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" required placeholder='Abc@xyz'/>
                </div>

                <div>
                    <label>Message</label>
                    <input type="text" required placeholder='Tell us about your query....' />
                </div>

                <button type='submit'>Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact