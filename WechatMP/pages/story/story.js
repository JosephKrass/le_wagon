Page({
data: {
story: {},
comments: {}
},
  getRequestData: function (res) { 
    console.log(res);
    this.setData({ 
      story: res.data
    });
  },
  getRequestData2: function (res) { 
    this.setData({ 
      comments: res.data.objects
    });
  },

  onLoad: function (options) {
    let page  = this;
    let id = options.id
    const request = {
      url: `https://cloud.minapp.com/oserve/v1/table/84988/record/${id}`,
      method: 'GET',
      header: { 'Authorization': 'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e' },
      success: page.getRequestData
    }
    wx.request(request);
    const comrequest = { 
      url: `https://cloud.minapp.com/oserve/v1/table/85188/record/`, 
      method: 'GET',
      data: {
         where: { 
           "story_id": { "$eq": id } 
         }
       },
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'},
      success: page.getRequestData2
    }
    wx.request(comrequest);
  }

deleteComment(event) {
    let data = event.currentTarget.dataset;

  wx.request({
    url: `https://cloud.minapp.com/oserve/v1/table/85188/record/${data.id}`,
    method: 'DELETE',
    header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'},

    success() {
      wx.redirectTo({
        url: '/pages/index/index' });
     }
   });
  }
});


  // voteComment(event) {
  //   let page = this

  //   let data = event.currentTarget.dataset;
  //   let votes = data.votes;
  //   let new_votes = { votes: votes + 1 }

  //   // make a PUT request
  //   wx.request({
  //     url: `https://cloud.minapp.com/oserve/v1/table/85188/record/${data.id}`,
  //     method: 'PUT',
  //     header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'}, // API key from Above
  //     data: new_votes,

  //     success(res) {
  //       // set comment data
  //       console.log(res)
  //     }


