function skillsMember() {
    var member = document.getElementById("member");
    var memberName = member.options[member.selectedIndex].value;
    var memberID = member.options[member.selectedIndex].id;
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsID = document.getElementById("memberSkillsID");
    memberSkills.value = memberName;
    memberSkillsID.value = memberID;
}