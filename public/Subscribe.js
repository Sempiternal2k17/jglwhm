const SubscribeFunction = (path, colorScheme) =>{
    var htmlTemplate = `
    <div class="subs">
        <img src="SundaySchooltings/Subs.jpg" alt="">
            <div class="sText">
                <h1>Be Notified</h1>
                <p>We are thrilled to invite you to subscribe to our church website in order to stay informed of all upcoming events, announcements, and notifications. Our website is the go-to source for all things related to our church, and we want to make sure that you never miss out on any important information.</p>
                <a href="Form.html?programSent=${path}"><button style="background-color: ${colorScheme}"><span><h1>Click me </h1></span></button></a>
            </div>
    </div>`;
    return htmlTemplate;
}

export {SubscribeFunction};