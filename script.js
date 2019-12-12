(function () {
        window.onload = function () {
            var client = new BlipChat()
            .withAppKey('dm96ZGFiZWxlemFwcm9kdWNhbzpmODk2MmJkZi1iNzdlLTRhZjctYWIyZi00NTEwNDRiMWRlMDE=')
            .withEventHandler(BlipChat.LOAD_EVENT, function(){
				var iframe = document.getElementById("blip-chat-iframe");
				iframe.contentWindow.postMessage({ code: "ShowCloseButton", showCloseButton: true }, iframe.src);	
			});
			
			client.build();
			
			openBlipChat = function(event) {
				client.widget._openChat();
			}
        }
    })();