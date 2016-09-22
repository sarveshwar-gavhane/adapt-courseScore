define([
    'backbone',
    'coreJS/adapt'
], function(Backbone, Adapt) {

    var CourseScoreView = Backbone.View.extend({

        initialize: function(options) {
            this.score = this.model._score;
            this.render();
            var courseScoreArticles = [];

            _.each(Adapt.articles.models, function(item, index) {
                if (item.has('_courseScore'))
                    courseScoreArticles.push(item);
            });

            for (var i = 0, j = courseScoreArticles.length; i < j; i++) {
                this.setUpCourseScore(courseScoreArticles[i]);
            }
        },

        setUpCourseScore: function(courseScoreArticles) {
            this._originalChildModels = courseScoreArticles.getChildren().models;
            this._currentQuestionComponents = courseScoreArticles.findDescendants("components").where({ _isQuestionType: true });
            var currentQuestionsCollection = new Backbone.Collection(this._currentQuestionComponents);
            this.listenTo(currentQuestionsCollection, 'change:_isComplete', this.calculateCourseScore);
        },

        calculateCourseScore: function(model) {

            if (model.get('_isCorrect') && model.get('_questionWeight')) {
                this.score += model.get('_questionWeight');
            }
            this.$(".courseScoreView-score").html(this.score);
        },

        render: function() {

            var template = Handlebars.templates["courseScore"];
            this.$el.html(template(this.model));
            $('.navigation-drawer-toggle-button').after(this.$el);
            return this;
        }

    });

    Adapt.once("menuView:preRender", function() {
        var courseData = Adapt.course.get('_courseScore');

        if (courseData && courseData._isEnabled) {
            new CourseScoreView({ model: courseData });
        } else {
            return "no courseScore object is set on course.json";
        }
    });

});

