import {inputComponent} from "../../components/input";

export const mapConfigToInputs = (config) => {
  const mapInputsConfig = config.map((
    labelClass,
    labelText,
    inputType,
    inputClass,
    inputName
  ) => {
    return inputComponent(
      labelClass,
      labelText,
      inputType,
      inputClass,
      inputName,
    );
  })

  return mapInputsConfig.join('');
}
