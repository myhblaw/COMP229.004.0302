exports.home = function(req, res, next) {
    console.log('===> Original URL: ' + req.session.url);
    res.render('index', { 
        title: 'Home',
        userName: req.user ? req.user.username : ''
    });
};

exports.about = function(req, res, next) {
    res.render('aboutme', { 
        title: 'About Me',
        userName: req.user ? req.user.username : ''
     });
}

exports.projects = function(req, res, next) {
    res.render('projects', { 
      title: 'Projects',
      userName: req.user ? req.user.username : '' 
    });
}

exports.projects = function(req, res, next) {
    res.render('services', { 
      title: 'Services',
      userName: req.user ? req.user.username : '' 
    });
}

exports.projects = function(req, res, next) {
    res.render('contact', { 
      title: 'Contact',
      userName: req.user ? req.user.username : '' 
    });
}