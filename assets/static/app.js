class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.btn_chat'),
            chatBox: document.querySelector('.chat_box'),
            sendButton: document.querySelector('.send_icon')
        }

        this.state = false;
        this.messages = [];
        this.iaActive = true;  // Indica se a resposta da IA está ativa
        this.activationCode = '121212';  // Código para ativar/desativar a IA
    }

    display() {
        const {openButton, chatBox, sendButton} = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatBox))

        sendButton.addEventListener('click', () => this.onSendButton(chatBox))

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({key}) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })
    }

    toggleState(chatbox) {
        this.state = !this.state;

        // show or hides the box
        if(this.state) {
            chatbox.classList.add('hide_chat_box')
        } else {
            chatbox.classList.remove('hide_chat_box')
        }
    }

    toggleIAResponse() {
        this.iaActive = !this.iaActive;

        if (this.iaActive) {
            console.log('Resposta da IA ativada.');
        } else {
            console.log('Resposta da IA desativada.');
        }
    }

    onSendButton(chatbox) {
        var textField = chatbox.querySelector('input');
        let text1 = textField.value
        if (text1 === "") {
            return;
        }

        let msg1 = { name: "User", message: text1 }
        this.messages.push(msg1);

        if (this.iaActive && text1 === this.activationCode) {
            this.toggleIAResponse();
        } else if (this.iaActive) {
            this.fetchIAReply(text1, chatbox);
        }

        this.updateChatText(chatbox)
        textField.value = '';
    }

    fetchIAReply(message, chatbox) {
            var textField = chatbox.querySelector('input');
            let text1 = textField.value
            if (text1 === "") {
                return;
            }
    
            let msg1 = { name: "User", message: text1 }
            this.messages.push(msg1);
    
            fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                body: JSON.stringify({ message: text1 }),
                mode: 'cors',
                headers: {
                  'Content-Type': 'application/json'
                },
              })
              .then(r => r.json())
              .then(r => {
                let msg2 = { name: "Ste.IA", message: r.answer };
                this.messages.push(msg2);
                this.updateChatText(chatbox)
                textField.value = ''
    
            }).catch((error) => {
                console.error('Error:', error);
                this.updateChatText(chatbox)
                textField.value = ''
              });
        }
        // ... (código para fazer a solicitação HTTP e receber a resposta da IA)

    updateChatText(chatbox) {
        var html = '';
        this.messages.slice().reverse().forEach(function(item, index) {
            if (item.name === "Ste.IA") {
                html += '<div class="messages_item messages_item--visitor">'+ item.message + '</div>';
            } else {
                html += '<div class="messages_item messages_item--operator">'+ item.message + '</div>';
            }
        });

        const chatmessage = chatbox.querySelector('.chat_box_body');
        chatmessage.innerHTML = html;
    }
}

const chatbox = new Chatbox();
chatbox.display();
