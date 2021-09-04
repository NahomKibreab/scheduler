export function getAppointmentsForDay(state, day) {
  let apptForDay;
  if (!state.days || state.days.length === 0) {
    return [];
  }
  state.days.forEach((item) => {
    if (item.name === day) {
      apptForDay = item.appointments;
    }
  });
  if (!apptForDay) {
    return [];
  }
  const appointments = apptForDay.map((appt) => state.appointments[appt]);
  return appointments;
}

export function getInterview(state, interview) {
  if (!state.interviewers || !interview) {
    return null;
  }

  const findInterviewer = state.interviewers[interview.interviewer];

  if (findInterviewer) {
    return {
      student: interview.student,
      interviewer: { ...findInterviewer },
    };
  }

  return null;
}
