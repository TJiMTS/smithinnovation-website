import { getOpsData } from "@/lib/ops-db";
import type { OpsData, OpsTask } from "@/lib/ops-db-types";

export type ExecutionSelection = {
  primaryTask: OpsTask | null;
  fallbackTask: OpsTask | null;
  blockedPrimaryReason: string | null;
};

function isActionable(task: OpsTask) {
  return task.status !== "done" && task.status !== "archived";
}

function isBlocked(task: OpsTask) {
  return task.status === "blocked" || Boolean(task.blockedReason?.trim());
}

function byPriority(a: OpsTask, b: OpsTask) {
  return (a.priority ?? 999) - (b.priority ?? 999);
}

export function selectExecutionTasks(data: OpsData): ExecutionSelection {
  const tasks = data.tasks.filter(isActionable).sort(byPriority);

  const nowTasks = tasks.filter((task) => task.lane === "now");
  const nextTasks = tasks.filter((task) => task.lane === "next");

  const ordered = [...nowTasks, ...nextTasks];

  const primaryTask = ordered.find((task) => !isBlocked(task)) ?? ordered[0] ?? null;

  let fallbackTask: OpsTask | null = null;
  if (primaryTask) {
    fallbackTask = ordered.find((task) => task.id !== primaryTask.id && !isBlocked(task)) ?? null;
  }

  return {
    primaryTask,
    fallbackTask,
    blockedPrimaryReason: primaryTask && isBlocked(primaryTask) ? primaryTask.blockedReason ?? "Blocked" : null,
  };
}

export async function getExecutionSelection() {
  const data = await getOpsData();
  return selectExecutionTasks(data);
}
