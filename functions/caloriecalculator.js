//calorie calculator mini app
function inputCaloriesByDay(day)
{
    switch(day){
        case 'Monday':
            return 3500;
            break;
        case 'Tuesday':
            return 2500;
            break;
        case 'Wednesday':
            return 1500;
            break;
        case 'Thursday':
            return 2800;
            break;
        case 'Friday':
            return 1200;
            break;
        case 'Saturday':
            return 1500;
            break;
        case 'Sunday':
            return 1000;
            break;
        default:
            return 'please enter vaild day';
    }
}

function getTotalCalories(){
    return inputCaloriesByDay('Monday')+
    inputCaloriesByDay('Tuesday')+
    inputCaloriesByDay('Wednesday')+
    inputCaloriesByDay('Thursday')+
    inputCaloriesByDay('Friday')+
    inputCaloriesByDay('Saturday')+
    inputCaloriesByDay('Sunday');
}

function getIdealCalories()
{
    var idealCaloriesPerDay=2000;
    return idealCaloriesPerDay*7;
}

function healthPlan(){
    var actualCalories=getTotalCalories();
    var idealCalories=getIdealCalories();
    if(actualCalories===idealCalories)
    {
        return "You ate just the right amount!";
    }
    else if(actualCalories > idealCalories)
    {
        return "Time to head to the gym!";
    }
    else{
        return "Time for seconds!";
    }
}

console.log(healthPlan());