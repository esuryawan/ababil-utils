export const DAYS = ["Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
export const MONTHS = ["JAN", "FEB", "MAR", "APR", "MEI", "JUN", "JUL", "AGS", "SEP", "OKT", "NOV", "DES"];

export function EnumEntityStateName(status: number) {
   let result = "Unknown"
   switch (status) {
      case 0: result = "esStopped"; break;
      case 1: result = "esStopping"; break;
      case 2: result = "esStarted"; break;
      case 3: result = "esStarting"; break;
      case 4: result = "esAbnormal"; break;
      case 5: result = "esDownloading"; break;
      case 6: result = "esInService"; break;
      case 7: result = "esTransacting"; break;
      case 8: result = "esListening"; break;
      case 9: result = "esConnecting"; break;
      case 10: result = "esConnected"; break;
      case 11: result = "esDisconnecting"; break;
      case 12: result = "esDisconnected"; break;
      case 13: result = "esSupervisorEnter"; break;
      case 14: result = "esSupervisorExit"; break;
      case 15: result = "esQueue"; break;
      case 16: result = "esRunning"; break;
      case 17: result = "esDone"; break;
      default: break;
   }
   // todo test
   // TODO dafd
   return result;
}

export const EnumEventLevel = {
   Information: 0,
   Warning: 1,
   High: 2,
   Critical: 3,
   Buffer: 4,
   Session: 5,
   Command: 6,
   NewLine: 7,
   DebugInfo: 8,
   DebugLow: 9,
   DebugHi: 10,
};

export function EnumEventLevelName(level: number) {
   let result = "Unknown"
   switch (level) {
      case EnumEventLevel.Information: result = "Information"; break;
      case EnumEventLevel.Warning: result = "Warning"; break;
      case EnumEventLevel.High: result = "High"; break;
      case EnumEventLevel.Critical: result = "Critical"; break;
      case EnumEventLevel.Buffer: result = "Buffer"; break;
      case EnumEventLevel.Session: result = "Session"; break;
      case EnumEventLevel.Command: result = "Command"; break;
      case EnumEventLevel.NewLine: result = "NewLine"; break;
      case EnumEventLevel.DebugInfo: result = "DebugInf"; break;
      case EnumEventLevel.DebugLow: result = "DebugLow"; break;
      case EnumEventLevel.DebugHi: result = "DebugHi"; break;
      default: break;
   }
   return result;
}