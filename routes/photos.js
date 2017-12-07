var photos = [];
photos.push({
  name: 'bandoneon'
  path: 'https://www.google.co.kr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj85aH7ufjXAhXTq5QKHZhhDlMQjRwIBw&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwoLb87m9tqs&psig=AOvVaw0IJvwBMNFdu1_CXK4BLUxi&ust=1512755073839568'
});
photos.push({
  name: 'piano',
  path: 'https://www.google.co.kr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjX9snXuvjXAhUEJJQKHde8AMcQjRwIBw&url=https%3A%2F%2Fusa.yamaha.com%2Fproducts%2Fmusical_instruments%2Fpianos%2Fpremium_pianos%2Fcf_series%2Findex.html&psig=AOvVaw3UW7NBvQe4VushRl9H2DEO&ust=1512755270825321'
});

exports.list = (req, res) => {
  res.render('photos/index'), {
    title: 'Photos',
    photos: photos
  }
}
