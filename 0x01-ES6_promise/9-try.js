function guardrail(mathFunction) {
  const respArr = [];
  try {
    const resp = mathFunction();
    respArr.push(resp);
  } catch (err) {
    respArr.push(`Error: ${err.message}`);
  } finally {
    respArr.push('Guardrail was processed');
  }
  return respArr;
}

export default guardrail;
