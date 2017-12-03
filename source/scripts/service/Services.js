class Services {
    constructor(){
        this.baseUrl = "";
       
        if ((window.location.pathname.indexOf("compartilhe") > -1 ||
            window.location.pathname.indexOf("pacotes-turbinados") > -1 ||
            window.location.pathname.indexOf("tire-suas-duvidas") > -1 ||
            window.location.pathname.indexOf("venha-para-vivo") > -1))
        {
            this.baseUrl = "../";
        }
    }

    ajaxByUrl(_url, _verb, _success, _error, _form, _timeout){
        if(_url.indexOf("http") > -1) {
            this.baseUrl = "";
        }
        return $.ajax({
            url: this.baseUrl + _url,
            type: _verb,
            dataType: 'json',
            data: _form ? $(_form).serialize() : $(this).serialize(),
            timeout: _timeout ? _timeout : 0,
            success: (data, textStatus, xhr)=> {_success(data, textStatus, xhr)},
            fail: (error)=>{_error(error)}
        });
        return "";
    }

    getUrlParam(name, url) {
        if (!url) url = location.href;
        name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        let regexS = "[\\?&]"+name+"=([^&#]*)";
        let regex = new RegExp( regexS );
        let results = regex.exec( url );
        return results == null ? null : results[1];
    }
}

export default Services;
