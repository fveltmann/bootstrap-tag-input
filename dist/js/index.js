"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var BootstrapTagInput = /** @class */ (function () {
    function BootstrapTagInput(contextInput, colorClass) {
        if (colorClass === void 0) { colorClass = 'primary'; }
        var _a;
        this.contextInput = contextInput;
        this.contextInput.prop('hidden', true);
        this.placeholder = (_a = this.contextInput.attr('placeholder')) !== null && _a !== void 0 ? _a : '';
        this.contextInput.after("\n    <div class=\"bootstrap-tag-input-container\">\n      <input class=\"bootstrap-tag-input\" placeholder=\"" + this.placeholder + "\">\n    </div>\n    ");
        this.tagInputContainer = this.contextInput.next();
        this.tagInput = this.tagInputContainer.children();
        this.tagInputColorClass = colorClass;
        this.initHandler();
    }
    BootstrapTagInput.prototype.initHandler = function () {
        var _this = this;
        this.tagInputContainer.click(function () {
            _this.tagInput.focus();
        });
        this.tagInput.keydown(function (e) {
            switch (e.keyCode) {
                case 9:
                case 13:
                    e.preventDefault();
                    if (_this.tagInput.val()) {
                        _this.createTag(String(_this.tagInput.val()));
                        _this.tagInput.removeAttr('placeholder');
                        _this.tagInput.val('');
                    }
                    break;
                case 8:
                    if (!_this.tagInput.val()) {
                        _this.tagInputContainer.find('.badge').last().remove();
                        _this.serialize();
                    }
                    if (_this.tagInputContainer.find('.badge').length == 0)
                        _this.tagInput.attr('placeholder', _this.placeholder);
                    break;
            }
        });
    };
    BootstrapTagInput.prototype.serialize = function () {
        var serializedString = '';
        this.tagInputContainer.children('.badge').each(function (index, el) {
            serializedString += jquery_1.default(el).text() + ";";
        });
        this.contextInput.val(serializedString);
    };
    BootstrapTagInput.prototype.createTag = function (label) {
        var _this = this;
        var template = "<p class=\"badge badge-pill badge-" + this.tagInputColorClass + " tag-badge\">" + label + "<span>&times;</span></p>";
        this.tagInput.before(template);
        var newBadge = this.tagInput.prev();
        newBadge.find('span').click(function () {
            newBadge.remove();
            _this.serialize();
        });
        this.serialize();
    };
    return BootstrapTagInput;
}());
exports.BootstrapTagInput = BootstrapTagInput;
//# sourceMappingURL=index.js.map