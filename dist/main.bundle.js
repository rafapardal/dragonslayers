webpackJsonp([0,3],{

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.setUser();
    }
    AuthService.prototype.canActivate = function () {
        if (this.currentUser)
            return true;
        return false;
    };
    AuthService.prototype.setUser = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = this.currentUser && this.currentUser.token;
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.get('/api/auth/login', { search: 'username=' + username + '&password=' + password })
            .map(function (response) {
            if (response.json().success) {
                localStorage.setItem('currentUser', JSON.stringify({ id: response.json().id_user, token: response.json().token }));
                _this.setUser();
                localStorage.setItem('refreshed', 'false');
            }
            return response.json();
        });
    };
    AuthService.prototype.signUp = function (user) {
        return this.http.post('/api/auth/signup', user)
            .map(function (response) {
            return response.json();
        });
    };
    AuthService.prototype.getUserData = function () {
        return this.http.get('/api/auth/getuser', { search: 'id=' + this.getUser() })
            .map(function (response) {
            return response.json();
        });
    };
    AuthService.prototype.authenticated = function () {
        if (this.currentUser) {
            this.router.navigate(['/auth']);
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    AuthService.prototype.getUser = function () {
        return this.currentUser.id;
    };
    AuthService.prototype.getUserAchievements = function (id) {
        return this.http.get('/api/auth/userachievements', { search: 'id=' + id })
            .map(function (response) {
            return response.json();
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.setUser();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=/home/rafa/Documents/apps/dragonslayers/src/auth.service.js.map

/***/ },

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FeedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedService = (function () {
    function FeedService(http) {
        this.http = http;
    }
    FeedService.prototype.getFeed = function () {
        return this.http.get('/api/feed/')
            .map(function (response) {
            return response.json();
        });
    };
    FeedService.prototype.createPost = function (data) {
        return this.http.post('/api/feed/createpost', data)
            .map(function (response) {
            return response.json();
        });
    };
    FeedService.prototype.deletePost = function (data) {
        return this.http.post('/api/feed/deletepost', data)
            .map(function (response) {
            return response.json();
        });
    };
    FeedService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], FeedService);
    return FeedService;
    var _a;
}());
//# sourceMappingURL=/home/rafa/Documents/apps/dragonslayers/src/feed.service.js.map

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AchievementsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AchievementsService = (function () {
    function AchievementsService(http) {
        this.http = http;
    }
    AchievementsService.prototype.getList = function () {
        return this.http.get('/api/achievement/')
            .map(function (response) {
            return response.json();
        });
    };
    AchievementsService.prototype.addAchievements = function (id, achievement) {
        var achievementToAdd = { 'id': id, 'achievement': achievement };
        return this.http.put('/api/auth/addachievement/', achievementToAdd)
            .map(function (response) {
            return response.json();
        });
    };
    AchievementsService.prototype.removeAchievements = function (id, idAchievements) {
        return this.http.delete('/api/auth/removeachievement/', { search: 'id=' + id + '&achievement=' + idAchievements })
            .map(function (response) {
            return response.json();
        });
    };
    AchievementsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], AchievementsService);
    return AchievementsService;
    var _a;
}());
//# sourceMappingURL=/home/rafa/Documents/apps/dragonslayers/src/achievements.service.js.map

/***/ },

/***/ 385:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 385;


/***/ },

/***/ 386:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(502);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_40" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/rafa/Documents/apps/dragonslayers/src/main.js.map

