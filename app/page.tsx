"use client";

import { useState, useEffect, useCallback } from "react";
import { PHASES, allWeeks, totalWeeks } from "@/lib/phases";

type ProgressRecord = { weekNum: number; completed: boolean; note: string | null };
type StreakData = { current: number; longest: number; lastActiveDate: string | null };

function PinGate({ onUnlock }: { onUnlock: () => void }) {
  const [digits, setDigits] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(false);

  async function handleDigit(d: string) {
    if (checking) return;
    const next = digits + d;
    setDigits(next);
    setError(false);
    if (next.length === 4) {
      setChecking(true);
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin: next }),
      });
      if (res.ok) {
        onUnlock();
      } else {
        setError(true);
        setDigits("");
      }
      setChecking(false);
    }
  }

  const keys = ["1","2","3","4","5","6","7","8","9","","0","⌫"];

  return (
    <div style={{ background: "#0A0E1A", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "'Inter','Segoe UI',sans-serif" }}>
      <div style={{ color: "#00D9FF", fontSize: "11px", letterSpacing: "3px", fontWeight: 600, textTransform: "uppercase", marginBottom: "8px" }}>Usman's</div>
      <div style={{ fontSize: "22px", fontWeight: 700, color: "#F8FAFC", marginBottom: "4px" }}>Cloud & DevOps Roadmap</div>
      <div style={{ fontSize: "13px", color: "#64748B", marginBottom: "40px" }}>Enter your PIN to continue</div>

      {/* Dots */}
      <div style={{ display: "flex", gap: "16px", marginBottom: "32px" }}>
        {[0,1,2,3].map(i => (
          <div key={i} style={{ width: "14px", height: "14px", borderRadius: "50%", background: i < digits.length ? (error ? "#EF4444" : "#00D9FF") : "#1E293B", border: `2px solid ${i < digits.length ? (error ? "#EF4444" : "#00D9FF") : "#334155"}`, transition: "all 0.15s" }} />
        ))}
      </div>

      {error && <div style={{ color: "#EF4444", fontSize: "13px", marginBottom: "16px" }}>Incorrect PIN</div>}

      {/* Keypad */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 72px)", gap: "12px" }}>
        {keys.map((k, i) => (
          k === "" ? <div key={i} /> :
          <button key={i}
            onClick={() => k === "⌫" ? setDigits(d => d.slice(0, -1)) : handleDigit(k)}
            disabled={checking}
            style={{ height: "72px", borderRadius: "12px", background: k === "⌫" ? "#1E293B" : "#0F172A", border: "1px solid #1E293B", color: "#F1F5F9", fontSize: k === "⌫" ? "20px" : "22px", fontWeight: 600, cursor: "pointer", transition: "all 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#1E293B")}
            onMouseLeave={e => (e.currentTarget.style.background = k === "⌫" ? "#1E293B" : "#0F172A")}>
            {k}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function RoadmapDashboard() {
  const [unlocked, setUnlocked] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
  const [activeWeek, setActiveWeek] = useState<number | null>(null);
  const [view, setView] = useState<"phases" | "week">("phases");
  const [progress, setProgress] = useState<Record<number, ProgressRecord>>({});
  const [streak, setStreak] = useState<StreakData>({ current: 0, longest: 0, lastActiveDate: null });
  const [noteInput, setNoteInput] = useState("");
  const [saving, setSaving] = useState(false);

  const completedWeeks = new Set(Object.values(progress).filter(p => p.completed).map(p => p.weekNum));
  const completedCount = completedWeeks.size;
  const progressPct = Math.round((completedCount / totalWeeks) * 100);

  const fetchData = useCallback(async () => {
    const [prog, str] = await Promise.all([
      fetch("/api/progress").then(r => r.json()),
      fetch("/api/streak").then(r => r.json()),
    ]);
    const map: Record<number, ProgressRecord> = {};
    for (const p of prog) map[p.weekNum] = p;
    setProgress(map);
    setStreak(str);
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  async function toggleWeek(weekNum: number, note?: string) {
    setSaving(true);
    const current = progress[weekNum];
    const nowCompleted = !current?.completed;
    const res = await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ weekNum, completed: nowCompleted, note: note ?? current?.note ?? null }),
    });
    const updated = await res.json();
    setProgress(prev => ({ ...prev, [weekNum]: updated }));
    const str = await fetch("/api/streak").then(r => r.json());
    setStreak(str);
    setSaving(false);
  }

  async function saveNote(weekNum: number) {
    setSaving(true);
    const current = progress[weekNum];
    const res = await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ weekNum, completed: current?.completed ?? false, note: noteInput }),
    });
    const updated = await res.json();
    setProgress(prev => ({ ...prev, [weekNum]: updated }));
    setSaving(false);
  }

  function openWeek(week: number, phaseId: number) {
    setActiveWeek(week);
    setActivePhase(phaseId);
    setView("week");
    setNoteInput(progress[week]?.note ?? "");
  }

  const phase = PHASES[activePhase];
  const selectedWeekData = activeWeek !== null ? allWeeks.find(w => w.week === activeWeek) : null;

  if (!unlocked) return <PinGate onUnlock={() => setUnlocked(true)} />;

  return (
    <div style={{ background: "#0A0E1A", minHeight: "100vh", fontFamily: "'Inter','Segoe UI',sans-serif", color: "#E2E8F0" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#0F172A 0%,#0A0E1A 100%)", borderBottom: "1px solid #1E293B", padding: "24px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <div style={{ color: "#00D9FF", fontSize: "11px", letterSpacing: "3px", fontWeight: 600, textTransform: "uppercase", marginBottom: "4px" }}>Usman's</div>
          <h1 style={{ margin: 0, fontSize: "24px", fontWeight: 700, color: "#F8FAFC", letterSpacing: "-0.5px" }}>Cloud & DevOps Roadmap</h1>
          <p style={{ margin: "4px 0 0", fontSize: "13px", color: "#64748B" }}>52 weeks · 10 phases · 1 international career</p>
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "24px", alignItems: "center", flexWrap: "wrap" }}>
          {/* Streak */}
          <div style={{ background: "#0F172A", border: "1px solid #1E293B", borderRadius: "10px", padding: "12px 18px", textAlign: "center" }}>
            <div style={{ fontSize: "24px", fontWeight: 800, color: "#F97316" }}>🔥 {streak.current}</div>
            <div style={{ fontSize: "11px", color: "#64748B", marginTop: "2px" }}>day streak</div>
            <div style={{ fontSize: "10px", color: "#334155", marginTop: "1px" }}>best: {streak.longest}</div>
          </div>

          {/* Progress */}
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "36px", fontWeight: 800, color: "#00D9FF", lineHeight: 1 }}>{progressPct}%</div>
            <div style={{ fontSize: "12px", color: "#64748B", marginTop: "2px" }}>{completedCount}/{totalWeeks} weeks done</div>
            <div style={{ width: "160px", height: "4px", background: "#1E293B", borderRadius: "2px", marginTop: "8px", overflow: "hidden" }}>
              <div style={{ width: `${progressPct}%`, height: "100%", background: "linear-gradient(90deg,#7C3AED,#00D9FF)", borderRadius: "2px", transition: "width 0.4s ease" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div style={{ display: "flex", gap: 0, borderBottom: "1px solid #1E293B", padding: "0 32px", overflowX: "auto" }}>
        {view === "week" && (
          <button onClick={() => setView("phases")} style={{ background: "none", border: "none", color: "#64748B", padding: "14px 16px", cursor: "pointer", fontSize: "13px", borderBottom: "2px solid transparent" }}>
            ← Back
          </button>
        )}
        {PHASES.map((p, i) => (
          <button key={p.id} onClick={() => { setActivePhase(i); setView("phases"); }}
            style={{ background: "none", border: "none", color: activePhase === i && view === "phases" ? p.color : "#64748B", padding: "14px 14px", cursor: "pointer", fontSize: "12px", fontWeight: activePhase === i ? 600 : 400, borderBottom: activePhase === i && view === "phases" ? `2px solid ${p.color}` : "2px solid transparent", whiteSpace: "nowrap", transition: "all 0.2s" }}>
            {p.icon} {p.label}
          </button>
        ))}
      </div>

      <div style={{ padding: "28px 32px", maxWidth: "1100px", margin: "0 auto" }}>

        {view === "phases" && (
          <>
            {/* Phase header */}
            <div style={{ background: phase.accent, border: `1px solid ${phase.color}33`, borderRadius: "12px", padding: "20px 24px", marginBottom: "24px", display: "flex", alignItems: "center", gap: "20px" }}>
              <div style={{ fontSize: "40px" }}>{phase.icon}</div>
              <div>
                <div style={{ fontSize: "11px", color: phase.color, letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600 }}>{phase.month}</div>
                <div style={{ fontSize: "22px", fontWeight: 700, color: "#F8FAFC", marginTop: "2px" }}>{phase.label}: {phase.title}</div>
                <div style={{ fontSize: "13px", color: "#94A3B8", marginTop: "4px" }}>{phase.weeks.length} week{phase.weeks.length !== 1 ? "s" : ""} · click a week to see full breakdown + add notes</div>
              </div>
            </div>

            {/* Week cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "16px" }}>
              {phase.weeks.map(w => {
                const done = completedWeeks.has(w.week);
                const hasNote = !!progress[w.week]?.note;
                return (
                  <div key={w.week}
                    style={{ background: done ? "#0D1F0D" : "#0F172A", border: done ? `1px solid ${phase.color}66` : "1px solid #1E293B", borderRadius: "10px", padding: "18px 20px", cursor: "pointer", transition: "all 0.2s", position: "relative", overflow: "hidden" }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = phase.color)}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = done ? `${phase.color}66` : "#1E293B")}
                    onClick={() => openWeek(w.week, activePhase)}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: done ? phase.color : "transparent" }} />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ fontSize: "10px", color: phase.color, letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600 }}>Week {w.week}</span>
                        {hasNote && <span style={{ fontSize: "10px", color: "#F59E0B" }} title="Has notes">📝</span>}
                      </div>
                      <button onClick={e => { e.stopPropagation(); toggleWeek(w.week); }}
                        style={{ background: done ? phase.color : "transparent", border: `1px solid ${done ? phase.color : "#334155"}`, borderRadius: "4px", width: "20px", height: "20px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", color: done ? "#000" : "#64748B", flexShrink: 0 }}>
                        {done ? "✓" : ""}
                      </button>
                    </div>
                    <div style={{ fontSize: "15px", fontWeight: 600, color: "#F1F5F9", marginBottom: "10px" }}>{w.title}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {w.topics.slice(0, 3).map((t, i) => (
                        <span key={i} style={{ background: "#1E293B", color: "#94A3B8", borderRadius: "4px", padding: "3px 8px", fontSize: "11px" }}>{t}</span>
                      ))}
                      {w.topics.length > 3 && <span style={{ background: "#1E293B", color: phase.color, borderRadius: "4px", padding: "3px 8px", fontSize: "11px" }}>+{w.topics.length - 3} more</span>}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Phase progress */}
            <div style={{ marginTop: "24px", background: "#0F172A", border: "1px solid #1E293B", borderRadius: "10px", padding: "16px 20px", display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ fontSize: "13px", color: "#64748B", flexShrink: 0 }}>Phase progress</div>
              <div style={{ flex: 1, background: "#1E293B", borderRadius: "2px", height: "4px", overflow: "hidden" }}>
                <div style={{ width: `${Math.round((phase.weeks.filter(w => completedWeeks.has(w.week)).length / phase.weeks.length) * 100)}%`, height: "100%", background: phase.color, transition: "width 0.4s ease" }} />
              </div>
              <div style={{ fontSize: "13px", color: phase.color, fontWeight: 600, flexShrink: 0 }}>
                {phase.weeks.filter(w => completedWeeks.has(w.week)).length}/{phase.weeks.length}
              </div>
            </div>
          </>
        )}

        {view === "week" && selectedWeekData && (() => {
          const ph = selectedWeekData.phase;
          const done = completedWeeks.has(selectedWeekData.week);
          return (
            <div>
              <div style={{ marginBottom: "24px" }}>
                <div style={{ fontSize: "11px", color: ph.color, letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600, marginBottom: "6px" }}>
                  {ph.label} · Week {selectedWeekData.week}
                </div>
                <h2 style={{ margin: 0, fontSize: "26px", fontWeight: 700, color: "#F8FAFC" }}>{selectedWeekData.title}</h2>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                {/* Topics */}
                <div style={{ background: "#0F172A", border: "1px solid #1E293B", borderRadius: "10px", padding: "20px" }}>
                  <div style={{ fontSize: "11px", color: ph.color, letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600, marginBottom: "14px" }}>📚 What to Learn</div>
                  {selectedWeekData.topics.map((t, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "8px" }}>
                      <div style={{ width: "5px", height: "5px", background: ph.color, borderRadius: "50%", marginTop: "7px", flexShrink: 0 }} />
                      <span style={{ fontSize: "14px", color: "#CBD5E1" }}>{t}</span>
                    </div>
                  ))}
                </div>

                {/* Project */}
                <div style={{ background: "#0F172A", border: `1px solid ${ph.color}44`, borderRadius: "10px", padding: "20px" }}>
                  <div style={{ fontSize: "11px", color: ph.color, letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600, marginBottom: "14px" }}>🔨 Project</div>
                  <p style={{ margin: 0, fontSize: "14px", color: "#CBD5E1", lineHeight: 1.6 }}>{selectedWeekData.project}</p>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                {/* GitHub */}
                <div style={{ background: "#0F172A", border: "1px solid #1E293B", borderRadius: "10px", padding: "18px" }}>
                  <div style={{ fontSize: "11px", color: "#64748B", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600, marginBottom: "12px" }}>🐙 GitHub Commit</div>
                  <p style={{ margin: 0, fontSize: "13px", color: "#94A3B8", lineHeight: 1.5, fontFamily: "monospace" }}>{selectedWeekData.github}</p>
                </div>
                {/* Resources */}
                <div style={{ background: "#0F172A", border: "1px solid #1E293B", borderRadius: "10px", padding: "18px" }}>
                  <div style={{ fontSize: "11px", color: "#64748B", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600, marginBottom: "12px" }}>🔗 Resources</div>
                  {selectedWeekData.resources.map((r, i) => (
                    <div key={i} style={{ fontSize: "12px", color: ph.color, marginBottom: "6px", fontFamily: "monospace" }}>→ {r}</div>
                  ))}
                </div>
                {/* LinkedIn */}
                <div style={{ background: "#0F172A", border: "1px solid #1E293B", borderRadius: "10px", padding: "18px" }}>
                  <div style={{ fontSize: "11px", color: "#64748B", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600, marginBottom: "12px" }}>💼 LinkedIn Post Idea</div>
                  <p style={{ margin: 0, fontSize: "12px", color: "#94A3B8", lineHeight: 1.5, fontStyle: "italic" }}>{selectedWeekData.linkedin}</p>
                </div>
              </div>

              {/* Notes */}
              <div style={{ background: "#0F172A", border: `1px solid ${ph.color}33`, borderRadius: "10px", padding: "20px", marginBottom: "16px" }}>
                <div style={{ fontSize: "11px", color: ph.color, letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600, marginBottom: "12px" }}>📝 My Notes</div>
                <textarea
                  value={noteInput}
                  onChange={e => setNoteInput(e.target.value)}
                  placeholder="What did you learn? Any blockers? Links to your commits..."
                  style={{ width: "100%", minHeight: "100px", background: "#0A0E1A", border: "1px solid #1E293B", borderRadius: "6px", padding: "12px", color: "#CBD5E1", fontSize: "13px", resize: "vertical", outline: "none", boxSizing: "border-box", lineHeight: 1.6 }}
                />
                <button onClick={() => saveNote(selectedWeekData.week)} disabled={saving}
                  style={{ marginTop: "10px", background: "#1E293B", color: ph.color, border: `1px solid ${ph.color}44`, borderRadius: "6px", padding: "8px 18px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>
                  {saving ? "Saving..." : "Save Note"}
                </button>
              </div>

              {/* Mark complete */}
              <button onClick={() => { toggleWeek(selectedWeekData.week); setView("phases"); }}
                disabled={saving}
                style={{ background: done ? "transparent" : ph.color, color: done ? ph.color : "#000", border: `1px solid ${ph.color}`, borderRadius: "8px", padding: "12px 28px", fontSize: "14px", fontWeight: 600, cursor: "pointer", transition: "all 0.2s" }}>
                {done ? "✓ Completed — Mark Incomplete" : "Mark Week as Complete →"}
              </button>
            </div>
          );
        })()}
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #1E293B", padding: "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", color: "#334155" }}>
        <span>cloud-devops-journey · Usman's 52-Week Roadmap</span>
        <span style={{ color: "#00D9FF" }}>{completedCount} of {totalWeeks} weeks · {progressPct}% complete</span>
      </div>
    </div>
  );
}
