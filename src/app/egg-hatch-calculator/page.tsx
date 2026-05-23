"use client";

import { useState, useMemo } from "react";
import { Search, ChevronDown, Copy, ArrowUp, ArrowDown } from "lucide-react";

// Helper for formatting time
const formatTime = (seconds: number) => {
  if (seconds < 60) return `${Math.floor(seconds)}s`;
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) return `${h}h ${m}m ${s}s`;
  return `${m}m ${s}s`;
};

const defaultEggs = [
  { name: "Anti Bee Egg", time: 15000, icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdfRkZENzAwXzExMTExMSIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iMzAlIiBmeT0iMzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZENzAwO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzExMTExMTtzdG9wLW9wYWNpdHk6MSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZWxsaXBzZSBjeD0iNTAiIGN5PSI1MCIgcng9IjM1IiByeT0iNDUiIGZpbGw9InVybCgjZ19GRkQ3MDBfMTExMTExKSIgLz48L3N2Zz4=" },
  { name: "Bee Egg", time: 15000, icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdfMTExMTExX0ZGRDcwMCIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iMzAlIiBmeT0iMzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMTExMTExO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRDcwMDtzdG9wLW9wYWNpdHk6MSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZWxsaXBzZSBjeD0iNTAiIGN5PSI1MCIgcng9IjM1IiByeT0iNDUiIGZpbGw9InVybCgjZ18xMTExMTFfRkZENzAwKSIgLz48L3N2Zz4=" },
  { name: "Bug Egg", time: 28800, icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdfN0NGQzAwXzhCNDUxMyIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iMzAlIiBmeT0iMzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojN0NGQzAwO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzhCNDUxMztzdG9wLW9wYWNpdHk6MSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZWxsaXBzZSBjeD0iNTAiIGN5PSI1MCIgcng9IjM1IiByeT0iNDUiIGZpbGw9InVybCgjZ183Q0ZDMDBfOEI0NTEzKSIgLz48L3N2Zz4=" },
  { name: "Common Egg", time: 600, icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdfRDNEM0QzXzgwODA4MCIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iMzAlIiBmeT0iMzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRDNEM0QzO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzgwODA4MDtzdG9wLW9wYWNpdHk6MSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZWxsaXBzZSBjeD0iNTAiIGN5PSI1MCIgcng9IjM1IiByeT0iNDUiIGZpbGw9InVybCgjZ19EM0QzRDNfODA4MDgwKSIgLz48L3N2Zz4=" },
  { name: "Common Summer Egg", time: 1200, icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdfRkZENzAwX0Y0QTQ2MCIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iMzAlIiBmeT0iMzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZENzAwO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I0Y0QTQ2MDtzdG9wLW9wYWNpdHk6MSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZWxsaXBzZSBjeD0iNTAiIGN5PSI1MCIgcng9IjM1IiByeT0iNDUiIGZpbGw9InVybCgjZ19GRkQ3MDBfRjRBNDYwKSIgLz48L3N2Zz4=" },
  { name: "Dinosaur Egg", time: 15000, icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdfRkZBNTAwXzJFOEI1NyIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iMzAlIiBmeT0iMzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZBNTAwO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzJFOEI1NztzdG9wLW9wYWNpdHk6MSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZWxsaXBzZSBjeD0iNTAiIGN5PSI1MCIgcng9IjM1IiByeT0iNDUiIGZpbGw9InVybCgjZ19GRkE1MDBfMkU4QjU3KSIgLz48L3N2Zz4=" },
  { name: "Enchanted Egg", time: 15000, icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdfRkY2OUI0XzhBMkJFMiIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iMzAlIiBmeT0iMzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRkY2OUI0O3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzhBMkJFMjtzdG9wLW9wYWNpdHk6MSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZWxsaXBzZSBjeD0iNTAiIGN5PSI1MCIgcng9IjM1IiByeT0iNDUiIGZpbGw9InVybCgjZ19GRjY5QjRfOEEyQkUyKSIgLz48L3N2Zz4=" },
  { name: "Fall Egg", time: 15000, icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdfRkY4QzAwX0E1MkEyQSIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iMzAlIiBmeT0iMzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRkY4QzAwO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I0E1MkEyQTtzdG9wLW9wYWNpdHk6MSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZWxsaXBzZSBjeD0iNTAiIGN5PSI1MCIgcng9IjM1IiByeT0iNDUiIGZpbGw9InVybCgjZ19GRjhDMDBfQTUyQTJBKSIgLz48L3N2Zz4=" },
  { name: "Gem Egg", time: 28800, icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdfMDBGRkZGXzAwMDBGRiIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iMzAlIiBmeT0iMzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBGRkZGO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDBGRjtzdG9wLW9wYWNpdHk6MSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZWxsaXBzZSBjeD0iNTAiIGN5PSI1MCIgcng9IjM1IiByeT0iNDUiIGZpbGw9InVybCgjZ18wMEZGRkZfMDAwMEZGKSIgLz48L3N2Zz4=" },
  { name: "Gourmet Egg", time: 15000, icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdfRkZGRkZGX0ZGRDcwMCIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iMzAlIiBmeT0iMzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRDcwMDtzdG9wLW9wYWNpdHk6MSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZWxsaXBzZSBjeD0iNTAiIGN5PSI1MCIgcng9IjM1IiByeT0iNDUiIGZpbGw9InVybCgjZ19GRkZGRkZfRkZENzAwKSIgLz48L3N2Zz4=" },
  { name: "Jungle Egg", time: 28800, icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdfMzJDRDMyXzAwNjQwMCIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iMzAlIiBmeT0iMzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzJDRDMyO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwNjQwMDtzdG9wLW9wYWNpdHk6MSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZWxsaXBzZSBjeD0iNTAiIGN5PSI1MCIgcng9IjM1IiByeT0iNDUiIGZpbGw9InVybCgjZ18zMkNEMzJfMDA2NDAwKSIgLz48L3N2Zz4=" },
  { name: "Legendary Egg", time: 14400, icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdfRkZENzAwX0RDMTQzQyIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iMzAlIiBmeT0iMzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZENzAwO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I0RDMTQzQztzdG9wLW9wYWNpdHk6MSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZWxsaXBzZSBjeD0iNTAiIGN5PSI1MCIgcng9IjM1IiByeT0iNDUiIGZpbGw9InVybCgjZ19GRkQ3MDBfREMxNDNDKSIgLz48L3N2Zz4=" },
  { name: "Mythical Egg", time: 18400, icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdfMDBGRkZGXzgwMDA4MCIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iMzAlIiBmeT0iMzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBGRkZGO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzgwMDA4MDtzdG9wLW9wYWNpdHk6MSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZWxsaXBzZSBjeD0iNTAiIGN5PSI1MCIgcng9IjM1IiByeT0iNDUiIGZpbGw9InVybCgjZ18wMEZGRkZfODAwMDgwKSIgLz48L3N2Zz4=" },
  { name: "Night Egg", time: 15000, icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdfMDAwMDAwXzAwMDA4MCIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iMzAlIiBmeT0iMzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDAwMDAwO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDA4MDtzdG9wLW9wYWNpdHk6MSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZWxsaXBzZSBjeD0iNTAiIGN5PSI1MCIgcng9IjM1IiByeT0iNDUiIGZpbGw9InVybCgjZ18wMDAwMDBfMDAwMDgwKSIgLz48L3N2Zz4=" },
  { name: "Oasis Egg", time: 15000, icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdfMDBGRkZGX0VEQzlBRiIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iMzAlIiBmeT0iMzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBGRkZGO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I0VEQzlBRjtzdG9wLW9wYWNpdHk6MSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZWxsaXBzZSBjeD0iNTAiIGN5PSI1MCIgcng9IjM1IiByeT0iNDUiIGZpbGw9InVybCgjZ18wMEZGRkZfRURDOUFGKSIgLz48L3N2Zz4=" },
  { name: "Paradise Egg", time: 24000, icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdfRkZGRjAwX0ZGMTQ5MyIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iMzAlIiBmeT0iMzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRjAwO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGMTQ5MztzdG9wLW9wYWNpdHk6MSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZWxsaXBzZSBjeD0iNTAiIGN5PSI1MCIgcng9IjM1IiByeT0iNDUiIGZpbGw9InVybCgjZ19GRkZGMDBfRkYxNDkzKSIgLz48L3N2Zz4=" },
  { name: "Primal Egg", time: 15000, icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdfRkYwMDAwXzhCNDUxMyIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iMzAlIiBmeT0iMzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRkYwMDAwO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzhCNDUxMztzdG9wLW9wYWNpdHk6MSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZWxsaXBzZSBjeD0iNTAiIGN5PSI1MCIgcng9IjM1IiByeT0iNDUiIGZpbGw9InVybCgjZ19GRjAwMDBfOEI0NTEzKSIgLz48L3N2Zz4=" },
  { name: "Rare Egg", time: 7200, icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdfQUREOEU2XzAwMDBGRiIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iMzAlIiBmeT0iMzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojQUREOEU2O3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDBGRjtzdG9wLW9wYWNpdHk6MSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZWxsaXBzZSBjeD0iNTAiIGN5PSI1MCIgcng9IjM1IiByeT0iNDUiIGZpbGw9InVybCgjZ19BREQ4RTZfMDAwMEZGKSIgLz48L3N2Zz4=" },
  { name: "Rare Summer Egg", time: 14400, icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdfRkZGRjAwXzAwMDBGRiIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iMzAlIiBmeT0iMzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRjAwO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDBGRjtzdG9wLW9wYWNpdHk6MSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZWxsaXBzZSBjeD0iNTAiIGN5PSI1MCIgcng9IjM1IiByeT0iNDUiIGZpbGw9InVybCgjZ19GRkZGMDBfMDAwMEZGKSIgLz48L3N2Zz4=" },
  { name: "Safari Egg", time: 15000, icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdfMDA4MDAwX0YwRTY4QyIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iMzAlIiBmeT0iMzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA4MDAwO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I0YwRTY4QztzdG9wLW9wYWNpdHk6MSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZWxsaXBzZSBjeD0iNTAiIGN5PSI1MCIgcng9IjM1IiByeT0iNDUiIGZpbGw9InVybCgjZ18wMDgwMDBfRjBFNjhDKSIgLz48L3N2Zz4=" },
  { name: "Spooky Egg", time: 15000, icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdfRkZBNTAwXzRCMDA4MiIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iMzAlIiBmeT0iMzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZBNTAwO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzRCMDA4MjtzdG9wLW9wYWNpdHk6MSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZWxsaXBzZSBjeD0iNTAiIGN5PSI1MCIgcng9IjM1IiByeT0iNDUiIGZpbGw9InVybCgjZ19GRkE1MDBfNEIwMDgyKSIgLz48L3N2Zz4=" },
  { name: "Sprout Egg", time: 15000, icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdfOTBFRTkwXzAwODAwMCIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iMzAlIiBmeT0iMzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojOTBFRTkwO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwODAwMDtzdG9wLW9wYWNpdHk6MSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZWxsaXBzZSBjeD0iNTAiIGN5PSI1MCIgcng9IjM1IiByeT0iNDUiIGZpbGw9InVybCgjZ185MEVFOTBfMDA4MDAwKSIgLz48L3N2Zz4=" },
  { name: "Uncommon Egg", time: 1200, icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdfOTBFRTkwXzIyOEIyMiIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iMzAlIiBmeT0iMzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojOTBFRTkwO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzIyOEIyMjtzdG9wLW9wYWNpdHk6MSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZWxsaXBzZSBjeD0iNTAiIGN5PSI1MCIgcng9IjM1IiByeT0iNDUiIGZpbGw9InVybCgjZ185MEVFOTBfMjI4QjIyKSIgLz48L3N2Zz4=" },
  { name: "Zen Egg", time: 15000, icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdfQUREOEU2X0ZGRkZGRiIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iMzAlIiBmeT0iMzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojQUREOEU2O3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRjtzdG9wLW9wYWNpdHk6MSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZWxsaXBzZSBjeD0iNTAiIGN5PSI1MCIgcng9IjM1IiByeT0iNDUiIGZpbGw9InVybCgjZ19BREQ4RTZfRkZGRkZGKSIgLz48L3N2Zz4=" },
];

const helperPets = [
  { name: "Bald Eagle", icon: "https://tr.rbxcdn.com/180DAY-4e31d168067cc50c61de6f77933b95aa/150/150/Image/Png/noFilter" },
  { name: "Blood Kiwi", icon: "https://tr.rbxcdn.com/180DAY-23782aaee6ad705385023c59465dadf1/150/150/Image/Png/noFilter" },
  { name: "Kiwi", icon: "https://tr.rbxcdn.com/180DAY-5d5b0f7de5b309e69edd1bc9550ee504/150/150/Image/Png/noFilter" },
  { name: "Rooster", icon: "https://tr.rbxcdn.com/180DAY-b0551337aef57d76def0a79f45f21813/150/150/Image/Png/noFilter" },
  { name: "Sunny-Side Chicken", icon: "https://tr.rbxcdn.com/180DAY-f861fb4ec03d458e58b1caa4a699fd25/150/150/Image/Png/noFilter" },
];

export default function EggHatchCalculator() {
  const [selectedEgg, setSelectedEgg] = useState(defaultEggs[0]);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState<"A-Z" | "Hatch Time">("A-Z");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [hatchSpeedBonus, setHatchSpeedBonus] = useState("0");
  const [selectedHelpers, setSelectedHelpers] = useState<string[]>([]);
  const [expanded, setExpanded] = useState(false);

  const toggleHelper = (helper: string) => {
    setSelectedHelpers(prev => prev.includes(helper) ? prev.filter(h => h !== helper) : [...prev, helper]);
  };

  const toggleSortType = () => {
    setSortType(prev => prev === "A-Z" ? "Hatch Time" : "A-Z");
  };

  const toggleSortOrder = () => {
    setSortOrder(prev => prev === "asc" ? "desc" : "asc");
  };

  const calculateFinalTime = () => {
    const baseTime = selectedEgg.time;
    let totalBonus = parseFloat(hatchSpeedBonus || "0");
    selectedHelpers.forEach(() => {
      totalBonus += 5; // Example helper bonus
    });
    
    // Simplistic percentage reduction based on total bonus %
    // E.g. +50% speed means it takes baseTime / 1.5
    const multiplier = 1 + (totalBonus / 100);
    const finalTime = Math.max(0, baseTime / multiplier);
    return {
      base: baseTime,
      bonus: totalBonus.toFixed(2).replace(/\.00$/, ''),
      final: finalTime,
      saved: baseTime - finalTime
    };
  };

  const processedEggs = useMemo(() => {
    let result = [...defaultEggs];
    
    if (search) {
      result = result.filter(egg => egg.name.toLowerCase().includes(search.toLowerCase()));
    }

    result.sort((a, b) => {
      let comparison = 0;
      if (sortType === "A-Z") {
        comparison = a.name.localeCompare(b.name);
      } else {
        comparison = a.time - b.time;
      }
      return sortOrder === "asc" ? comparison : -comparison;
    });

    return result;
  }, [search, sortType, sortOrder]);

  const stats = calculateFinalTime();
  const visibleEggs = expanded ? processedEggs : processedEggs.slice(0, 15);

  return (
    <div className="w-full max-w-6xl mx-auto text-white animate-fade-in pb-20 pt-8 px-4 font-sans">
      
      {/* Header Description */}
      <h1 className="text-3xl font-bold mb-3 mt-4 text-white">Egg Hatch Speed Calculator</h1>
      <p className="text-gray-400 text-sm max-w-2xl leading-relaxed mb-10">
        Calculate egg hatch times with helper pets like Blood Kiwi and Bald Eagle.
      </p>

      <div className="space-y-8 max-w-4xl">
        
        {/* Eggs Selection */}
        <div>
          <label className="text-sm text-gray-400 block mb-3">Eggs</label>
          <div className="flex flex-col sm:flex-row gap-2 mb-4">
            <div className="relative w-full sm:max-w-[240px]">
              <input 
                type="text" 
                placeholder="Search eggs..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-3 pr-4 py-2.5 bg-[#151c18] border border-[#2a362e] rounded-sm outline-none focus:border-green-500 transition-colors text-sm text-white placeholder:text-gray-500"
              />
            </div>
            <button 
              onClick={toggleSortType}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#151c18] border border-[#2a362e] text-gray-300 text-sm rounded-sm hover:bg-[#2a362e] transition-colors"
            >
              Sort: {sortType}
            </button>
            <button 
              onClick={toggleSortOrder}
              className="flex items-center justify-center w-10 h-10 bg-[#151c18] border border-[#2a362e] text-gray-300 rounded-sm hover:bg-[#2a362e] transition-colors"
            >
              {sortOrder === "asc" ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0 rounded-sm overflow-hidden border border-[#2a362e]">
            {visibleEggs.map((egg) => {
              const isSelected = selectedEgg.name === egg.name;
              return (
                <button
                  key={egg.name}
                  onClick={() => setSelectedEgg(egg)}
                  className={`flex flex-col items-center justify-center p-4 border border-[#2a362e] transition-all h-[140px] ${
                    isSelected 
                      ? "bg-white border-white z-10 scale-[1.02] shadow-lg" 
                      : "bg-[#151c18] hover:bg-[#1a231d]"
                  }`}
                >
                  <img src={egg.icon} alt={egg.name} className="w-14 h-14 object-contain mb-3" />
                  <span className={`text-xs text-center leading-tight mb-1 font-medium ${isSelected ? "text-black" : "text-white"}`}>
                    {egg.name}
                  </span>
                  <span className={`text-[10px] font-medium ${isSelected ? "text-black" : "text-gray-400"}`}>
                    {formatTime(egg.time)}
                  </span>
                </button>
              );
            })}
            {visibleEggs.length === 0 && (
              <div className="col-span-full py-8 text-center text-gray-400 text-sm bg-[#151c18]">
                No eggs match your search.
              </div>
            )}
          </div>
          <div className="flex justify-end mt-2">
            <button 
              onClick={() => setExpanded(!expanded)} 
              className="flex items-center gap-1 text-sm text-gray-300 bg-[#2b3542] hover:bg-[#3b4552] px-3 py-1.5 rounded-sm transition-colors"
            >
              {expanded ? 'Collapse' : 'Expand'} <ChevronDown className={`w-4 h-4 transform transition-transform ${expanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Hatch Speed Bonus */}
        <div className="space-y-3">
          <label className="text-sm text-gray-400 block">Hatch Speed Bonus (%)</label>
          <input 
            type="number" 
            value={hatchSpeedBonus} 
            onChange={(e) => setHatchSpeedBonus(e.target.value)}
            className="w-full bg-[#0a0f0c] border border-[#1a231d] rounded-sm px-4 py-3 outline-none focus:border-green-800 transition-colors text-sm text-white"
          />
        </div>

        {/* Helper Pets */}
        <div className="space-y-3">
          <label className="text-sm text-gray-400 block">Helper Pets</label>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {helperPets.map((pet) => {
              const isActive = selectedHelpers.includes(pet.name);
              return (
                <button
                  key={pet.name}
                  onClick={() => toggleHelper(pet.name)}
                  className={`flex flex-col items-center justify-center p-3 rounded-sm border min-w-[90px] h-[90px] transition-colors ${
                    isActive ? "bg-[#14452a] border-green-600 shadow-md" : "border-[#1a231d] bg-[#0a0f0c] hover:bg-[#151c18]"
                  }`}
                >
                  <img src={pet.icon} alt={pet.name} className="w-8 h-8 object-contain mb-2" />
                  <span className={`text-[10px] text-center leading-tight ${isActive ? "text-green-300 font-bold" : "text-gray-300"}`}>{pet.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Result Box */}
        <div className="mt-10 bg-[#061e0e] border border-[#0d421d] rounded-sm p-8 flex flex-col relative">
          <div className="text-xs text-white mb-6">Result</div>
          
          <div className="flex justify-start mb-10">
            <img src={selectedEgg.icon} alt={selectedEgg.name} className="w-20 h-20 object-contain filter grayscale brightness-200" />
          </div>
          
          <div className="space-y-4 max-w-full w-full">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-white">Base Hatch Time:</span>
              <span className="text-white">{formatTime(stats.base)}</span>
            </div>
            <div className="flex justify-between text-sm font-medium">
              <span className="text-white">Time Saved:</span>
              <span className="text-green-500">-{formatTime(stats.saved)}</span>
            </div>
            <div className="flex justify-between text-sm font-medium">
              <span className="text-white">Final Boost:</span>
              <span className="text-green-500">+{stats.bonus}%</span>
            </div>
            <div className="flex justify-between text-sm font-bold pt-1">
              <span className="text-white">Final Hatch Time:</span>
              <span className="text-yellow-500">{formatTime(stats.final)}</span>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <button className="border border-[#14452a] hover:bg-[#14452a]/50 bg-[#0b2818] text-green-400 rounded-full px-5 py-2 text-xs inline-flex items-center gap-2 transition-colors">
              <span className="text-red-500 text-base">🍓</span> 
              www.growagardencalculator.ca 
              <Copy className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