/***/ },

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(668),
            styles: [__webpack_require__(662)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/rafa/Documents/apps/dragonslayers/src/app.component.js.map

/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authenticated_authenticated_authenticated_component__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authenticated_feed_feed_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__authenticated_achievements_achievements_component__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__authenticated_profile_profile_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_feed_service__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_achievements_service__ = __webpack_require__(331);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















// Routes
var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
        children: [
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */]
            },
            {
                path: 'auth',
                component: __WEBPACK_IMPORTED_MODULE_7__authenticated_authenticated_authenticated_component__["a" /* AuthenticatedComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */]],
                children: [
                    { path: 'feed', component: __WEBPACK_IMPORTED_MODULE_8__authenticated_feed_feed_component__["a" /* FeedComponent */] },
                    { path: 'achievements', component: __WEBPACK_IMPORTED_MODULE_9__authenticated_achievements_achievements_component__["a" /* AchievementsComponent */] },
                    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_10__authenticated_profile_profile_component__["a" /* ProfileComponent */] },
                    { path: '', redirectTo: '/auth/feed', pathMatch: 'full' }
                ]
            }
        ]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__authenticated_authenticated_authenticated_component__["a" /* AuthenticatedComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__authenticated_feed_feed_component__["a" /* FeedComponent */],
                __WEBPACK_IMPORTED_MODULE_9__authenticated_achievements_achievements_component__["a" /* AchievementsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__authenticated_profile_profile_component__["a" /* ProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_12__services_feed_service__["a" /* FeedService */], __WEBPACK_IMPORTED_MODULE_13__services_achievements_service__["a" /* AchievementsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/rafa/Documents/apps/dragonslayers/src/app.module.js.map

/***/ },

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_achievements_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_feed_service__ = __webpack_require__(217);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AchievementsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AchievementsComponent = (function () {
    function AchievementsComponent(achievements, auth, feed) {
        this.achievements = achievements;
        this.auth = auth;
        this.feed = feed;
        this.achievementList = [];
        this.ids = [];
    }
    AchievementsComponent.prototype.ngAfterContentInit = function () {
        this.getIds();
    };
    AchievementsComponent.prototype.changeAchievement = function (achievement, index) {
        if (achievement.done == false) {
            // adicionar base de dados com id do achievement e id do user
            this.achievements.addAchievements(this.auth.getUser(), achievement).subscribe(function (result) { });
            this.feed.createPost({ idAchievement: achievement.result._id, idUser: this.auth.getUser(), achievementName: achievement.result.name })
                .subscribe(function (result) { });
            this.achievementList[index].done = true;
        }
        else {
            // remover base de dados com id do achievement e id do user
            this.achievements.removeAchievements(this.auth.getUser(), achievement.result._id).subscribe(function (result) { });
            this.achievementList[index].done = false;
            this.feed.deletePost({ idAchievement: achievement.result._id, idUser: this.auth.getUser(), achievementName: achievement.result.name })
                .subscribe();
        }
    };
    AchievementsComponent.prototype.getIds = function () {
        var _this = this;
        this.auth.getUserAchievements(this.auth.getUser()).subscribe(function (result) {
            sessionStorage.setItem("ids", JSON.stringify(result.achievements));
            _this.ids = JSON.parse(sessionStorage.getItem("ids"));
            _this.getAchievementList();
        });
    };
    AchievementsComponent.prototype.getAchievementList = function () {
        var _this = this;
        this.achievements.getList().subscribe(function (result) {
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var entry = result_1[_i];
                var done = false;
                if (_this.ids.indexOf(entry._id) > -1)
                    done = true;
                _this.achievementList.push({ 'result': entry, 'done': done });
            }
        });
    };
    AchievementsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-achievements',
            template: __webpack_require__(669),
            styles: [__webpack_require__(663)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_achievements_service__["a" /* AchievementsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_achievements_service__["a" /* AchievementsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_feed_service__["a" /* FeedService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_feed_service__["a" /* FeedService */]) === 'function' && _c) || Object])
    ], AchievementsComponent);
    return AchievementsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/rafa/Documents/apps/dragonslayers/src/achievements.component.js.map

/***/ },

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthenticatedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticatedComponent = (function () {
    function AuthenticatedComponent(router, auth, ngZone) {
        this.router = router;
        this.auth = auth;
        this.ngZone = ngZone;
    }
    AuthenticatedComponent.prototype.ngOnInit = function () {
        this.reRenderPage();
    };
    AuthenticatedComponent.prototype.reRenderPage = function () {
        if (localStorage.getItem('refreshed') === 'false') {
            localStorage.setItem('refreshed', 'true');
            this.ngZone.runOutsideAngular(function () {
                location.reload();
            });
        }
    };
    AuthenticatedComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigate(['']);
    };
    AuthenticatedComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-authenticated',
            template: __webpack_require__(670),
            styles: [__webpack_require__(664)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* NgZone */]) === 'function' && _c) || Object])
    ], AuthenticatedComponent);
    return AuthenticatedComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/rafa/Documents/apps/dragonslayers/src/authenticated.component.js.map

