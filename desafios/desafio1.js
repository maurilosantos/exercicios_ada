function converterPara24Horas(horario12hrs) {
    const partes = horario12hrs.match(/(\d+):(\d+):(\d+)([APM]{2})/);
    
    if (!partes) {
      return "Horário inválido"; // Caso a entrada seja diferente 
    }
    
    
    let horas = parseInt(partes[1], 10);
    const minutos = parseInt(partes[2], 10);
    const segundos = parseInt(partes[3], 10);
    const periodo = partes[4];
    
    
    if (periodo === "PM" && horas !== 12) {
      horas = (horas + 12) % 24;
    } else if (periodo === "AM" && horas === 12) {
      horas = 0; // Meia-noite
    }
    
    
    const horario24hrs = `${horas.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
    
    return horario24hrs;
  }
  