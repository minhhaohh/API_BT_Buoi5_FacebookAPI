axios.get('https://graph.facebook.com/utc2hcmc/posts?access_token=EAAAAZAw4FxQIBACrKw38m58smbMt9gvN7VxcVAxl6bpAzzuTwJxQQnMdrpzT7WMKPFihpaURtk7MLUTjHLCMuuuTkzd0wTyeXfS3pD71ZCPMK2GZBiuRUtLh8kTsxZCI1MWKdDi6jxCwR7qQXnUYba8ZCmIyEnvLkdQ9QPHRRnAZDZD')
    .then(response => {
        var output = "";
        output += "<span class='header'>Bài viết số 1</span> <span class = 'content'></br><b> Nội dung bài viết: </b></br>" +
            response.data.data[0].message + "<br><br> </span>" +
            "<span class='header'>Bài viết số 2</span> <span class = 'content'></br><b> Nội dung bài viết: </b></br>" +
            response.data.data[1].message + "<br><br> </span>" +
            "<span class='header'>Bài viết số 3</span> <span class = 'content'></br><b> Nội dung bài viết: </b></br>" +
            response.data.data[2].message + " </span>";

        document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.error(error));