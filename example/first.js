var Pa = /** @class */ (function () {
    function Pa(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
        this.address = "34567";
        this.age = 18;
        this.name = firstName;
    }
    Object.defineProperty(Pa.prototype, "name", {
        get: function () {
            return 'Jack';
        },
        set: function (value) {
            console.log('setter: ' + value);
        },
        enumerable: true,
        configurable: true
    });
    Pa.prototype.getAge = function (age) {
        return 18 + age;
    };
    Pa.prototype.sexs = function () {
        return 1;
    };
    ;
    Pa.prototype.say = function () {
        console.log('hello world');
    };
    ;
    return Pa;
}());
function sr(p) {
    return p.firstName + p.lastName + ' hello';
}
var sy = function (x) {
    return x;
};
var ua = new Pa('wng', 'zz');
console.log(sr(ua));
