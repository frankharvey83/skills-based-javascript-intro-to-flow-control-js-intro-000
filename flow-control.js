function basicTeenager(age) {
if (age > 12 && age < 20) {
  return ("You are a teenager!");
  }
}

function teenager(age)  {
if (age > 12 && age < 20) {
  return ("You are a teenager!");
} else {
  return ("You are not a teenager");
  }
}


function ageChecker(age) {
  if (age < 13) {
    return ("You are a kid");
} else if (age > 12 && age < 20)  {
    return ("You are a teenager!");
} else if (age > 19)  {
    return ("You are a grownup");
}
  }

function ternaryTeenager(age) {
  return (age > 12 && age <20) ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  switch (age) {
case  "teenager": age > 12;
    return ("You are a teenager");
case  "teenager1": age <20;
    return ("You are a teenager");
}
}
