var vm=new Vue({
    el:'#player',
    data:{
        query:'',
        musicList:[],
        musicUrl:"",
        isPlaying:false,
        coverUrl:"./images/cover.png",
        hotComments:[],
        MVUrl:"",
        isShow:false
    },
    methods:{
        searchMusic:function(){
            var that=this;
            axios.get('https://autumnfish.cn/search?keywords='+this.query).then(
                function(response){
                    that.musicList=response.data.result.songs;
                },
                function(err){}
            )
        },
        playMusic:function(id){
            var that=this;
            axios.get('https://autumnfish.cn/song/url?id='+id).then(
                function(response){
                    that.musicUrl=response.data.data[0].url;
                },function(err){

                }
            );
            axios.get('https://autumnfish.cn/song/detail?ids='+id).then(
                function(response){
                    that.coverUrl=response.data.songs[0].al.picUrl;
                },function(err){}
            );
            axios.get('https://autumnfish.cn/comment/hot?type=0&id='+id).then(
                function(response){
                    that.hotComments=response.data.hotComments
                },function(err){}
            );

        },

        //控制底部音乐播放器
        play:function(){
            this.isPlaying=true;
        },
        pause:function(){
            this.isPlaying=false;
        },

        // 播放MV
        playMV:function(id){
            var that=this;
            axios.get('https://autumnfish.cn/mv/url?id='+id).then(
                function(response){
                    that.isShow=true;
                    console.log(response);
                    that.MVUrl=response.data.data.url;
                    
                },
                function(err){}
            )
        },
        closeMV:function(){
            this.isShow=false;
        }
        
    }
})