/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_feed_service__ = __webpack_require__(217);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FeedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedComponent = (function () {
    function FeedComponent(feed) {
        this.feed = feed;
    }
    FeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.feed.getFeed().subscribe(function (result) {
            _this.posts = result;
        });
    };
    FeedComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-feed',
            template: __webpack_require__(671),
            styles: [__webpack_require__(665)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_feed_service__["a" /* FeedService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_feed_service__["a" /* FeedService */]) === 'function' && _a) || Object])
    ], FeedComponent);
    return FeedComponent;
    var _a;
}());
//# sourceMappingURL=/home/rafa/Documents/apps/dragonslayers/src/feed.component.js.map

/***/ },

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getUserData();
    };
    ProfileComponent.prototype.getUserData = function () {
        var _this = this;
        this.auth.getUserData().subscribe(function (result) {
            _this.userData = result.user;
        });
    };
    ProfileComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigate(['']);
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__(672),
            styles: [__webpack_require__(666)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/rafa/Documents/apps/dragonslayers/src/profile.component.js.map

/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(http, auth, router) {
        this.http = http;
        this.auth = auth;
        this.router = router;
        this.error = "nada";
        this.alert = false;
        // Login Form
        this.userLogin = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('')
        });
        // Login Form
        this.userRegisto = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            firstName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            lastName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('')
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.auth.authenticated();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.userLogin.value.username, this.userLogin.value.password).subscribe(function (result) {
            if (result.success) {
                _this.alert = false;
                _this.router.navigate(['/auth']);
            }
            else {
                _this.error = result.mensagem;
                _this.alert = true;
            }
        });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        var user = {
            username: this.userRegisto.value.username,
            password: this.userRegisto.value.password,
            firstname: this.userRegisto.value.firstName,
            lastname: this.userRegisto.value.lastName
        };
        this.auth.signUp(user).subscribe(function (result) {
            if (result.success) {
                _this.userLogin.value.username = result.username;
                _this.userLogin.value.password = result.password;
                _this.login();
            }
            else {
                _this.error = result.mensagem;
                _this.alert = true;
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(673),
            styles: [__webpack_require__(667)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/rafa/Documents/apps/dragonslayers/src/login.component.js.map

/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/rafa/Documents/apps/dragonslayers/src/environment.js.map

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/rafa/Documents/apps/dragonslayers/src/polyfills.js.map

/***/ },

/***/ 662:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 663:
/***/ function(module, exports) {

module.exports = ".mdl-card {\n  width: 90%;\n  margin: 20px auto;\n  min-height: initial;\n  border-radius: 0 0 10px 10px;\n  border-color: #ecf0f1;\n  border-top: 5px solid #ecf0f1;\n}\n\n.mdl-card__title {\n  border-bottom: 1px solid #ecf0f1;\n}\n\n.mdl-card__title-text {\n  color: #39393a;\n  font-weight: 700;\n  font-size: 20px;\n}\n\n.mdl-card__supporting-text {\n  padding: 20px 16px;\n  font-weight: 400;\n  color: rgb(99, 99, 99);\n  line-height: 20px;\n}\n\n.mdl-button{\n  background: rgba(31, 30, 30, 0.2);\n}\n\n.mdl-button.active {\n  background-color: #3498db;\n}\n\n.mdl-button {\n  color: #fff;\n}\n"

/***/ },

/***/ 664:
/***/ function(module, exports) {

module.exports = ".mdl-layout__content {\n  background-color: #f9f9f9;\n}\n"

/***/ },

/***/ 665:
/***/ function(module, exports) {

module.exports = ".mdl-card {\n  width: 90%;\n  margin: 20px auto;\n  padding: 18px;\n  min-height: initial;\n  -webkit-box-flex: inline-flex;\n      -ms-flex: inline-flex;\n          flex: inline-flex;\n  border-radius: 0 0 10px 10px;\n  border-color: #ecf0f1;\n  border-top: 5px solid #ecf0f1;\n}\n\nheader {\n  border-bottom: 1px solid #eaeaea;\n  padding-bottom: 10px;\n}\n\nheader .img, header .info {\n  float: left;\n}\n\nheader .img {\n  height: 60px;\n  width: 60px;\n  border-radius: 100%;\n  background-position: center;\n  background-size: cover;\n}\n\nheader .info {\n  margin: 0px 0px 0 10px;\n}\n\nh6, h5 {\n  font-weight: bold;\n  line-height: 10px;\n  color: #a0a0a0;\n  margin: 15px 0 0;\n}\n\nh5 {\n  color: #39393a;\n  line-height: 18px;\n  margin-bottom: 20px;\n}\n\np {\n  color: rgb(152, 152, 152);\n}\n\n.post p {\n  color: rgb(136, 135, 135);\n  line-height: 20px;\n}\n"

/***/ },

/***/ 666:
/***/ function(module, exports) {

module.exports = ".profile-header {\n  background-color: rgb(96,125,139);\n  padding: 40px 0;\n  color: #fff;\n  text-align: center;\n}\n\n.profile-header > img {\n  width: 150px;\n  height: 150px;\n  border-radius: 100%;\n}\n\n.profile-header > .name {\n  font-size: 23px;\n  font-weight: 700;\n  margin: 20px 0 10px;\n  min-height: 24px;\n}\n\n.profile-header > .achievements {\n  font-weight: lighter;\n  font-size: 13px;\n  line-height: 13px;\n  min-height: 13px;\n}\n\n.mdl-list {\n  width: 100%;\n  padding: 0;\n  cursor: pointer;\n}\n\n.mdl-list > .mdl-list__item {\n  border-bottom: 1px solid #eee;\n  background-color: #fff;\n  color: rgba(101, 96, 96, 0.87);\n}\n\n.mdl-list > .mdl-list__item.logout {\n  border-top: 1px solid #eee;\n  margin-top: 20px;\n}\n\n.mdl-list .mdl-list__item-avatar, .mdl-list__item-avatar.material-icons {\n  height: 25px;\n  width: 25px;\n  font-size: 25px;\n}\n\n.mdl-list .mdl-list__item-secondary-action .material-icons {\n  color: rgba(101, 96, 96, 0.87);\n}\n"

/***/ },

/***/ 667:
/***/ function(module, exports) {

module.exports = ".mdl-cell--8-col {\n  margin: auto;\n}\n\n.mdl-cell .mdl-textfield, .mdl-cell button {\n  width: 100%;\n}\n\n.mdl-cell button {\n  border-radius: 100px;\n  box-shadow: none;\n}\n\n.mdl-textfield.is-focused .mdl-textfield__label:after {\n  display: none;\n}\n\n.mdl-textfield {\n  padding: 10px 0;\n}\n\n.mdl-textfield__input {\n  border: 1px solid rgb(208, 208, 208);\n  box-sizing: border-box;\n  padding: 8px 20px;\n  border-radius: 100px;\n}\n\n.mdl-textfield__label {\n    left: 20px;\n    top: 19px;\n}\n"

/***/ },

/***/ 668:
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ },

/***/ 669:
/***/ function(module, exports) {

module.exports = "<!--\n  Formulario\n\n<div class=\"mdl-textfield mdl-js-textfield\">\n  <input class=\"mdl-textfield__input\" type=\"text\" id=\"sample1\">\n  <label class=\"mdl-textfield__label\" for=\"sample1\">Procurar Achievement</label>\n</div>\n -->\n<!--\n  Página\n-->\n\n<div *ngFor=\"let achievement of achievementList; let i = index\">\n  <div class=\"mdl-card mdl-shadow--2dp\">\n    <div>\n      <div class=\"mdl-card__title\">\n        <h2 class=\"mdl-card__title-text\">{{achievement.result.name}}</h2>\n      </div>\n      <div class=\"mdl-card__supporting-text\">\n        {{achievement.result.description}}\n      </div>\n    </div>\n    <button class=\"mdl-button mdl-js-button mdl-button--raised\" [class.active]=\"achievement.done\" (click)=\"changeAchievement(achievement, i)\">\n      <div *ngIf=\"achievement.done\" >\n        Concluido\n        <i class=\"material-icons\">check</i>\n      </div>\n      <div *ngIf=\"!achievement.done\" >\n        Por concluir\n        <i class=\"material-icons\">close</i>\n      </div>\n    </button>\n  </div>\n</div>\n"

/***/ },

/***/ 670:
/***/ function(module, exports) {

module.exports = "<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs\">\n  <header class=\"mdl-layout__header\">\n    <div class=\"mdl-layout__header-row\">\n      <span class=\"mdl-layout-title\">Dragonslayers</span>\n    </div>\n    <div class=\"mdl-layout__tab-bar mdl-js-ripple-effect\">\n      <a routerLinkActive=\"is-active\" class=\"mdl-layout__tab\" routerLink=\"/auth/feed\">Feed</a>\n      <a routerLinkActive=\"is-active\" class=\"mdl-layout__tab\" routerLink=\"/auth/achievements\">Achievements</a>\n      <a routerLinkActive=\"is-active\" class=\"mdl-layout__tab\" routerLink=\"/auth/profile\">Perfil</a>\n    </div>\n  </header>\n  <div class=\"mdl-layout__drawer\">\n    <span class=\"mdl-layout-title\">Title</span>\n  </div>\n\n  <main class=\"mdl-layout__content\">\n    <div class=\"page-content\">\n      <router-outlet></router-outlet>\n    </div>\n  </main>\n\n</div>\n"

/***/ },

/***/ 671:
/***/ function(module, exports) {

module.exports = "<div *ngFor=\"let post of posts\">\n  <div class=\"mdl-card mdl-shadow--2dp\">\n    <header>\n      <div class=\"img\" style=\"background-image: url('https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png')\"></div>\n      <div class=\"info\">\n        <h6>{{post.user.name.first}} {{post.user.name.last}}</h6>\n        <p>{{post.createdAt | date:'dd/MM/yy'}} ás {{post.createdAt | date:'HH:mm'}}</p>\n      </div>\n    </header>\n    <div class=\"post\">\n      <h5>Achievement \"{{post.achievement.name}}\" concluido</h5>\n      <p>{{ post.text }}</p>\n    </div>\n    <!--\n    <div class=\"mdl-card__actions mdl-card--border\">\n      <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\n        <i class=\"material-icons\">comment</i> {{post.comments.length}} comentário(s)\n      </a>\n    </div>\n    -->\n  </div>\n</div>\n"

/***/ },

/***/ 672:
/***/ function(module, exports) {

module.exports = "<div class=\"profile-header\" >\n  <img width=\"150px\" height=\"150px\" src=\"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png\"/>\n\n  <p class=\"name\">{{userData?.name.first}} {{userData?.name.last}}</p>\n  <p class=\"achievements\">Achievements completos: {{userData?.achievements.length}}</p>\n</div>\n\n\n\n<div class=\"mdl-list\">\n  <div class=\"mdl-list__item\">\n    <span class=\"mdl-list__item-primary-content\">\n      <i class=\"material-icons mdl-list__item-avatar\">person</i>\n      <span>Achievements Completos</span>\n    </span>\n    <a class=\"mdl-list__item-secondary-action\"><i class=\"material-icons\">keyboard_arrow_right</i></a>\n  </div>\n  <div class=\"mdl-list__item\">\n    <span class=\"mdl-list__item-primary-content\">\n      <i class=\"material-icons mdl-list__item-avatar\">account_circle</i>\n      <span>Alterar Dados</span>\n    </span>\n    <a class=\"mdl-list__item-secondary-action\"><i class=\"material-icons\">keyboard_arrow_right</i></a>\n  </div>\n  <div class=\"mdl-list__item logout\" (click)=\"logout()\">\n    <span class=\"mdl-list__item-primary-content\">\n      <i class=\"material-icons mdl-list__item-avatar\">person</i>\n      <span>Logout</span>\n    </span>\n    <span class=\"mdl-list__item-secondary-content\">\n      <a class=\"mdl-list__item-secondary-action\"><i class=\"material-icons\">keyboard_arrow_right</i></a>\n  </span>\n  </div>\n</div>\n"

/***/ },

/***/ 673:
/***/ function(module, exports) {

module.exports = "<!--\n\n<ul class=\"nav nav-tabs\" role=\"tablist\">\n  <li role=\"presentation\" class=\"active\" style=\"width: 50%; text-align: center;\"><a href=\"#login\" aria-controls=\"login\" role=\"tab\" data-toggle=\"tab\" style=\"padding: 25px 0\">Login</a></li>\n  <li role=\"presentation\" style=\"width: 50%; text-align: center;\"><a href=\"#signup\" aria-controls=\"signup\" role=\"tab\" data-toggle=\"tab\" style=\"padding: 25px 0\">Registo</a></li>  </ul>\n\n<div class=\"tab-content\">\n  <div class=\"alert alert-danger alert-dismissible\" role=\"alert\" [hidden]=\"!alert\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n    <strong>Aviso!</strong> {{this.error}}\n  </div>\n  <div role=\"tabpanel\" class=\"tab-pane active\" id=\"login\">\n    <div class=\"container-fluid\" style=\"margin: 10% auto\">\n      <div class=\"row\">\n        <div class=\"col-md-4\" style=\"margin: 0 auto; float: unset\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div role=\"tabpanel\" class=\"tab-pane\" id=\"signup\">\n    <div class=\"container-fluid\" style=\"margin: 10% auto\">\n      <div class=\"row\">\n        <div class=\"col-md-4\" style=\"margin: 0 auto; float: unset\">\n          <form class=\"form-horizontal\" [formGroup]=\"userRegisto\" (ngSubmit)=\"signUp()\" novalidate>\n            <div class=\"form-group\">\n              <label for=\"inputUsername\" class=\"col-sm-3 control-label\">Username</label>\n              <div class=\"col-sm-9\">\n                <input type=\"text\" class=\"form-control\" id=\"inputUsername\" placeholder=\"Username\" formControlName=\"username\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"inputPassword\" class=\"col-sm-3 control-label\">Password</label>\n              <div class=\"col-sm-9\">\n                <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\" formControlName=\"password\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"inputFirstName\" class=\"col-sm-3 control-label\">primeiro Nome</label>\n              <div class=\"col-sm-9\">\n                <input type=\"text\" class=\"form-control\" id=\"inputFirstName\" placeholder=\"Primeiro Nome\" formControlName=\"firstName\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"inputLastName\" class=\"col-sm-3 control-label\">Ultimo Nome</label>\n              <div class=\"col-sm-9\">\n                <input type=\"text\" class=\"form-control\" id=\"inputLastName\" placeholder=\"Ultimo Nome\" formControlName=\"lastName\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"col-sm-offset-2 col-sm-10\">\n                <button type=\"submit\" class=\"btn btn-default\">Registar</button>\n              </div>\n            </div>\n          </form>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n-->\n\n<div class=\"mdl-tabs mdl-js-tabs mdl-js-ripple-effect\">\n  <div class=\"mdl-tabs__tab-bar\">\n      <a href=\"#login-panel\" class=\"mdl-tabs__tab is-active\">Login</a>\n      <a href=\"#registo-panel\" class=\"mdl-tabs__tab\">Registo</a>\n  </div>\n\n<div class=\"mdl-tabs__panel is-active\" id=\"login-panel\">\n  <div class=\"mdl-grid\">\n    <div class=\"mdl-cell mdl-cell--8-col\">\n      <form class=\"form-horizontal\" [formGroup]=\"userLogin\" (ngSubmit)=\"login()\" novalidate>\n        <div class=\"mdl-textfield mdl-js-textfield\">\n          <input class=\"mdl-textfield__input\" type=\"text\" id=\"inputUsername\"  formControlName=\"username\">\n          <label class=\"mdl-textfield__label\" for=\"user\">Username</label>\n        </div>\n        <div class=\"mdl-textfield mdl-js-textfield\">\n          <input class=\"mdl-textfield__input\" type=\"password\" id=\"inputPassword\" formControlName=\"password\">\n          <label class=\"mdl-textfield__label\" for=\"user\">Password</label>\n        </div>\n        <button type=\"submit\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent\">Login</button>\n      </form>\n    </div>\n  </div>\n</div>\n\n  <div class=\"mdl-tabs__panel\" id=\"registo-panel\">\n    <input class=\"mdl-textfield__input\" type=\"text\" id=\"inputUsername\"  formControlName=\"username\" pattern=\"-?[A-Z,a-z,0-9,\\-,_]*(\\.[0-9]+)?\">\n    <label class=\"mdl-textfield__label\" for=\"user\">Username</label>\n    <span class=\"mdl-textfield__error\">Letters and spaces only</span>\n  </div>\n</div>\n"

/***/ },

/***/ 690:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(386);


/***/ }

},[690]);
//# sourceMappingURL=main.bundle.map