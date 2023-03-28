//ver=6
window.addEventListener('message', function messageFromAmp(event) {
    if(event.data.type == 'lang' && event.data.lang) {

        const lang = event.data.lang;
        globalThis._rtLang = event.data.lang;

        window.removeEventListener('message', messageFromAmp);
    }
});

window.rtInformers = window.rtInformers || {};
window.rtGoodsQueues = window.rtGoodsQueues || [];
window.rtGoodsOnPage = window.rtGoodsOnPage || [];
window.clickedGoods = window.clickedGoods || [];

rtInformers[23509] = rtInformers[23509] || (function() {
    var informer = function() {
        var self = this,
            maxTeasers = 4*1,
            rtbTeasers = 0,
            goodPos = {},
            statInterval = {},
            fixed = -1;

        var getLang = function() {
            try {
                return (globalThis._rtLang || parent.document.documentElement.lang || 'uk'); 
            } catch (e) {
                return (globalThis._rtLang || document.documentElement.lang || 'uk');
            }
        };

        this.catchLogging = function(e) {
            try {
                const params = [
                    'ticker_id='+ encodeURIComponent(23509),
                    'system=goods',
                    'message='+ encodeURIComponent(e.message +' '+ window.navigator.userAgent)
                ];

                const url = 'https://js-errors.redtram.com/?'+ params.join('&');

                fetch(url).
                    then(function(r) {}).
                    catch(function(e) { throw e; })
                ;
            } catch (e) {
                console.log('[RTG] '+ e.message);
            }
        };

        try {
            var customDesignList = [];
        } catch (e) {
            this.catchLogging(e);
        }

        var customDesignId = null;
        try {
            var cdll = customDesignList.length+1;

            if (typeof customDesignList !== 'undefined') {
                if (typeof idn !== 'undefined' && idn == 'test') {
                    customDesignId = Math.floor(Math.random()*cdll);
                } else {
					var now = new Date();
					var start = new Date(now.getFullYear(), 0, 0);
					var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
					var oneDay = 1000 * 60 * 60 * 24;
					var day = Math.floor(diff / oneDay);

                    var showDays = 2;

                    customDesignId = Math.ceil(day / showDays) % cdll;
                }

                if (customDesignId >= cdll-1) {
                    customDesignId = null;
                }
            }
        } catch (e) {}

        
        var newsOrders = [],
            goodsOrders = []
        ;

        this.geoSettings = JSON.parse('[{"geo_id":0,"selected":[2,2,2,2,2]}]');
        this.relations = JSON.parse('{"3":"41003","2":"41004","1":"41005"}');
        

        this.downlink = function() {
            try {
                return navigator.connection.downlink;
            } catch (e) {
				try {
					if ((window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart)/1000 > 5)
						return 0.9;
					return 2;
				} catch (e) {
					return 0.9;
				}
            }
        };

        this.initFixidle = function() {
            try {
                if (!document.head) {
                    fixed = -3;
                    return false;
                }

                var fixidleScript = document.createElement('script');
                fixidleScript.setAttribute('src', 'https://fixidle.com/js/collector.js?rtuid='+ this.rtuid +'&code=goods&v='+ (new Date()).getTime());
                fixidleScript.setAttribute('type', 'text/javascript');
                document.head.appendChild(fixidleScript);
            } catch(e) {
                fixed = -2;
            }
        };

        this.getFixed = function() {
            if (typeof window.fixidleData === 'undefined' || typeof window.fixidleData.segment === 'undefined' || typeof window.fixidleData.collection === 'undefined')
                return {collection: '', fixed: fixed};
            return {collection: window.fixidleData.collection, fixed: window.fixidleData.segment};
        };

        this.isMobile = (function() {
            return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
                || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4));
        })();
        this.isTablet = (function() {
            return /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(navigator.userAgent.toLowerCase());
        })();
        this.rtuid = '';
        this.goodsList = [];
        this.banner = [];
        this.tickerOptions = {};
        this.needShowLinkButton = true;
        this.bidTimeExpired = false;
        this.timeLoaded = {};
        this.onlyGoods = [];
        this.pixelQueues = {};

        this.init = function(idn, rtuid) {
            this.rtuid = rtuid || '';
            this.initFixidle();
            this.initInformer(idn);
            this.initStyle(idn);

            this.reload(idn);

            setInterval(function() {
                if (
                    window == window.parent
                    && document.hasFocus()
                    && Math.round(new Date().getTime() / 1000) - self.timeLoaded[idn] >= 300
                    && self.elementInViewport(document.getElementById(idn))
                ) {
                    self.reload(idn);
                }
            }, 100);

            
                if(true) {
                    this.sendPostMessages(idn);
                    console.log('AMP_message -> getLang: ', getLang());    
                }
            
        };

        this.windowLocation = function() {
			try {
				if (window.top.location != window.location) {
                    return encodeURIComponent(document.referrer || window.location.href);
				} else {
					return encodeURIComponent(window.location.href);
				}
			} catch (e) {
				return 'undefined';
			}
        }

        this.reload = function(idn) {
            self.goodsList = [];
            self.bidTimeExpired = false;
            goodPos[idn] = 0;
            document.getElementById(idn + "-list-23509").innerHTML = "";

            var interval = setInterval(function() {
                if (rtGoodsQueues.length) return;
                rtGoodsQueues[23509] = idn;

                clearInterval(interval);

                self.initScript(idn);

                self.timeLoaded[idn] = Math.round(new Date().getTime() / 1000);
            }, 10);
        }

        this.initInformer = function(idn) {
            document.getElementById(idn).innerHTML = "";

            
            var header = document.createElement(idn);
            header.setAttribute("class", idn + "-header-23509");
            document.getElementById(idn).appendChild(header);
            
            
            var logo = document.createElement("a");
            logo.setAttribute("class", idn + "-logo-23509");
            logo.setAttribute("target", "_blank");
            logo.setAttribute("rel", "nofollow");
            logo.setAttribute("href", "https://client.redtram.com/partners/?ref_id=21972");
            header.appendChild(logo);
            var logoImage = document.createElement("img");
            logoImage.setAttribute("class", idn + "-logo-image-23509");
            logoImage.setAttribute("src", "https://img.redtram.com/redtram/logo_text.svg");
            logo.appendChild(logoImage);
            
            

            var informer = document.createElement(idn);
            informer.setAttribute("class", idn + "-informer-23509");
            document.getElementById(idn).appendChild(informer);

            var list = document.createElement(idn);
            list.setAttribute("id", idn + "-list-23509");
            list.setAttribute("class", idn + "-list-23509");
            informer.appendChild(list);
        };

        this.initStyle = function(idn) {
            var style = document.createElement("style");
            style.setAttribute("type", "text/css");

            var css = '';

            

            css += '#' + idn + '{';
            css += '    text-align:center;';
            css += '    background:transparent;';
            css += '    position:relative;';
            css += '}';

            css += '.' + idn + '-informer-23509,.' + idn + '-informer-23509 *{';
            css += '    border:0;';
            css += '    margin:0;';
            css += '    padding:0;';
            css += '    box-sizing:border-box;';
            css += '}';

            css += '.' + idn + '-banner-23509{';
            css += '    display:inline-block;';
            css += '    vertical-align:top;';
            css += '    margin:0 auto!important;';
            css += '}';

            
            css += '.' + idn + '-header-23509{';
            css += '    display:block!important;';
            css += '    font-size:0!important;';
            css += '    position:relative!important;';
            css += '}';

            
            css += '.' + idn + '-header-23509{';
            css += '    text-align:left!important;';
            css += '}';
            

            
            css += '.' + idn + '-label-23509{';
            css += '    min-height:16px!important;';
            css += '}';

            css += '.' + idn + '-logo-23509{';
            css += '    display:inline-block!important;';
            css += '}';

            css += '.' + idn + '-logo-image-23509{';
            css += '    height:16px!important;';
            css += '    vertical-align:middle!important;';
            css += '}';
            
            

            css += '.' + idn + '-informer-23509{';
            css += '    display:block;';
            css += '    border:0px solid #dfdfdf;';
            css += '    border-radius:0px;';
            css += '    margin:0px -7px 0px -7px;';
            css += '    padding:0px 0px 0px 0px;';
            css += '}';

            css += '.' + idn + '-list-23509{';
            css += '    display:-ms-flexbox;';
            css += '    display:-webkit-flex;';
            css += '    display:flex;';
            css += '    -ms-flex-wrap:wrap;';
            css += '    -webkit-flex-wrap:wrap;';
            css += '    flex-wrap:wrap;';
            
            
            css += '}';

            css += '.' + idn + '-item-23509{';
            css += '    width:100%;';
            
            css += '    padding:7px 7px 7px 7px;';
            css += '}';

            css += '.' + idn + '-teaser-23509{';
            css += '    display:-ms-flexbox;';
            css += '    display:-webkit-flex;';
            css += '    display:flex;';
            
            css += '    flex-direction:row;';
            
            
            css += '    height:100%;';
            css += '    background-color:white;';
            css += '    border:0px solid #eeeeee;';
            css += '    border-radius:3px;';
            css += '    box-shadow:1px 1px 3px 0px rgba(0, 0, 0, 0.25);';
            
            css += '    margin:0 auto;';
            
            css += '    padding:0px 0px 0px 0px;';
            
            css += '    overflow:hidden;';
            
            css += '    position:relative;';
            css += '    overflow:hidden;';
            css += '    transition:all .3s ease 0s;';
            css += '}';

            css += '.' + idn + '-teaser-23509:hover{';
            css += '    background-color:white;';
            css += '    border-color:#eeeeee;';
            css += '    position:relative;';
            css += '}';

            css += '.' + idn + '-teaser-23509.overlay:after,';
            css += '.' + idn + '-good-23509.overlay:after{';
            css += '    content:"";';
            css += '    width:100%;';
            css += '    height:100%;';
            css += '    background:rgba(0,0,0,.5);';
            css += '    position:absolute;';
            css += '    top:0;';
            css += '    left:0;';
            css += '    z-index:2;';
            css += '}';

            css += '.' + idn + '-link-button-23509,.' + idn + '-link-button-23509:hover{';
            css += '    display:block;';
            css += '    font:14px/16px helvetica,tahoma;';
            css += '    color:#fff;';
            css += '    text-decoration:none;';
            css += '    background-color:#e45959;';
            css += '    border-radius:5px;';
            css += '    padding:7px 20px;';
            css += '    position:absolute;';
            css += '    top:100%;';
            css += '    left:50%;';
            css += '    z-index:3;';
            css += '    transform:translateX(-50%);';
            css += '    transition:top .5s ease 0s;';
            css += '}';

            
            css += '.' + idn + '-photo-23509{';
            css += '    display:block;';
            css += '    flex:0 0 auto;';
            css += '    line-height:0;';
            css += '    text-align:center;';
            css += '    position:relative;';
            css += '    z-index:1;';
            css += '}';

            css += '.' + idn + '-image-wrapper-23509{';
            css += '    display:inline-block!important;';
            
            css += '    width:125px!important;';
            css += '    height:125px!important;';
            
            
            css += '    text-decoration:none!important;';
            css += '    border:0px solid #eeeeee!important;';
            css += '    border-radius:0px!important;';
            
            css += '    margin:0px 0px 0px 0px!important;';
            
            
            css += '    position:relative!important;';
            css += '    transition:all .3s ease 0s!important;';
            css += '}';

            css += '.' + idn + '-image-wrapper-23509:hover{';
            css += '    border-color:#eeeeee!important;';
            css += '    text-decoration:none!important;';
            
            css += '}';

            css += '.' + idn + '-image-crop-23509{';
            css += '    display:block;';
            css += '    width:100%;';
            css += '    height:100%;';
            css += '    line-height:0;';
            css += '    border-radius:0px;';
            css += '    margin:0 auto;';
            css += '    position:relative;';
            css += '    overflow:hidden;';
            css += '}';

            css += '.' + idn + '-good-23509.rozetka:before,';
            css += '.' + idn + '-image-crop-23509.rozetka:before{';
            css += '    content:"";';
            css += '    display:block;';
            css += '    width:84px;';
            css += '    height:22px;';
            css += '    background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAWCAMAAABpJUuUAAAB3VBMVEUAAAD///////////////////////////////////////////////8AAAD8/Pz+/f4iHx/n5uazsrIA1VoB0FkEwVQ5NjYZFhYOCwv39/fw7++Vk5N7eXlfXV0DyFcEvlEgHR3q6enSzc6DgoIA2VtXVFQHsU8Jp0tLSUkMkkNEQkIcPCklDBgnARUqABAKBwf7+/vg4ODHxcW9vLxzcXFwbm4Cy1YCxVMGuFAGrkwRdzsApC0SDw/k4+Pe3d3a2dm5uLijoaGfnp6Mi4t2dXUA3ltbWVkfmFEIqk4LmkcPhUEVZzYXVzEwLS0eMSUfGhsjExsmBxf/8v/z8/PLysrBwcGsq6ucvaicm5t+tpRqaWkA618Fu1EAyVAJpEoInkYQikIQgD4AxzsAujYAmTQWYDQAvzM0MjIAty4AkykqKCggJiEAmiD/+P/86/b25PHt7Ozx3uva0deyuLWYlpaRj49wn4RNsXZanXRDpWlnZWU+mVwGu1QA0FIA4FBQTk4gjUsAy0QYhT07OTkApTcAsC8dNycApSQBIQnn2eTpvtfT0tKtw7aftqqlo6OOqJh3vpR6rot8oYphtIRxlX9hm3o7rmtXk2kyn2EkqFsUmk0jkEhJSEgA1z4bRix6y9AzAAAADHRSTlMA9NvVs6eAbkArIMR7rE7nAAAC+klEQVQ4y7WV5VpbQRCGAwGCzJBDPMSFhDjECcE9HtzdtUiBUtzr7nKt3aUJvYBT3j+zz+55vjO2s5y/FPHyuTnAihxuPq+I84/iglz4L+QWFGc1C/MAnr/Z6+j4+uHlOkvZvMKMZgmsf7y9nT4yHs9ffd/ms1MtuVMtzoNnpzdHXZ3+4Jw2dra6u8bSV5qBAtj4sdhp9ovFkeiULdK2+h7YUUDqngv7i2bz+HggKDIKhWbN2JKHZbWKODzQz2pqLLYakXgylgoZNeKZp91A4ZcS4I6eah3dqKI7VXxyQCAma/nkrLqcfkCXwOPkw9BV5+jUdTBgiZhCc0KjJjCrB0q/dtmFWqUc3FZEZBTQgrLkhUTmNjBSWRibVai1xmXY75OWQTuqAEAlCwuIyedw4cm0qWt0ImgyidSiNmE0JKwdAMoOSpqbrKjQIVYolGFs6bUahhElUIneZkWrR6GyonZY5ZagpwIrSEyNKCWnAFxODnT4hZquoFotMhrVloTTIqwdAkoT+gAeY6sBlQDQi+FHAD48ASLqU7Q2A4AAKwBKJVIpHgDhJ9YbkLiaQ0WFk10av5gkNppwOG0i8b2o1JUMS8CLBgB4gTI5xFEBVFSlbG+5F71ARibVA3hQ2ufDSiJKwz+OORM2W4JJO+yMY6pNnAl/EK2NcVSRqFDZ+HoZvXItJgcHW3Un2OIW7HhI1qlEKYMNApSVkX8txCVJ4iqXFOrdfKc9bbenUgzD2FfEgbFMoZrQC7oF4qaAQUSXF5S4TFd9SpeLmOGspwtYDwfYrncxOpqudlIoHriXRuacRFCbdjicobbDbEv10C7pqddXQWlDXy9Zl9eVUeR3to5syKtJmkFXVwXysoYG+jlZ1AOPND//y7xoxbGStv+OhmIm9djSNuvmJ9d08/zXYcppGxeNjJrVgZtd9teUDpSt8+maa/OIfyKiPlv91M12oGRG3+b+5eJljWliptbyao316MsOaf7W28+nk9/2BjZYD+mHek4e5OH7A4FIvhFbu2cpAAAAAElFTkSuQmCC);';
            css += '    background-size:contain;';
            css += '    position:absolute;';
            css += '    top:0;';
            css += '    right:0;';
            css += '    z-index:1;';
            css += '}';

            css += '.' + idn + '-good-23509.rozetka:before{';
            css += '    top:5px;';
            css += '    right:5px;';
            css += '}';

            

            

            

            css += '.' + idn + '-teaser-23509 video.'+ idn +'-good-video-23509,';
            css += '.' + idn + '-image-23509{';
            
            
            css += '    width:100%!important;';
            css += '    margin:0% 0 0%!important;';
            
            
            
            css += '    padding:0!important;';
            css += '    vertical-align:top!important;';
            css += '    border:none!important;';
            css += '    opacity:1!important;';
            css += '    transition:all .3s ease 0s!important;';
            
            css += '}';

            css += '.' + idn + '-video-container-23509 {';
            css += '    display: inline-block;';
            css += '    overflow: hidden;';
            css += '    position: relative;';
            css += '    width: 100%;';
            css += '}';

            css += '.' + idn + '-video-container-23509 > video {';
            css += '    width: 125%;';
            css += '}';

            css += '.' + idn + '-image-wrapper-23509:hover .' + idn + '-image-23509{';
            css += '    opacity:1!important;';
            css += '}';
            

            

            

            css += '.' + idn + '-text-23509{';
            css += '    display:block;';
            css += '    width:100%;';
            
            
            
            css += '    padding-bottom:29px;';
            
            
            css += '    height:100%;';
            css += '    position:relative;';
            
            css += '}';

            css += '.' + idn + '-title-23509,.' + idn + '-title-23509:visited{';
            css += '    display:block!important;';
            css += '    font:normal bold 14px/16px Roboto, sans-serif!important;';
            css += '    color:black!important;';
            css += '    text-align:center;';
            css += '    text-decoration:none!important;';
            css += '    text-transform:none!important;';
            css += '    margin:8px 8px 8px 8px!important;';
            css += '    word-wrap:break-word!important;';
            css += '}';

            css += '.' + idn + '-title-23509:hover,.' + idn + '-title-23509:active{';
            css += '    color:black!important;';
            css += '    text-decoration:none!important;';
            css += '    text-transform:none!important;';
            css += '}';

            
            css += '.' + idn + '-description-23509,.' + idn + '-description-23509:visited{';
            css += '    display:block!important;';
            css += '    font:normal normal 13px/15px Roboto, sans-serif!important;';
            css += '    color:black!important;';
            css += '    text-align:center;';
            css += '    text-decoration:none!important;';
            css += '    text-transform:none!important;';
            css += '    margin:8px 8px 8px 8px!important;';
            css += '    word-wrap:break-word!important;';
            css += '}';

            css += '.' + idn + '-description-23509:hover,.' + idn + '-description-23509:active{';
            css += '    color:black!important;';
            css += '    text-decoration:none!important;';
            css += '}';
            

            
            
            
            css += '.' + idn + '-button-wrapper-23509{';
            css += '    display:block;';
            css += '    text-align:right;';
            css += '    margin:0px 0px 0px 0px;';
            
            css += '    position:absolute;';
            css += '    left:0;';
            css += '    right:0;';
            css += '    bottom:0;';
            
            css += '}';

            css += '.' + idn + '-button-23509,.' + idn + '-button-23509:visited{';
            css += '    display:inline-block!important;';
            
            css += '    max-width:100%!important;';
            css += '    font:normal normal 15px/17px Arial,sans-serif!important;';
            css += '    color:white!important;';
            css += '    vertical-align:top!important;';
            css += '    text-decoration:none!important;';
            css += '    text-transform:none!important;';
            css += '    white-space:nowrap!important;';
            css += '    text-overflow:ellipsis!important;';
            css += '    background-color:#b1170f!important;';
            css += '    border:0px solid #b1170f!important;';
            css += '    border-radius:0px!important;';
            css += '    padding:6px 12px 6px 12px!important;';
            css += '    overflow:hidden!important;';
            css += '    transition:all .3s ease 0s!important;';
            css += '}';

            css += '.' + idn + '-button-23509:hover,.' + idn + '-button-23509:active{';
            css += '    color:white!important;';
            css += '    background-color:#801b16!important;';
            css += '    border-color:#b1170f!important;';
            css += '    text-decoration:none!important;';
            css += '}';
            
            

            

            css += '@media only screen and (-webkit-min-device-pixel-ratio: 2),'
            css += '       only screen and (min-resolution: 144dpi) {';
            css += '    .' + idn + '-good-23509.rozetka:before,';
            css += '    .' + idn + '-image-crop-23509.rozetka:before {';
            css += '        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAAsCAMAAADGtANIAAAB11BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////8hHx8hHh4EvFIiHh4jHx/19fU2MzMEulEEu1Hj4uIoJSUDv1IDwVMBy1YA21sCxlUA0FgsKSkCyVXl5OT8/PwA11oCxFQA1lne3t4nABP4+PglBhYkDBgFtU8hIR/z8/MmIyMA2VsA01kwLS0FuFABzVcGsE1zcnKIhYVgXV0PgD7o5+eBgYDh4OAXVC8/PT3W1NUQejzQz8+TkpIKmEYTbTcNhkDAv8D+/v7s6+sjExoHqEsJo0lKSEiNjIxvbW3w8PDHxsauqqwA4F0A3lwQdDm0s7Pu7e2YlZYiGBwUYDMJnUZSUFA6ODjT0tJ8fHtlYmMLlUQLkkMfKCEMj0IrAAtWVFSpp6ccNCXZ2dlCQEB4dnamoaNpaWgaQykaPigGrUy+vLwqJyfUy86wo6pGQ0MNikEkdUUA519ZV1e3t7axsLA8glhLc1sA5F48dlMbOie7srZcf2sjaD5beGYngEuDlYppeG90j34sfE0YSywYTi6gn5/w+vXEur6Lr5wVWzGonKI3YEYZgkU3WkMlNytpTVwMDjNnAAAAFXRSTlMApmLpCWyEDftC2a7QIFhWhbmg44wwukvgAAAIHElEQVRYw9VZ93caxxZWbMclrrGzs0Xsot1lAcECQiB2KZJAICEBEqgigXqvxVZzbMm1JE61nbzktT/23RmqSt7JDzkHcg9nmbIz+82d+925e7eh4bTcvnvv5q3L16kayvXLt27eu3u74f/ItTv3H1B1Ig/u37n2BzCvXPqSqiv58tKVi3De+Kx8h63tl7aBeoD62Y3zOD//otCXfrL0+u333//89tsffm2pOdIvPj9rnVcL/Old/k9IMWu61a5ZPUMnXc21Rnr96ilLvfYVaTX+t9WVER0CEUZx5KR4R821+lU10quk6fdYaiXvmtUEhmF4yeHQzYpd/HdvrZFerbJPsu9dxyZNfzMXY0SGCejBVOzDus7LptRWrXe/bKc3MI8GfgpNMKrqMXtCIsNrQzMbICmTR5oIP6o1o4rcv0L8UodoZ5S5IUWQGIGRUzPv8vHZGbfHyjO51Re19lIFf3oJl58MmQQ1HE6uyzzDqIfJw5ymmeT9WV0QxIn30RojvUQYj8+jyMlEwBwOO/TkoApU8sgyLyqSrKwAsXjF/G2tzyjM/DuESLKqDOZlxrGSMhPSy5oSUmVGAf0yAXviSY2R3gGg9+E/+q+cxxxefbayFl6XBSYgTYRidGZtLohBM4zgeF1joPchrsPx0j9gw6X4oRbfiAG4gFn9bcb7zrvxziwSoLyeOKoe1thWlKrTwObMHvVni8bc0lYlLaeqLQNtpwQCi+I8UGiJOMl4ck9jVbjx4HbDXfz/Sg9InrDCZ9zJhJkPDn2IDeqafuCVRQbIBOxifqoGuocMBVkY7oiQlp7RBQ6BcN0Pd6DaXroBBC1RXZUqGmnstlQ6LQu2cc6AuvCuDjctIG6STDfNGQx+rtrZ3G24B9evj+2CFApLysfk6pxVmUsO5oKiYFr5zSzwos4HGEF/Zasa9ZxFNA2waBDLIvZtpFy89FFUJ82CFJrQHjWKe1i8EER3TTVBDws16GdpruUTh+h2ilq0IGgs4BwzQA9Cm1WPvNdwE66PQlY4juIeUbfGGSmUUK08GKc0OCgJuiOZBLimcE/VqE4WsQvDT5/u+mC+eYwTQ/Lv7voxMPSJWkYciMGPV4NegIIR62vyYeE6Gi0sx7EI4OGbHtu2YMwS1c/BSnaNVFGheCU06q888mbDLbj+IKqMEIyvvnHkV4OCRxIJh3hGMpuGDjbW7bxgHvrmNFB6krINUC8BB5se4+CxC0dtNtvYSwM0+NNjvT2Liy29Fqy0F9gSaLRFEbtzRmw9iz3G/iZEN/UboUhNwxx9WQQ4N9uKFt5N091d0LxceeSthstw/dEKx5HkSa7HUzKETQz+CRCWmA5jra41FVYhhx6dAUrYNQW46MgkYpFvp9CVxTodL2zgPJS5LDFZlv5ERUCiRSxpP6ItaVLsA0QLFtDgSGn6LUA9SnVDeyUgutyA45HvgiIviYonnpCJMgWeF4MmOQEwZ9yzdmiyBqbPAN2i0mMt2Db9VAcorrPUNw99HSS09YMdWsij2ov2DFKcxmhB6LGxBJRjWTCGsiqGwZCOqBGOo0crkUkJKBxGmpYziyCSErRrwcH8O4DpZVsT+ASw8meAIovf4n+Med4HOLjKLpWAZn3AGX/BsttRWfouAgrmgji6yCRqEhQKPIqA0tFOBSjZekXUj9fyiZCoWK2q6BlKzW5nXK2sF6HWbTCLi7YeEd4gDjZsGuMu8mAR0xUCw36swuExqgy0L9ILkk1fCJQbnodxlgKseVj30/bOUQNQdqmy9YRMvBo8dLlavdsH+/sH22sZt8s948Ur9bqSJjhFLyDTZtdoE8uhYXBbi9ixDBPlZRdoIHiUeom9qsFJNTc3R6cI64vqsjVeAJTdtUV8MGAYO/6jou45/CutH8hE3NOgLJoP3GymlUhmhi3t1EwmhMOp8+4Jk2kLbuP2oP4QK9e3+3yzm2h5hNoiXtPw1OL3+7l26MeVbiz+zZbzQGlw+OOIUIiilmHy7tHl5eU9A5mr5J6Iww9rvBZ2oXPidcXsPDlDXw2ccvgsYTZwiWUfQmEUe++SV1/CdEDE3xPZo9qxVywsnjUQlUbBA/sKx+UIDMNzLOHhI1QWToOiA52GKfyRksMvHqG8Kq21ngPKuhM6BqoGTh2hncjHvSwYn4/jMD+OnoNjxGAtndgfbaKmsqBR6iFXrnHdRKNR0KilEBj0cT5uqWCbTYjr7eIec/NFH2ZATdxI6QgtBCVzcsAEKmXPKNS9T8ISXl/prwYacUadxCG2RKPNOwVnN5WdHB+fzI6VbiiLM02lK1VnM9kaGy4XTuUxp9FJKNbmjDb37BihOlV8Ttpp3HGWghIS5hlPcgFJ33Z5yxDZGWyw7hWy838qzBug/vLkykB1mFcMnEWrRx90Z4pIM8D6te0Det+BFRrQ6iJwJq8i6fc5IWCKu/DeezOutdn1Q0bNJVexhdbLq0jh5W58fSIg2WMubJiZvKA5gpIpMWvGOJk374318HJXel32aB5F33d53WuenMLzAVn8ELIKGOfxN/XxulxIQFBLoZzH6ohtbJv1ANilVf646ggwvJQ7/r1OEhDllE7ijaRoszHVLKuqnfmYcgSEQNCeGq+blE4pSfYkKdsVbW42vjI0lIqt6gHeqjH/7KmjJFkp7di8d2w1PbOux/P5fMihOkxivaUdy4ncr388GVQnntn1ZxOyNHfSUW+J3OrU+HjX67c/Q2r8u5FfbfWXGj/9sWGg8Zfap+//6GPD3+fzzd/ng1h9f2L8HwkjToIfcSF3AAAAAElFTkSuQmCC);';
            css += '    }';
            css += '}';

            try {
                
            } catch (e) {
                this.catchLogging(e);
            }

            try {
                
            } catch (e) {
                this.catchLogging(e);
            }

            try {
                if (customDesignId !== null && typeof customDesignList[customDesignId] !== 'undefined') {
                    var design = customDesignList[customDesignId];

                    var styleNode = document.createElement("style");
                        styleNode.setAttribute("type", "text/css");
                        styleNode.innerHTML = design.replace(/\{idn\}/g, idn);
                    document.getElementById(idn).appendChild(styleNode);
                }
            } catch (e) {
                this.catchLogging(e);
            };

            if (style.styleSheet){
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            document.getElementById(idn).parentNode.insertBefore(style, document.getElementById(idn));
        };

        this.initScript = async function(idn) {
            const lng = await getLang();
            var params = (function() { var chunks = window.location.search.substr(1).split('&'); var obj = {}; chunks.forEach(function(v, k) { var t = v.split('='); if (t.length == 2) obj[t[0]] = t[1]; }); return obj; })();

            var referrer = document.referrer;

            try {
                if (window !== window.parent) {
                    referrer = window.parent.document.referrer;
                }
            } catch (e) {};

            var script = document.createElement("script"),
                ref2 = referrer ? referrer.split('/')[2].replace('www.','') : ('utm_source' in params ? params.utm_source : ('utm_referrer' in params ? params.utm_referrer : ''));

            if(!globalThis._rtLang) {
                let e = new Error('AMP did not get a Lang parameter!');
                this.catchLogging(e);
            }
            var src = 'https://goods.redtram.com/g/?i=23509&ver=2&srv=128&f=jsonobj&ref2=' + ref2 + '&idn=' + idn + '&lng=' + getLang();
            console.log(src);
            
            if (this.rtuid) {
                src += '&rtuid='+ this.rtuid;
            }

			if (this.windowLocation() !== 'undefined') {
				src += '&wl='+ this.windowLocation();
			}

            script.setAttribute("async", "");
            script.setAttribute("type", "text/javascript");
            script.setAttribute("charset", "utf-8");
            script.setAttribute("src", src);
            document.getElementById(idn).appendChild(script);
            script.remove();

            var attempts = 50,
                interval = setInterval(function() {
                    if (rtGoodsQueues.length && attempts-- > 0) return;
                    clearInterval(interval);
                    rtGoodsQueues = [];
                }, 10);
        };

        this.getUrlParameter = function(name) {
            name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            var results = regex.exec(location.search);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        };

        this.uuidv4 = function() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };

        this.toWord = function(str, limit) {
            if (str.length <= limit || limit == 0) {
                return str;
            }

            var word = str.split(" ");
            str = word[0] + ' ';
            for (var i = 1; i < word.length; i++) {
                if ( (str + word[i]).length > limit ) {
                    return (str + " ..").replace(/(^\s+)|(\s+$)/g, "");
                } else {
                    str += word[i] + " ";
                }
            }

            return str.replace(/(^\s+)|(\s+$)/g, "");
        };
        
        this.base64Encode = function(data) {
            var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, enc = '',
                b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

            do {
                o1 = data.charCodeAt(i++);
                o2 = data.charCodeAt(i++);
                o3 = data.charCodeAt(i++);
                bits = o1<<16 | o2<<8 | o3;
                h1 = bits>>18 & 0x3f;
                h2 = bits>>12 & 0x3f;
                h3 = bits>>6 & 0x3f;
                h4 = bits & 0x3f;
                enc += b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
            }
            while (i < data.length);

            switch( data.length % 3 ) {
                case 1:
                    enc = enc.slice(0, -2) + '==';
                    break;
                case 2:
                    enc = enc.slice(0, -1) + '=';
                    break;
            }

            return enc;
        };

        
        this.hexToRgb = function(hex) {
            var c;
            if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
                c = hex.substring(1).split('');
                if (c.length == 3) {
                    c = [c[0], c[0], c[1], c[1], c[2], c[2]];
                }
                c = '0x' + c.join('');
                return {red:(c>>16)&255, green:(c>>8)&255, blue:c&255};
            }
            return {red:0,green:0,blue:0};
        };

        this.getStyleFont = function(hex) {
            var c = this.hexToRgb(hex),
                r = c.red / 255,
                g = c.green / 255,
                b = c.blue / 255,
                l;

            if (r <= 0.03928) {
                r /= 12.92;
            } else {
                r = Math.pow((r + 0.055) / 1.055, 2.4);
            }
            if (g <= 0.03928) {
                g /= 12.92;
            } else {
                g = Math.pow((g + 0.055) / 1.055, 2.4);
            }
            if (b <= 0.03928) {
                b /= 12.92;
            } else {
                b = Math.pow((b + 0.055) / 1.055, 2.4);
            }

            l = 0.2126*r + 0.7152*g + 0.0722*b;

            return 'color: ' + (l > 0.179 ? '#000000' : '#ffffff') + '!important;';
        };

        this.getStyleGradient = function(color, gradientColors) {
            var c = this.hexToRgb(color);

            return "background: linear-gradient(to bottom, " + gradientColors.replace(/R,G,B/g, c.red +','+ c.green +','+ c.blue) + ");";
        };
        

        this.showLinkButton = function(el, idn) {
            var linkButton = document.createElement("a");
            linkButton.setAttribute("class", idn + "-link-button-23509");
            if (el.getAttribute('data-url')) {
                linkButton.setAttribute("href", el.getAttribute('data-url'));
            } else {
                linkButton.setAttribute("href", el.getAttribute('data-rtb-link'));
                linkButton.setAttribute("data-rtb-url", el.getAttribute('data-rtb-url'));
                linkButton.setAttribute("data-rtb-hash", el.getAttribute('data-rtb-hash'));
            }
            linkButton.setAttribute("target", "_blank");
            linkButton.addEventListener("click", this.initRtbClick, true);
            linkButton.innerHTML = 'Подробнее';
            el.appendChild(linkButton);

            linkButton.style.top = Math.floor(Math.random() * (el.clientHeight - linkButton.clientHeight + 1)) + 'px';

            setTimeout(function() {
                linkButton.parentNode.removeChild(linkButton);
                el.classList.remove('overlay');
            }, 10000);
        }

        

        this.elementInViewport = function(elem) {
            var wnd = window, doc,
                rect = elem.getBoundingClientRect();

            if (window != window.parent) {
                wnd = window.parent;
                try { doc = wnd.document; } catch (exception) {}
                if (typeof doc == 'undefined') return true;
                for (var i = 0; i < doc.getElementsByTagName('iframe').length; i++) {
                    elem = doc.getElementsByTagName('iframe')[i];
                    if (window == elem.contentWindow) break;
                }
            }

            if (rect.bottom < 50) return false;
            if (wnd.innerHeight - rect.top < (rect.height ? 50 : 0)) return false;
            if (rect.right < 50) return false;
            if (wnd.innerWidth - rect.left < 50) return false;
            return true;
        };

        this.sendStat = function(idn, id, pos) {
            var pixel = document.createElement("img"),
                url = 'https://goods.redtram.com/shows/?i=23509&srv=128&rtuid='+ this.rtuid,
                timerId;

            if (customDesignId !== null) {
                url += '&d='+ customDesignId;
            }

			if(rtbTeasers >= maxTeasers && !(id > 0) ) {
				url += '&rtb';
			}

            if (id > 0) {
                url += '&tiz=' + id + '&pos=' + pos;
            } else if (!this.onlyGoods[idn]) {
                this.onlyGoods[idn] = true;
            } else {
                return;
            }

            pixel.setAttribute('style', 'width:1px!important;height:1px!important;position:fixed!important;top:-100em!important;');
            pixel.onload = function() {
                pixel.remove();
                if (idn in self.pixelQueues) {
                    delete self.pixelQueues[idn];
                }
            };
            pixel.onerror = function() {
                self.sendStat(idn, id, pos);
                pixel.remove();
                if (idn in self.pixelQueues) {
                    delete self.pixelQueues[idn];
                }
            };
            timerId = setInterval(function() {
                if (idn in self.pixelQueues) return;
                self.pixelQueues[idn] = idn;
                clearInterval(timerId)
                document.body.appendChild(pixel);
                pixel.setAttribute('src', url);
            }, 100);
        };

        this.modifyPrice = function(price) {
            return parseInt(price) == parseFloat(price) ? parseInt(price).toString() : price;
        };

        this.serialize = function(obj) {
            var str = [];
            for (var i in obj)
                if (obj.hasOwnProperty(i)) {
                    str.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
                }
            return str.join("&");
        };

        this.getRef2 = function() {
            if (document.referrer) return document.referrer;

            try {
                const urlParams = new URLSearchParams(window.location.search);
                return urlParams.get('utm_source') || urlParams.get('utm_referrer') || '';
            } catch (error) {
                return '';
            }
        };

        this.postData = function(url, data, attempts) {
            if (typeof attempts == 'undefined') {
                attempts = 1;
            }
            if (attempts-- <= 0) {
                return;
            }

            var i, body = [];
            for (i in data) {
                if (!data.hasOwnProperty(i)) continue;
                body.push(i + '=' + encodeURIComponent(data[i]));
            }
            body = body.join('&');

            var request = new XMLHttpRequest();
            request.open('POST', url, true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            request.onreadystatechange = function() {
                if (this.readyState == XMLHttpRequest.DONE && this.status != 200) {
                    self.postData(url, data, attempts);
                }
            };
            request.onerror = function() {
                self.postData(url, data, attempts);
            };
            request.send(body);
        };

        this.initDspData = function(dspData, data) {
            var hash = encodeURIComponent(self.base64Encode(JSON.stringify(data))),
                script = document.createElement("script"),
                src = dspData.dspLink + hash + '&ref=' + encodeURIComponent(window.location.href) + '&rtuid=' + this.rtuid;

            script.setAttribute("async", "");
            script.setAttribute("type", "text/javascript");
            script.setAttribute("charset", "utf-8");
            script.setAttribute("src", src);
            document.getElementsByTagName('head')[0].appendChild(script);
            // script.remove();
        };

        this.initNurl = function(idn, index, pos) {
            var item = typeof index == 'undefined' ? this.banner[idn] : this.goodsList[idn][index],
                hash = encodeURIComponent(this.base64Encode(JSON.stringify({
                    'request_uuid': item.requestUuid || '',
                    'pos': pos,
                    'ticker_id': item.tickerId,
                    'os_id': self.isTablet ? 2 : self.isMobile ? 1 : 0,
                    'out_link': item.link,
                    'ref': item.ref,
                    'ref2': item.ref2,
                    'src_id': item.sourceId,
                    'cpm': item.cpm,
                    'rtbCpm': item.rtbCpm,
                    'currency': item.currency,
                    'nurl': item.nurl,
                    'burl': item.burl
                })));

            this.postData('https://goods.redtram.com/rtb/nurls/'+ item.id +'/', { data: hash }, 5)
        };

        this.initEventTrackers = function(idn, index) {
            var i, pixel,
                item = this.goodsList[idn][index],
                trackers = item.eventtrackers || [];

            for (i in trackers) {
                if (!trackers.hasOwnProperty(i)) continue;

                // event=1 - impression, method=1 - img(pixel)
                if (trackers[i].event == 1 && trackers[i].method == 1) {
                    pixel = document.createElement("img");
                    pixel.setAttribute('style', 'width:1px!important;height:1px!important;position:fixed!important;top:-100em!important;');
                    pixel.setAttribute('src', trackers[i].url);
                    document.body.appendChild(pixel);
                }
            }
        };

        this.initImageSize = function(el) {
            if (el.clientWidth > 300) this.imageSize = 400;
            else if (el.clientWidth > 200) this.imageSize = 300;
            else if (el.clientWidth > 150) this.imageSize = 200;
            else if (el.clientWidth > 90) this.imageSize = 150;
            else this.imageSize = 90;
        }

        this.initImages = function(idn) {
            var i, src, images = document.getElementsByClassName(idn + "-image-23509"),
                blurImages = document.getElementsByClassName(idn + "-image-blur-23509"),
                goodImages = document.getElementsByClassName(idn + "-good-image-23509"),
                goodVideos = document.getElementsByClassName(idn + "-good-video-23509");

            if (images.length) {
                this.initImageSize(images[0]);
                for (i = 0; i < images.length; i++) {
                    if (src = images[i].getAttribute('data-rt-src'))
                        images[i].setAttribute('src', src.replace(/%s/g, this.imageSize));
                }
                for (i = 0; i < blurImages.length; i++) {
                    if (src = blurImages[i].getAttribute('data-rt-src'))
                        blurImages[i].setAttribute('src', src.replace(/%s/g, this.imageSize));
                }
            }

            if (goodImages.length) {
                this.initImageSize(goodImages[0]);
                for (i = 0; i < goodImages.length; i++) {
                    if (src = goodImages[i].getAttribute('data-rt-src'))
                        goodImages[i].setAttribute('src', src.replace(/%s/g, this.imageSize));
                }
            }

            if (goodVideos.length) {
                this.initImageSize(goodVideos[0]);
                for (i = 0; i < goodVideos.length; i++) {
                    if (src = goodVideos[i].getAttribute('data-rt-src')) {
                        goodVideos[i].setAttribute('src', src.replace(/%s/g, '1'));
                    }

                    if (src = goodVideos[i].getAttribute('data-rt-poster')) {
                        goodVideos[i].setAttribute('poster', src.replace(/%s/g, this.imageSize));
                    }
                }
            }
        }

        this.initRtbClick = function(e) {
            var rtbUrl = e.currentTarget.getAttribute("data-rtb-url") || '',
                rtbHash = e.currentTarget.getAttribute("data-rtb-hash") || '';

            if (rtbUrl && rtbHash) {
                self.postData(rtbUrl, { data: rtbHash })
            }
        }

        this.checkShowLinkButton = function(e) {
            window.clickedGoods = window.clickedGoods || [];

            var goodId = this.getAttribute('data-id');
            if (goodId && window.clickedGoods.indexOf(goodId) !== -1) {
                e.preventDefault();
                return false;
            }

            var idn = this.getAttribute('data-idn');

            
            if (self.needShowLinkButton) {
            
            if (!this.classList.contains('overlay')) {
                this.classList.add('overlay');
                self.showLinkButton(this, idn);
                e.preventDefault();
                e.stopPropagation();
            } else if (goodId) {
                window.clickedGoods.push(goodId);
            }
            
            }
            
        }

        this.checkPreventDefault = function(e) {
            
            if (self.needShowLinkButton) {
                e.preventDefault();
            }
            

			try {
				if (!this.getAttribute('data-fixed')) {
					this.setAttribute('href', this.getAttribute('href') +'&'+ self.serialize(self.getFixed()));
					this.setAttribute('data-fixed', 1);
				}
			} catch (e) {}

            self.initRtbClick(e);
        }

        this.showTeaser = function(idn, index) {
            var good = this.goodsList[idn][index];

            goodPos[idn] = goodPos[idn] || 0;
            if (++goodPos[idn] > maxTeasers) return;

            var list = document.getElementById(idn + "-list-23509"),
                url = good.link + '&' + this.serialize({
                    page: good.page,
                    pos: goodPos[idn],
                    rtuid: this.rtuid
                }),
                rtbUrl = '',
                rtbHash = '';

            if (typeof good.dsp != 'undefined') {
                rtbUrl = 'https://goods.redtram.com/rtb/click/' + good.id + '/';
                rtbHash = encodeURIComponent(this.base64Encode(JSON.stringify({
                    'ticker_id': good.tickerId,
                    'os_id': self.isTablet ? 2 : self.isMobile ? 1 : 0,
                    'market_id': good.marketId,
                    'out_link': good.link,
                    'ref': good.ref,
                    'ref2': good.ref2,
                    'page': good.page,
                    'pos': goodPos[idn],
                    'cpm': good.cpm,
                    'key': good.key,
                    'tmload': good.tmload,
                    'cpm_good_id': good.cpmGoodId
                })));
            }

            

            if (good.dsp == 'tm') {
                good.title = good.description;
            }
            
            good.title = this.toWord(good.title, 60);
            
            good.description = this.toWord(good.description, 40);
            

            var item = document.createElement(idn);
            item.setAttribute("class", idn + "-item-23509");
            if ('dsp' in good) {
                item.setAttribute("data-index", index);
            } else {
                item.setAttribute("data-id", good.id);
            }

            
            if (typeof goodsOrders !== 'undefined' && goodsOrders.length) {
                try {
                    var order = goodsOrders.shift();
                    item.style.order = Number(order)+1;
                } catch (e) {}
            }
            

            item.setAttribute("data-pos", goodPos[idn]);
            list.appendChild(item);

            var teaser = document.createElement(idn);
            teaser.setAttribute("class", idn + "-teaser-23509");
            teaser.setAttribute("target", "_blank");
            if (typeof good.dsp == 'undefined') {
                teaser.setAttribute("data-url", url);
                
                teaser.setAttribute("data-id", good.id);
                
            }
            if ('dsp' in good) {
                teaser.setAttribute("data-rtb-link", good.link);
                teaser.setAttribute("data-rtb-url", rtbUrl);
                teaser.setAttribute("data-rtb-hash", rtbHash);
            }
            teaser.setAttribute("data-idn", idn);
            teaser.addEventListener("click", this.checkShowLinkButton, true);
            item.appendChild(teaser);

            
            var photo = document.createElement(idn);
            photo.setAttribute("class", idn + "-photo-23509");
            teaser.appendChild(photo);

            var imageWrapper = document.createElement("a");
            imageWrapper.setAttribute("class", idn + "-image-wrapper-23509");
            imageWrapper.setAttribute("target", "_blank");
            imageWrapper.setAttribute("rel", "nofollow");
            if ('dsp' in good) {
                imageWrapper.setAttribute("href", good.link);
                imageWrapper.setAttribute("data-rtb-url", rtbUrl);
                imageWrapper.setAttribute("data-rtb-hash", rtbHash);
            } else {
                imageWrapper.setAttribute("href", url);
            }
            imageWrapper.addEventListener("click", this.checkPreventDefault, true);
            photo.appendChild(imageWrapper);

            var imageCropClass = idn + "-image-crop-23509",
                imageCrop = document.createElement(idn);
            if ('advertiser' in good && good.advertiser == 'rozetka.com.ua') {
                imageCropClass += ' rozetka';
            }
            imageCrop.setAttribute("class", imageCropClass);
            imageWrapper.appendChild(imageCrop);

            

            

            

            if (this.downlink() <= 1 && good.gtype == 2) {
                good.gtype = 0;
                if (typeof good.price != 'undefined' && good.price.length)
                    good.gtype = 1;
            }

            if (typeof good.gtype !== 'undefined' && good.gtype == 2) {
                var vidCon = document.createElement(idn);
                vidCon.setAttribute('class', idn + '-video-container-23509');

                var videoLink = '//img3.redtram.com/%sx%s/'+ good.id +'.mp4?'+ Math.floor((new Date()).getTime() / 30000) * 3000;

                vidCon.innerHTML = [
                    '<video ',
                    '   class="'+ idn +'-good-video-23509"',
                    '   data-rt-poster="'+ good.image +'"',
                    '   data-rt-src="'+ videoLink +'"',
                    '   type="video/mp4"',
                    '   autoplay loop muted playsinline defaultmuted>',
                    '</video>'
                ].join('\n');

                
                imageCrop.appendChild(vidCon);
                
            } else {
                var image = document.createElement("img");
                image.setAttribute("class", idn + "-image-23509");
                image.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=");
                if ('dsp' in good) {
                    image.setAttribute("src", good.image);
                } else {
                    image.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=");
                    image.setAttribute("data-rt-src", good.image);
                }

                
                imageCrop.appendChild(image);
                
            }
            

            var text = document.createElement(idn);
            text.setAttribute("class", idn + "-text-23509");
            
            teaser.appendChild(text);
            

            
            var title = document.createElement("a");
            title.setAttribute("class", idn + "-title-23509");
            title.setAttribute("target", "_blank");
            title.setAttribute("rel", "nofollow");
            if ('dsp' in good) {
                title.setAttribute("href", good.link);
                title.setAttribute("data-rtb-url", rtbUrl);
                title.setAttribute("data-rtb-hash", rtbHash);
            } else {
                title.setAttribute("href", url);
            }
            title.addEventListener("click", this.checkPreventDefault, true);
            title.innerHTML = good.title;
            text.appendChild(title);
            

            
            if (good.dsp != 'tm') {
                var description = document.createElement("a");
                description.setAttribute("class", idn + "-description-23509");
                description.setAttribute("target", "_blank");
                description.setAttribute("rel", "nofollow");
                if ('dsp' in good) {
                    description.setAttribute("href", good.link);
                    description.setAttribute("data-rtb-url", rtbUrl);
                    description.setAttribute("data-rtb-hash", rtbHash);
                } else {
                    description.setAttribute("href", url);
                }
                description.addEventListener("click", this.checkPreventDefault, true);
                description.innerHTML = good.description;
                text.appendChild(description);
            }
            

            
            

            
            var buttonWrapper = document.createElement(idn);
            buttonWrapper.setAttribute("class", idn + "-button-wrapper-23509");
            text.appendChild(buttonWrapper);

            
            var button = document.createElement("a");
            
            button.setAttribute("class", idn + "-button-23509");
            button.setAttribute("target", "_blank");
            button.setAttribute("rel", "nofollow");
            if ('dsp' in good) {
                button.setAttribute("href", good.link);
                button.setAttribute("data-rtb-url", rtbUrl);
                button.setAttribute("data-rtb-hash", rtbHash);
            } else {
                button.setAttribute("href", url);
            }
            button.addEventListener("click", this.checkPreventDefault, true);

            if (!good.isNews) {
                if (good.price) {
                    button.innerHTML = good.price;
                } else {
                    button.innerHTML = good.languageId == 2 ? 'Buy' : good.languageId == 3 ? 'Купити' : 'Купить';
                }
            } else {
                button.innerHTML = good.languageId == 2 ? 'More' : good.languageId == 3 ? 'Детальніше' : 'Подробнее';
            }
            buttonWrapper.appendChild(button);
            
            

            if (goodPos[idn] == 1) {
                setTimeout(function() {
                    self.initImages(idn);
                }, 100);
            }

            
        }

        

        this.appendBanner = function(bannerWrapper, idn) {
            var iframe = document.createElement('iframe');
            iframe.width = self.banner[idn].width;
            iframe.height = self.banner[idn].height;
            iframe.marginWidth = 0;
            iframe.marginHeight = 0;
            iframe.frameBorder = 0;
            iframe.scrolling = "no";
            bannerWrapper.appendChild(iframe);

            iframe.contentWindow.document.write(self.banner[idn].html);
        }

        this.showBanner = function(idn) {
            document.getElementById(idn).innerHTML = '';

            var banner = document.createElement(idn);
            banner.setAttribute("class", idn + "-banner-23509");
            document.getElementById(idn).appendChild(banner);

            if (!self.banner[idn].showInViewport) {
                this.appendBanner(banner, idn);
            }

            if (! (idn in statInterval)) {
                statInterval[idn] = self.initStat(idn);
            }
        }

        this.showTeasers = function(idn) {
            if (idn in this.banner) {
                var totalCpm = 0;
                for (var i in this.goodsList[idn]) {
                    if (! this.goodsList[idn].hasOwnProperty(i)) continue;
                    totalCpm += parseFloat(this.goodsList[idn][i].rtbCpm);
                }

                if (this.banner[idn].rtbCpm > totalCpm) {
                    this.banner[idn].cpm = totalCpm;
                    this.banner[idn].html = this.banner[idn].html
                        .replace('${AUCTION_CURRENCY}', 'USD')
                        .replace('${AUCTION_PRICE}', totalCpm);

                    this.showBanner(idn);
                    return;
                }
            }

            for (var i in this.goodsList[idn]) {
                if (! this.goodsList[idn].hasOwnProperty(i)) continue;

                
                this.showTeaser(idn, i);
                
            }
            
            
        };

        this.jsonModifiedData = function(data) {
            var ext = 's.jpg';
            
                if (data.gtype == 2) {
                    data.gtype = 0;
                }
            

            if (this.downlink() <= 1) {
                ext = 's.jpg';
            }

            return {
                id: data.id,
                title: data.title,
                description: data.description,
                image: "https://img3.redtram.com/%sx%s/" + data.id + ext + (typeof data.imgParam == 'undefined' ? '' : '?v=' + data.imgParam),
                price: data.cost > 0 ? this.modifyPrice(data.cost) + ' ' + data.vcost : '',
                oldPrice: ('oldPrice' in data && data.oldPrice > 0) ? this.modifyPrice(data.oldPrice) + ' ' + data.vcost : '',
                link: data.url,
                tickerId: data.tickerId,
                hash: data.hash,
                marketId: data.mid,
                idn: data.idn,
                languageId: data.languageId,
                page: data.page,
                cpm: data.cpm,
                rtbCpm: data.cpm || data.rtbCpm,
                color: data.clr,
                isNews: data.isNews,
                isNew: data.isNew,
                isRetarg: data.isRetarg,
                key: data.key,
                ref: data.ref,
                ref2: data.ref2,
                sourceId: data.sourceId,
                gtype: data.gtype,
                tmload: data.tmload,
                requestUuid: data.requestUuid
            };
        };

        this.setJsonObj = function(json) {
            var i, good, rates = [],
                uuid = this.uuidv4(),
                self = this;

            
            var hasNews = 0,
                newsInformerId = null
            ;

            try {
                if (typeof this.relations !== 'undefined' && typeof this.relations[json.lngId]) {
                    newsInformerId = Number(this.relations[json.lngId]);

                    var filtered = this.geoSettings.filter(function(r) {
                        return Number(r.geo_id) == Number(json.geo_country_id);
                    });

                    if (!filtered.length) {
                        filtered = this.geoSettings.filter(function(r) {
                            return Number(r.geo_id) == 0;
                        });
                    }

                    var goodsLength = json.data.length,
                        rules = filtered.length ? filtered[0].selected : {}
                    ;

                    for (var i=0; i < maxTeasers; i++) {
                        var type = (typeof rules[i] !== 'undefined') ? rules[i] : 0;
                        if ((type == 0 || type == 1) && goodsOrders.length < goodsLength) {
                            goodsOrders.push(i);
                        } else {
                            newsOrders.push(i);
                        }
                    }

                    hasNews = newsOrders.length;
                }
            } catch (e) {}
            

            this.tickerOptions[json.idn] = {
                idn: json.idn,
                languageId: json.lngId,
                tickerId: json.tickerId,
                rtbCpm: json.bidFloor,
                page: json.page,
                key: json.key,
                tmload: json.tmload || parseInt(Date.now() / 1000),
                ref: document.location.href,
                ref2: this.getRef2(),
                sourceId: this.getUrlParameter('sid'),
                requestUuid: uuid
            };

            if (typeof json.stage != 'undefined' && json.stage) {
                document.body.innerHTML += '<div style="position:fixed;width:100%;height:100px;background:#fff;border:solid 10px red;z-index:2147483647;bottom:0;left:0;text-align:center;font:30px/80px tahoma;box-shadow:0 10px 20px rgba(0,0,0,.3);opacity:.8;">Stage</div>';
            }

            setTimeout(function() {
                self.needShowLinkButton = false;
            }, 2000);

            this.goodsList[json.idn] = this.goodsList[json.idn] || [];

            var prepareGoods = function() {
                for (i in json.data) {
                    if (!json.data.hasOwnProperty(i)) continue;

                    if (self.goodsList[json.idn].length >= maxTeasers - (json.retarg.length > 0)) {
                        break;
                    }

                    Object.assign(json.data[i], self.tickerOptions[json.idn]);

                    good = self.jsonModifiedData(json.data[i]);

                    if (window.rtGoodsOnPage.indexOf(good.id) === -1) {
                        good.rtbCpm = Math.max(json.eCPM[rates.length] || 0, good.rtbCpm);
                        rates.push(good.rtbCpm);
                        self.goodsList[json.idn].push(good);
                        window.rtGoodsOnPage.push(good.id);
                    }
                }

                if (json.retarg.length > 0) {
                    var retarg = json.retarg[Math.floor(Math.random() * json.retarg.length)];

                    Object.assign(retarg, self.tickerOptions[json.idn]);

                    self.goodsList[json.idn].push(self.jsonModifiedData(retarg));

                    rates.push(100);
                }

                for (i = rates.length; i < json.countGoods; i++) {
                    rates.push(json.bidFloor);
                }

                rtGoodsQueues = [];

                if (json.tickerId == 194) {
                    self.showTeasers(json.idn);
                } else {
                    if (rates.length) {
                        for (var j in json.rtbDspList) {
                            self.initDspData(json.rtbDspList[j], {
                                requestUuid: uuid,
                                siteId: json.siteId,
                                tickerId: json.tickerId,
                                rates: rates,
                                informerWidth: document.getElementById(json.idn).offsetWidth,
                                imageSize: json.rtbDspList[j].marketId == 25535 ? 200 : 400,
                                idn: json.idn,
                                osId: self.isTablet ? 2 : self.isMobile ? 1 : 0,
                                marketId: json.rtbDspList[j].marketId,
                                goodId: json.rtbDspList[j].goodId,
                                iab: json.allowIABCategories || []
                            });
                        }
                    }

                    var attempts = (json.rtbDspList.length > 0 && rates.length > 0) ? 40 : 0,
                        interval = setInterval(function () {
                            if (attempts-- > 0) return;
                            clearInterval(interval);
                            self.bidTimeExpired = true;
                            self.showTeasers(json.idn);
                        }, 10);
                }
            };

            
                if (typeof newsInformerId !== 'undefined' && typeof hasNews !== 'undefined' && newsInformerId && hasNews) {
                    var done = false;
                    window['newsInformer'+ newsInformerId +'LoadComplete'] = function(newsCount) {
						goodsOrders = [];

                        for (var i=0; i<maxTeasers; i++) {
                            goodsOrders.push(i);
                        }

                        maxTeasers = maxTeasers - newsCount;
                        newsOrders = newsOrders.splice(0, newsCount);

                        for (var i=0; i<newsOrders.length; i++) {
                            var idx = goodsOrders.indexOf(newsOrders[i]);
                            if (idx !== -1)
                                goodsOrders.splice(idx, 1);
                        }
                        
                        done = true;
                    };

                    var newsDomain = 'rus.redtram.com';
                    if (json.lngId == 2) newsDomain = 'en.redtram.com';
                    if (json.lngId == 3) newsDomain = 'ua.redtram.com';
                    if (json.lngId == 5) newsDomain = 'pl.redtram.com';
                    if (json.lngId == 9) newsDomain = 'kz.redtram.com';
                    
                    var script = document.createElement('script');
                    script.className = 's'+ newsInformerId;
                    script.src = 'https://'+ newsDomain +'/j/'+ newsInformerId +'/?v='+ Math.ceil((new Date()).getTime() / 1000);
                    script.dataset.idn = json.idn;
                    script.dataset.items = hasNews;
                    script.dataset.goodsInformerId = '23509';
                    script.dataset.listContainer = json.idn +'-list-23509';
                    script.dataset.newsOrders = newsOrders.join(',');
                    document.body.appendChild(script);

                    var maxTime = Date.now() + 2000;
                    var interval = setInterval(function() {
                        if (done || Date.now() > maxTime) {
                            clearInterval(interval);
                            prepareGoods();
                        }
                    }, 10);
                } else {
                    prepareGoods();
                }
            
        };

        this.places = function(idn, json) {
            var tmGoods = [];

            if (self.bidTimeExpired) return;

            if (typeof json == 'undefined') {
                json = idn;
                idnList = Object.keys(self.goodsList);
                if (! idnList.length) return;
                idn = idnList[0];
            }

            if ('banner' in json) {
                while (true) {
                    if (typeof json.cpm == 'undefined') break;
                    if (idn in self.banner && json.cpm <= self.banner[idn].rtbCpm) break;

                    self.banner[idn] = {
                        id: json.goodId,
                        marketId: json.marketId,
                        tickerId: 23509,
                        link: 'none',
                        ref: document.location.href,
                        ref2: this.getRef2(),
                        sourceId: this.getUrlParameter('sid'),
                        html: json.banner,
                        width: json.width,
                        height: json.height,
                        cpm: idn in self.banner ? self.banner[idn].rtbCpm : 0,
                        rtbCpm: json.cpm,
                        currency: json.cur || 'USD',
                        nurl: json.nurl,
                        burl: json.burl || '',
                        showInViewport: json.showInViewport || false
                    }
                    break;
                }
            } else {
                for (var i in json) {
                    if (! json.hasOwnProperty(i)) continue;

                    if (typeof json[i].dsp == 'undefined'
                        && typeof self.goodsList[idn] != 'undefined'
                        && typeof self.goodsList[idn][i] != 'undefined') {
                        tmGoods.push({
                            title: json[i].title,
                            description: json[i].description,
                            img: json[i].img,
                            url: json[i].url,
                            cpm: json[i].cpm,
                            pos: self.goodsList[idn][i].pos
                        });
                    }

                    var obj = self.goodsList[idn][i] || self.tickerOptions[idn];

                    if (typeof json[i].cpm == 'undefined') continue;
                    if (typeof self.goodsList[idn][i] != 'undefined' && self.goodsList[idn][i].isNew) continue;
                    if (json[i].cpm <= obj.rtbCpm) continue;

                    self.goodsList[idn][i] = {
                        id: json[i].goodId || 1793198, // ToDo: For TM, need remove
                        title: json[i].title,
                        description: json[i].description,
                        image: json[i].img,
                        price: json[i].cost || '',
                        link: json[i].url,
                        tickerId: obj.tickerId,
                        marketId: json[i].marketId || 25535, // ToDo: For TM, need remove
                        idn: obj.idn,
                        languageId: obj.languageId,
                        page: obj.page,
                        color: '#000000',
                        key: obj.key,
                        ref: obj.ref,
                        ref2: obj.ref2,
                        sourceId: obj.sourceId,
                        gtype: 0,
                        cpm: obj.rtbCpm,
                        tmload: obj.tmload,
                        rtbCpm: json[i].cpm,
                        currency: json[i].cur || 'USD',
                        nurl: json[i].nurl,
                        burl: json[i].burl || '',
                        eventtrackers: json[i].eventtrackers || [],
                        advertiser: json[i].advertiser || '',
                        dsp: json[i].dsp || 'tm',
                        requestUuid: obj.requestUuid,
                        isNews: json[i].isNews || false,
                        isNew: false,
                        cpmGoodId: json[i].cpmGoodId || 0
                    }

					rtbTeasers+=1;
                }
            }
            if (tmGoods.length > 0) {
                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://rtb.redtram.com/trafmag', true);
                xhr.send(JSON.stringify({
                    tickerId: self.goodsList[idn][0].tickerId,
                    requestUuid: self.goodsList[idn][0].requestUuid,
                    data: tmGoods
                }));
            }
        }

        
            this.checkVisibilityAmp = function(idn, informer, items, height) {
                var i, id, index;

                for (i in items) {
                    if (items.hasOwnProperty(i) && this.elementInViewportAmp(items[i], informer, height)) {
                        var pos = items[i].getAttribute('data-pos') || 0;
                        this.sendStat(idn, 0, 0);
                        if (id = items[i].getAttribute('data-id')) {
                            this.sendStat(idn, id, pos);
                        } else if (index = items[i].getAttribute('data-index')) {
                            this.initNurl(idn, index, pos);
                            this.initEventTrackers(idn, index);
                        }
                    }
                }
            };

            this.elementInViewportAmp = function(el, inform, height) {
                if (el.offsetTop >= height) {
                    return false;
                }

                el.classList.add('viewed');
                return true;
            }

            this.sendPostMessages = function(idn) {
                setInterval(function() {
                    if (document.body.scrollHeight < 100) return;//prevent errors
                    window.parent.postMessage({
                        sentinel: 'amp',
                        type: 'embed-size',
                        height: document.body.scrollHeight
                    }, '*');
                }, 2000)

                window.parent.postMessage({
                    sentinel: 'amp',
                    type: 'send-intersections',
                }, '*');

                (function() {
                    var tickerTopPos,
                        parentWindowScroll,
                        height,
                        informer,
                        items;

                    window.addEventListener('message', function messageFromAmp(event) {
                        if (!isAmpMessage(event, 'intersection')) {
                            return;
                        }

                        tickerTopPos = event.data.changes[0].boundingClientRect.top;
                        parentWindowScroll = event.data.changes[0].intersectionRect.height;

                        if(parentWindowScroll > 0) {
                            height = parentWindowScroll;
                            informer = document.querySelector('#' + idn);
                            items = informer.querySelectorAll('.' + idn + '-item-23509:not(.viewed)');
                            self.checkVisibilityAmp(idn, informer, items, height);
                            if (items.length == 0) {
                                items = informer.querySelectorAll('.' + idn + '-item-23509.viewed');
                                if(items.length > 0) {
                                    window.removeEventListener('message', messageFromAmp);
                                }
                            }
                        }
                    });
                })();

                function isAmpMessage(event, type) {
                    return event.source == window.parent
                        && event.origin != window.location.origin
                        && event.data
                        && event.data.sentinel == 'amp'
                        && event.data.type == type;
                }
            }
        
    }

    return new informer();
})();

(function(w, d) {
    'use strict';

    var cs = document.currentScript || (function() {
            var scripts = d.getElementsByClassName('s23509'),
                sCounter = w.sCounter || 0;
            w.sCounter = sCounter + 1;
            if (typeof scripts[sCounter] !== 'undefined') {
                return scripts[sCounter];
            } else {
                return scripts[0];
            }
        })(),
        idn = cs.getAttribute('data-idn');

    
    

    var fpScript = d.createElement('script');
    fpScript.setAttribute('type', 'text/javascript');
    fpScript.setAttribute('src', 'https://fixidle.com/js/fp.min.js');
    fpScript.addEventListener('error', function(event) {
        rtInformers[23509].init(idn);
    });
    fpScript.addEventListener('load', function(event) {
        try {
            FingerprintJS.load().then(function(fp) {
                fp.get().then(function(result) {
                    var rtuid = FingerprintJS.hashComponents(result.components);
                    rtInformers[23509].init(idn, rtuid);

                    
                    
                });
            });
        } catch (e) {
            rtInformers[23509].init(idn);
            rtInformers[23509].catchLogging(e);
        }
    });

    d.getElementsByTagName('head')[0].appendChild(fpScript);
})(window, document);


