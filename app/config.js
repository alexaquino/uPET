// Setando base MongoDB (mLAB)

module.exports = {

    mongolab:
    {
        name: "mongolab",
        //url: "mongodb://BigCoder:BigCoder!@ds139817.mlab.com:39817/heroku_cnkn5vpn",
        url: "mongodb://petget:petget@ds159767.mlab.com:59767/petget",
        port: 27017
    },

    local:
    {
        name: "scotch-user-map-local",
        url: "mongodb://localhost/MeanMapApp",
        port: 27017
    },

    localtest:
    {
        name: "scotch-user-map-local",
        url: "mongodb://localhost/MeanMapAppTest",
        port: 27017
    }

};
