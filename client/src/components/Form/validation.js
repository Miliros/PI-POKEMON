export function validation({
  name,
  image,
  life,
  stroke,
  defense,
  speed,
  height,
  weight,
}) {
  const validateNum = new RegExp("^[0-9]+$");

  const errors = {};

  if (name === "") {
    errors.name = "a name is required";
  } else {
    errors.name = true;
  }

  if (image === "") {
    errors.image = "an image is required";
  } else {
    errors.image = true;
  }

  if (!validateNum.test(life) || life > 100 || life < 0) {
    errors.life = "a number is required";
  } else {
    errors.life = true;
  }

  if (!validateNum.test(stroke) || stroke > 100 || stroke < 0) {
    errors.stroke = "a number is required";
  } else {
    errors.stroke = true;
  }

  if (!validateNum.test(defense) || defense > 100 || defense < 0) {
    errors.defense = "a number is required";
  } else {
    errors.defense = true;
  }

  if (!validateNum.test(speed) || speed > 100 || speed < 0) {
    errors.speed = "a number is required";
  } else {
    errors.speed = true;
  }

  if (!validateNum.test(height) || height > 100 || height < 0) {
    errors.height = "a number is required";
  } else {
    errors.height = true;
  }

  if (!validateNum.test(weight) || weight > 100 || weight < 0) {
    errors.weight = "a number is required";
  } else {
    errors.weight = true;
  }

  return errors;
}
