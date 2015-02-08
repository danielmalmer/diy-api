var Router = require('routes');
var router = Router();

router.addRoute("/skills", skills);
router.addRoute("/challenge/:skill", challenges);

http.createServers(function(req, res) {
    var path = url.parse(req.url).pathname;
    var match = router.match(path);
    match.fn(req, res, match);
}).listen(8000);

function skills(req, res, match) {
    res.statusCode = 200;
    res.end();
}

function challenges(req, res, match) {
    res.statusCode = 200;
    res.end();
}
