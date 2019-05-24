$(document).ready(function() {
  var dummySurvey = $(".survey")
    .first()
    .clone();

  $(document).on("click", ".close", function() {
    $(this)
      .parent()
      .parent(".survey")
      .remove();

    updateSurveyIndex();
  });

  $(document).on("click", ".add", function() {
    var maxSurveyNum = 6;

    var newSurvey = dummySurvey.clone();
    newSurvey.insertBefore(".add");

    var surveyList = $(".survey").get();

    if (surveyList.length > maxSurveyNum) {
      alert("설문은 최대 6개 까지 설정 가능합니다.");
      surveyList[maxSurveyNum - 1].remove();
    }

    updateSurveyIndex();
  });
});

function updateSurveyIndex() {
  var surveyIndexList = $(".survey-index").get();

  for (var i = 0; i < surveyIndexList.length; i++) {
    surveyIndex = i + 1;
    surveyIndexList[i].innerHTML = "질문" + surveyIndex;
  }
}
