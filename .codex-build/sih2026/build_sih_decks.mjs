import fs from "node:fs/promises";
import { FileBlob, PresentationFile } from "/Users/kate/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs";

const TEMPLATE = "/Users/kate/Downloads/SIH2026-IDEA-Presentation-Format.pptx";
const EYE_IMAGE = "/var/folders/f3/2_s23s214jn54crld4l1vhsw0000gn/T/codex-clipboard-d7166179-6b8d-49ca-a0e8-c10606a9049b.png";
const DISCORD_IMAGE_1 = "/Users/kate/Documents/personal/arunya-portfolio/.codex-build/sih2026/discord-eye-tracker-1.jpg";
const DISCORD_IMAGE_2 = "/Users/kate/Documents/personal/arunya-portfolio/.codex-build/sih2026/discord-eye-tracker-2.jpg";
const AAC_IMAGE = "/Users/kate/Documents/personal/arunya-portfolio/.codex-build/sih2026/aac-eye-gaze.jpg";
const SPEECH_IMAGE = "/Users/kate/Documents/personal/arunya-portfolio/.codex-build/sih2026/speech-generating-device.png";
const BIOSIGNAL_IMAGE = "/Users/kate/Documents/personal/arunya-portfolio/.codex-build/sih2026/biosignal-monitoring.jpg";
const LOGO_BUN = "/Users/kate/Documents/personal/arunya-portfolio/.codex-build/sih2026/logo-bun.svg";
const LOGO_ELYSIA = "/Users/kate/Documents/personal/arunya-portfolio/.codex-build/sih2026/logo-elysia.svg";
const LOGO_NEXT = "/Users/kate/Documents/personal/arunya-portfolio/.codex-build/sih2026/logo-next.svg";
const LOGO_POSTGRES = "/Users/kate/Documents/personal/arunya-portfolio/.codex-build/sih2026/logo-postgresql.svg";
const LOGO_ESPRESSIF = "/Users/kate/Documents/personal/arunya-portfolio/.codex-build/sih2026/logo-espressif.svg";
const LOGO_CPP = "/Users/kate/Documents/personal/arunya-portfolio/.codex-build/sih2026/logo-cpp.svg";
const OUT_DIR = "/Users/kate/Documents/personal/arunya-portfolio/output/sih2026";
const EYE_BYTES = await fs.readFile(EYE_IMAGE);
const DISCORD_BYTES_1 = await fs.readFile(DISCORD_IMAGE_1);
const DISCORD_BYTES_2 = await fs.readFile(DISCORD_IMAGE_2);
const AAC_BYTES = await fs.readFile(AAC_IMAGE);
const SPEECH_BYTES = await fs.readFile(SPEECH_IMAGE);
const BIOSIGNAL_BYTES = await fs.readFile(BIOSIGNAL_IMAGE);
const LOGO_SVGS = {
  bun: await fs.readFile(LOGO_BUN, "utf8"),
  elysia: await fs.readFile(LOGO_ELYSIA, "utf8"),
  next: await fs.readFile(LOGO_NEXT, "utf8"),
  postgres: await fs.readFile(LOGO_POSTGRES, "utf8"),
  esp32: await fs.readFile(LOGO_ESPRESSIF, "utf8"),
  cpp: await fs.readFile(LOGO_CPP, "utf8"),
};

const C = {
  navy: "#16324F",
  blue: "#0B76BC",
  cyan: "#00A6D6",
  pale: "#EAF5FB",
  pale2: "#F4F8FB",
  green: "#1A9A73",
  orange: "#E8842C",
  red: "#C9485B",
  grey: "#5C6B78",
  lightGrey: "#DCE6EC",
  white: "#FFFFFF",
};

async function writeBlob(path, blob) {
  await fs.writeFile(path, new Uint8Array(await blob.arrayBuffer()));
}

function shapeByName(slide, name) {
  return slide.shapes.items.find((shape) => shape.name === name);
}

function setExisting(slide, name, text, style = {}) {
  const shape = shapeByName(slide, name);
  if (!shape) return null;
  shape.text = text;
  shape.text.style = {
    fontSize: 18,
    color: C.navy,
    typeface: "Aptos",
    autoFit: "shrinkText",
    wrap: "square",
    ...style,
  };
  return shape;
}

function addText(slide, name, text, position, style = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    name,
    position,
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text = text;
  shape.text.style = {
    fontSize: 18,
    color: C.navy,
    typeface: "Aptos",
    autoFit: "shrinkText",
    wrap: "square",
    insets: { top: 2, right: 4, bottom: 2, left: 4 },
    ...style,
  };
  return shape;
}

function addBox(slide, name, text, position, { fill = C.pale2, line = C.lightGrey, color = C.navy, fontSize = 17, bold = false, radius = 12, align = "center" } = {}) {
  const shape = slide.shapes.add({
    geometry: "roundRect",
    name,
    position,
    fill,
    line: { style: "solid", fill: line, width: 1.2 },
    borderRadius: radius,
  });
  shape.text = text;
  shape.text.style = {
    fontSize,
    bold,
    color,
    typeface: "Aptos",
    alignment: align,
    verticalAlignment: "middle",
    autoFit: "shrinkText",
    wrap: "square",
    insets: { top: 6, right: 8, bottom: 6, left: 8 },
  };
  return shape;
}

function addArrow(slide, name, x, y, w = 38, h = 24) {
  return slide.shapes.add({
    geometry: "rightArrow",
    name,
    position: { left: x, top: y, width: w, height: h },
    fill: C.blue,
    line: { style: "solid", fill: C.blue, width: 0 },
  });
}

function addDownArrow(slide, name, x, y, w = 24, h = 38) {
  return slide.shapes.add({
    geometry: "downArrow",
    name,
    position: { left: x, top: y, width: w, height: h },
    fill: C.blue,
    line: { style: "solid", fill: C.blue, width: 0 },
  });
}

function addLabel(slide, text, x, y, w, color = C.blue) {
  return addText(slide, `label-${text}-${x}-${y}`, text, { left: x, top: y, width: w, height: 28 }, {
    fontSize: 14,
    bold: true,
    color,
    alignment: "left",
    insets: { top: 0, right: 2, bottom: 0, left: 2 },
  });
}

function addRule(slide, x, y, w, color = C.lightGrey) {
  return slide.shapes.add({
    geometry: "line",
    name: `rule-${x}-${y}`,
    position: { left: x, top: y, width: w, height: 0 },
    line: { style: "solid", fill: color, width: 1 },
  });
}

function addTechLogoStrip(slide, y) {
  const logos = [
    ["bun", "Bun"],
    ["elysia", "ElysiaJS"],
    ["next", "Next.js"],
    ["postgres", "Postgres"],
    ["esp32", "ESP32"],
    ["cpp", "C++"],
  ];
  const left = 62;
  const width = 176;
  const gap = 13;
  logos.forEach(([key, label], i) => {
    const x = left + i * (width + gap);
    addBox(slide, `tech-logo-${key}`, "", { left: x, top: y, width, height: 54 }, { fill: C.white, line: C.lightGrey, fontSize: 13, align: "left" });
    slide.images.add({ svg: LOGO_SVGS[key], alt: `${label} logo`, position: { left: x + 12, top: y + 11, width: 30, height: 30 } });
    addText(slide, `tech-logo-label-${key}`, label, { left: x + 49, top: y + 13, width: width - 57, height: 28 }, { fontSize: 13, bold: true, color: C.navy, alignment: "left", verticalAlignment: "middle", insets: { top: 0, right: 1, bottom: 0, left: 1 } });
  });
}

function addBullets(slide, name, items, position, { fontSize = 17, color = C.navy, bulletColor = C.blue } = {}) {
  const paragraphs = items.map((item) => ({
    bulletCharacter: "•",
    marginLeft: 20,
    indent: -10,
    spaceAfter: 7,
    runs: [{ run: item, textStyle: { color } }],
  }));
  const shape = addText(slide, name, paragraphs, position, {
    fontSize,
    color,
    lineSpacing: 1.08,
    insets: { top: 4, right: 6, bottom: 4, left: 6 },
  });
  // The bullet glyph inherits the paragraph color in Office; keep the accent visible through the section label.
  void bulletColor;
  return shape;
}

function setHeader(slide, header) {
  const explicit = shapeByName(slide, "Title 1");
  if (explicit) {
    explicit.text = header;
    explicit.text.style = { fontSize: 30, bold: true, color: C.navy, typeface: "Aptos", autoFit: "shrinkText" };
  } else {
    setExisting(slide, "Title 7", header, { fontSize: 30, bold: true });
  }
}

function setTeamPill(slide, teamName = "GazeConnect") {
  for (const name of ["Oval 9", "Oval 10", "Oval 11", "Oval 8"]) {
    const shape = shapeByName(slide, name);
    if (shape) {
      shape.position = { left: 24, top: 26, width: 154, height: 85 };
      shape.text = teamName === "GazeConnect Health" ? "GazeConnect\nHealth" : "GazeConnect";
      shape.text.style = { fontSize: 12, bold: true, color: C.blue, typeface: "Aptos", alignment: "center", verticalAlignment: "middle", autoFit: "shrinkText", wrap: "none", insets: { top: 2, right: 2, bottom: 2, left: 2 } };
    }
  }
}

function removeTemplateFooter(slide) {
  const footer = shapeByName(slide, "Footer Placeholder 6");
  if (footer) footer.delete();
}

function titleSlide(p, { psId, psTitle, theme, ideaTitle, titleNote }) {
  const slide = p.slides.getItem(0);
  setExisting(slide, "Subtitle 3", "\nTITLE PAGE", { fontSize: 24, bold: true, color: C.blue });
  setExisting(slide, "TextBox 9", [
    [{ run: "Problem Statement ID – ", textStyle: { bold: true, color: C.blue } }, psId],
    [{ run: "Problem Statement Title – ", textStyle: { bold: true, color: C.blue } }, psTitle],
    [{ run: "Theme – ", textStyle: { bold: true, color: C.blue } }, theme],
    [{ run: "PS Category – ", textStyle: { bold: true, color: C.blue } }, "Hardware"],
    [{ run: "Team ID – ", textStyle: { bold: true, color: C.blue } }, "[SIH Team ID]"],
    [{ run: "Team Name – ", textStyle: { bold: true, color: C.blue } }, "Cracked Nerds"],
    [{ run: "Idea – ", textStyle: { bold: true, color: C.blue } }, ideaTitle],
  ], { fontSize: 18, color: C.navy, lineSpacing: 1.08, insets: { top: 8, right: 8, bottom: 8, left: 8 } });
  setTeamPill(slide);
  addText(slide, "title-note", titleNote, { left: 44, top: 586, width: 1136, height: 34 }, { fontSize: 15, color: C.grey, italic: true, alignment: "center" });
}

function slide2Communication(p) {
  const slide = p.slides.getItem(1);
  setHeader(slide, "IDEA TITLE");
  setTeamPill(slide);
  const old = shapeByName(slide, "TextBox 8");
  if (old) old.delete();
  addLabel(slide, "Problem", 70, 126, 700, C.blue);
  addBullets(slide, "problem-bullets", [
    "People with ALS or severe motor impairment may be unable to speak, type or control devices reliably",
    "Communication can depend on a caregiver or expensive dedicated assistive hardware",
  ], { left: 70, top: 157, width: 630, height: 82 }, { fontSize: 17 });
  addLabel(slide, "Proposed solution", 70, 248, 700, C.green);
  addBullets(slide, "solution-bullets", [
    "An IR webcam and calibrated 2×3 card interface turn eye movement into selectable actions",
    "Cards support speech, text-to-text, direct chat and an AI/RAG voice agent that speaks selected messages on the user’s behalf",
    "The same interface can control appliances and trigger assistance or SOS actions",
  ], { left: 70, top: 279, width: 630, height: 175 }, { fontSize: 16 });
  addLabel(slide, "Standalone system flow", 790, 126, 350, C.blue);
  addBox(slide, "gaze-core-card", "Eye-tracking unit\nIR webcam + IR illumination\npupil detection + calibration", { left: 790, top: 162, width: 370, height: 122 }, { fill: C.pale, line: C.blue, fontSize: 18, bold: true });
  addDownArrow(slide, "layer-arrow", 963, 292, 24, 28);
  addBox(slide, "gaze-connect-card", "GazeConnect interface\n2×3 cards + visual feedback\nmessage / speech / control", { left: 790, top: 330, width: 370, height: 122 }, { fill: "#EAF8F4", line: C.green, fontSize: 18, bold: true });
  addText(slide, "user-value", "User outcome: express needs, speak, contact others, control the room.", { left: 790, top: 480, width: 370, height: 48 }, { fontSize: 16, bold: true, color: C.green, alignment: "center" });
  slide.images.add({ blob: AAC_BYTES, contentType: "image/jpeg", alt: "AAC user using eye gaze", fit: "cover", position: { left: 70, top: 490, width: 170, height: 125 }, geometry: "roundRect", borderRadius: 12 });
  slide.images.add({ blob: SPEECH_BYTES, contentType: "image/png", alt: "Speech-generating device reference", fit: "cover", position: { left: 258, top: 490, width: 170, height: 125 }, geometry: "roundRect", borderRadius: 12 });
  addText(slide, "aac-caption", "Assistive communication references\nEye-gaze access and speech generation", { left: 446, top: 520, width: 240, height: 42 }, { fontSize: 14, color: C.grey, alignment: "left" });
}

function slide3Communication(p) {
  const slide = p.slides.getItem(2);
  setHeader(slide, "TECHNICAL APPROACH");
  setTeamPill(slide);
  const old = shapeByName(slide, "TextBox 8");
  if (old) old.delete();
  addLabel(slide, "Gaze input pipeline", 62, 118, 360, C.blue);
  const boxes = [
    ["IR webcam", 62, "IR filter removed\n+ IR LEDs"],
    ["Pupil detection", 270, "ROI + grayscale\nadaptive threshold"],
    ["Calibration", 478, "ellipse fit\n9-point mapping"],
    ["Selection", 686, "gaze vector\n2×3 card selection"],
  ];
  for (const [name, x, text] of boxes) addBox(slide, `comm-${name}`, text, { left: x, top: 150, width: 174, height: 82 }, { fill: C.pale, line: C.blue, fontSize: 15, bold: true });
  [236, 444, 652].forEach((x, i) => addArrow(slide, `comm-arrow-${i}`, x, 178, 28, 22));
  addLabel(slide, "Motion compensation", 62, 254, 360, C.orange);
  addBox(slide, "imu-box", "ESP32 target + IMU\nyaw / pitch / roll", { left: 62, top: 286, width: 174, height: 76 }, { fill: "#FFF4E8", line: C.orange, fontSize: 15, bold: true });
  addArrow(slide, "imu-arrow", 244, 312, 34, 22);
  addBox(slide, "fusion-box", "MQTT / WebSocket\ncorrection + smoothing", { left: 292, top: 286, width: 174, height: 76 }, { fill: "#FFF4E8", line: C.orange, fontSize: 15, bold: true });
  addArrow(slide, "fusion-arrow", 474, 312, 34, 22);
  addBox(slide, "action-box", "GazeConnect UI\nmessage / speech / AI voice / appliance / SOS", { left: 522, top: 286, width: 338, height: 76 }, { fill: "#EAF8F4", line: C.green, fontSize: 15, bold: true });
  slide.images.add({ blob: EYE_BYTES, contentType: "image/png", alt: "Infrared eye image used for pupil detection", fit: "cover", position: { left: 902, top: 147, width: 296, height: 205 }, geometry: "roundRect", borderRadius: 12 });
  addText(slide, "eye-caption", "Infrared eye image\nPupil region used for gaze estimation", { left: 902, top: 360, width: 296, height: 48 }, { fontSize: 14, color: C.grey, alignment: "center" });
  addRule(slide, 62, 398, 1136);
  addText(slide, "stack-label", "Build stack", { left: 62, top: 414, width: 110, height: 24 }, { fontSize: 14, bold: true, color: C.blue });
  addText(slide, "stack", "C++ / Arduino target • ESP32 + webcam • Bun + ElysiaJS • TypeScript • Next.js app shell • MQTT / WebSocket • PostgreSQL / Drizzle", { left: 170, top: 410, width: 1025, height: 34 }, { fontSize: 15, color: C.navy });
  addTechLogoStrip(slide, 480);
}

function slide4Communication(p) {
  const slide = p.slides.getItem(3);
  setHeader(slide, "FEASIBILITY AND VIABILITY");
  setTeamPill(slide);
  const old = shapeByName(slide, "TextBox 8");
  if (old) old.delete();
  addLabel(slide, "Build feasibility", 62, 116, 650, C.green);
  addBullets(slide, "proof-bullets", [
    "Process the IR webcam feed with ROI, adaptive thresholding, connected components and ellipse fitting",
    "Calibrate gaze to a 2×3 card grid with gaze-based selection and visible feedback",
    "Fuse IMU orientation with gaze vectors to reduce head-motion error and selection drift",
    "Connect selected cards to speech, direct chat, AI/RAG voice calls, appliance control and SOS actions",
  ], { left: 62, top: 148, width: 650, height: 235 }, { fontSize: 16 });
  addLabel(slide, "Risks and mitigations", 770, 116, 390, C.orange);
  const risks = [
    ["Glare / glasses", "IR illumination + adaptive threshold + ROI"],
    ["Head motion", "IMU correction + smoothing + re-calibration"],
    ["False selection", "Gaze-selection confirmation + visual feedback"],
    ["Calibration drift", "Guided 9-point recalibration"],
  ];
  risks.forEach(([r, m], i) => {
    const y = 150 + i * 62;
    addBox(slide, `risk-${i}`, `${r}\n${m}`, { left: 770, top: y, width: 390, height: 50 }, { fill: "#FFF4E8", line: C.orange, fontSize: 14, bold: false, align: "left" });
  });
}

function slide5Communication(p) {
  const slide = p.slides.getItem(4);
  setHeader(slide, "IMPACT AND BENEFITS");
  setTeamPill(slide);
  const old = shapeByName(slide, "TextBox 8");
  if (old) old.delete();
  addText(slide, "impact-lead", "For people who can think and feel but cannot reliably speak or use their hands, GazeConnect turns a small, affordable sensor setup into an expressive communication channel.", { left: 70, top: 120, width: 1130, height: 66 }, { fontSize: 21, bold: true, color: C.navy, alignment: "center" });
  const cards = [
    ["1.", "Autonomy", "Express needs, choices and discomfort without waiting for a caregiver.", C.blue],
    ["2.", "Communication", "Prebuilt cards, text-to-speech, direct chat and AI-assisted voice communication.", C.green],
    ["3.", "Safety", "Appliance control, escalation and visible confirmation reduce uncertainty.", C.orange],
    ["4.", "Accessibility", "Modular webcam + microcontroller design can be adapted to different users.", C.cyan],
  ];
  cards.forEach(([n, title, body, color], i) => {
    const x = 70 + (i % 2) * 570;
    const y = 222 + Math.floor(i / 2) * 140;
    addBox(slide, `impact-card-${i}`, `${n}  ${title}\n${body}`, { left: x, top: y, width: 520, height: 112 }, { fill: C.pale2, line: color, fontSize: 17, bold: true, align: "left" });
  });
  addText(slide, "impact-footer", "Design principle: assistive technology should preserve the user’s agency, privacy and ability to be heard.", { left: 70, top: 520, width: 1130, height: 46 }, { fontSize: 17, italic: true, color: C.grey, alignment: "center" });
}

function slide6Communication(p) {
  const slide = p.slides.getItem(5);
  setHeader(slide, "RESEARCH AND REFERENCES");
  setTeamPill(slide);
  const old = shapeByName(slide, "TextBox 8");
  if (old) old.delete();
  addLabel(slide, "Primary references", 62, 116, 360, C.blue);
  addText(slide, "refs-left", [
    [{ run: "SIH 2026 problem-statement catalogue", textStyle: { bold: true, color: C.navy } }, "\nhttps://www.sih.gov.in/sih2026PS"],
    [{ run: "Prototype evidence", textStyle: { bold: true, color: C.navy } }, "\nEye-tracker build photographs and pupil-detection screenshot"],
    [{ run: "AAC eye-gaze reference image (CC BY-SA 3.0)", textStyle: { bold: true, color: C.navy } }, "\nhttps://commons.wikimedia.org/wiki/File:AAC_user_using_eye_gaze.JPG"],
    [{ run: "Speech-generating device reference (CC BY-SA 4.0)", textStyle: { bold: true, color: C.navy } }, "\nhttps://commons.wikimedia.org/wiki/File:SpeechWatch_from_Gus_Communication_Devices_Inc.png"],
  ], { left: 62, top: 150, width: 540, height: 190 }, { fontSize: 16, color: C.grey, lineSpacing: 1.2 });
  addLabel(slide, "Technical references", 662, 116, 420, C.blue);
  addText(slide, "refs-right", [
    [{ run: "Espressif ESP32 resources", textStyle: { bold: true, color: C.navy } }, "\nhttps://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32/resources.html"],
    [{ run: "Webcam / eye-image prototype evidence", textStyle: { bold: true, color: C.navy } }, "\nAttached pupil-detection screenshot"],
  ], { left: 662, top: 150, width: 540, height: 190 }, { fontSize: 16, color: C.grey, lineSpacing: 1.2 });
  addRule(slide, 62, 362, 1136);
  addLabel(slide, "Team", 62, 382, 180, C.green);
  addText(slide, "team-roster", "Ashwath Soni (Lead / Backend) • Arunya (IoT + Backend) • Tushar Dhingra (Full stack) • Harnoor Singh Arora (Frontend) • Sahil Chhabra (Frontend) • Deepakshi Manhas (UI/UX)", { left: 62, top: 414, width: 1136, height: 70 }, { fontSize: 16, color: C.navy, alignment: "center", lineSpacing: 1.08 });
}

function slide2Health(p) {
  const slide = p.slides.getItem(1);
  setHeader(slide, "IDEA TITLE");
  setTeamPill(slide, "GazeConnect Health");
  const old = shapeByName(slide, "TextBox 8");
  if (old) old.delete();
  addLabel(slide, "Problem", 70, 126, 760, C.blue);
  addBullets(slide, "health-problem-bullets", [
    "Bedbound or high-risk patients may be unable to report symptoms, give consent or call for help",
    "Physiological signals, gaze input and environmental context are often monitored separately",
  ], { left: 70, top: 157, width: 650, height: 82 }, { fontSize: 16 });
  addLabel(slide, "Proposed solution", 70, 248, 760, C.green);
  addBullets(slide, "health-bullets", [
    "Gaze input lets the patient report symptoms, consent, communicate and trigger SOS without speech or hand control",
    "MAX30101 pulse / SpO₂ trends and an AD8232 module with 3 chest electrodes provide local ECG waveform data",
    "IMU quality flags, local warning logic and a consent-controlled caregiver / family view connect the signals into one support system",
  ], { left: 70, top: 279, width: 650, height: 175 }, { fontSize: 15 });
  addLabel(slide, "Hazard-aware health support", 790, 126, 370, C.orange);
  addBox(slide, "heat-card", "Heat wave\nTemperature + humidity context\n→ hydration / risk prompts", { left: 790, top: 160, width: 370, height: 90 }, { fill: "#FFF4E8", line: C.orange, fontSize: 16, bold: true });
  addBox(slide, "pollution-card", "Pollution event\nAQI / PM2.5 input\n→ respiratory caution prompt", { left: 790, top: 266, width: 370, height: 90 }, { fill: C.pale, line: C.blue, fontSize: 16, bold: true });
  addBox(slide, "flood-card", "External emergency\nRemote caregiver / family alert\n→ offline SOS if network drops", { left: 790, top: 372, width: 370, height: 90 }, { fill: "#EAF8F4", line: C.green, fontSize: 16, bold: true });
  slide.images.add({ blob: BIOSIGNAL_BYTES, contentType: "image/jpeg", alt: "Wearable biosignal monitoring setup with ECG and SpO2 traces", fit: "cover", position: { left: 70, top: 490, width: 270, height: 125 }, geometry: "roundRect", borderRadius: 12 });
  addText(slide, "biosignal-caption", "Illustrative biosignal setup\nECG and SpO₂ monitoring inform local health trends", { left: 360, top: 520, width: 350, height: 42 }, { fontSize: 14, color: C.grey, alignment: "left" });
}

function slide3Health(p) {
  const slide = p.slides.getItem(2);
  setHeader(slide, "TECHNICAL APPROACH");
  setTeamPill(slide, "GazeConnect Health");
  const old = shapeByName(slide, "TextBox 8");
  if (old) old.delete();
  addLabel(slide, "Privacy-preserving edge pipeline", 62, 116, 520, C.blue);
  addBox(slide, "health-sensors", "Patient sensors\nMAX30101 (I²C) • AD8232 + 3 electrodes\nECG waveform • IMU: motion / placement quality", { left: 62, top: 150, width: 244, height: 118 }, { fill: C.pale, line: C.blue, fontSize: 15, bold: true, align: "left" });
  addArrow(slide, "health-a1", 316, 196, 34, 24);
  addBox(slide, "edge-box", "ESP32 / local host\nfilter + artifact rejection\nlocal buffer + consent gate", { left: 354, top: 150, width: 244, height: 118 }, { fill: "#EAF8F4", line: C.green, fontSize: 15, bold: true, align: "left" });
  addArrow(slide, "health-a2", 608, 196, 34, 24);
  addBox(slide, "risk-box", "Local warning engine\nrules / compact model\ntrend + confidence + alert", { left: 646, top: 150, width: 244, height: 118 }, { fill: "#FFF4E8", line: C.orange, fontSize: 15, bold: true, align: "left" });
  addArrow(slide, "health-a3", 900, 196, 34, 24);
  addBox(slide, "care-box", "GazeConnect Health\n2×3 UI • graphs • report\ncaregiver / family portal", { left: 938, top: 150, width: 260, height: 118 }, { fill: C.pale, line: C.blue, fontSize: 15, bold: true, align: "left" });
  addLabel(slide, "Gaze interaction and context", 62, 304, 430, C.blue);
  addBox(slide, "gaze-health-box", "IR webcam → gaze input module\n9-point calibration + IMU fusion\n“I need help” / consent / communication", { left: 62, top: 336, width: 420, height: 92 }, { fill: C.pale2, line: C.blue, fontSize: 16, bold: true, align: "left" });
  addBox(slide, "environment-box", "External event context (planned)\nTemp / humidity • AQI / PM2.5\nEmergency alert to caregiver / family • offline SOS", { left: 514, top: 336, width: 364, height: 92 }, { fill: "#FFF4E8", line: C.orange, fontSize: 16, bold: true, align: "left" });
  slide.images.add({ blob: DISCORD_BYTES_1, contentType: "image/jpeg", alt: "Physical eye-tracker camera and ESP32-CAM attachment", fit: "cover", position: { left: 910, top: 336, width: 138, height: 92 }, geometry: "roundRect", borderRadius: 10 });
  slide.images.add({ blob: DISCORD_BYTES_2, contentType: "image/jpeg", alt: "Close-up of eye-tracker camera, LED and ESP32-CAM assembly", fit: "cover", position: { left: 1060, top: 336, width: 138, height: 92 }, geometry: "roundRect", borderRadius: 10 });
  addText(slide, "module-caption", "Eye camera + ESP32-CAM attachment", { left: 910, top: 432, width: 288, height: 18 }, { fontSize: 12, color: C.grey, alignment: "center", insets: { top: 0, right: 2, bottom: 0, left: 2 } });
  addRule(slide, 62, 452, 1136);
  addText(slide, "health-stack", "C++ / Arduino target • ESP32 • Bun + ElysiaJS • TypeScript • Next.js app shell • MQTT / WebSocket • PostgreSQL / Drizzle", { left: 62, top: 470, width: 1136, height: 34 }, { fontSize: 15, color: C.navy, alignment: "center" });
  addTechLogoStrip(slide, 520);
}

function slide4Health(p) {
  const slide = p.slides.getItem(3);
  setHeader(slide, "FEASIBILITY AND VIABILITY");
  setTeamPill(slide, "GazeConnect Health");
  const old = shapeByName(slide, "TextBox 8");
  if (old) old.delete();
  addLabel(slide, "Build feasibility", 62, 116, 520, C.green);
  addBullets(slide, "health-proof", [
    "Build camera-based gaze selection, 9-point calibration, gyro fusion and confidence-aware feedback",
    "Add MAX30101 / AD8232 sensor drivers, local signal-quality checks and motion-artifact rejection",
    "Build trend storage, report generation, caregiver access and two-way communication flows",
    "Validate alerts with repeated windows and user / caregiver confirmation; never present a diagnosis",
  ], { left: 62, top: 148, width: 650, height: 240 }, { fontSize: 15 });
  addLabel(slide, "Risks and mitigations", 770, 116, 390, C.orange);
  const risks = [
    ["Motion artefacts", "IMU quality flag + rejection / smoothing"],
    ["Sensor contact", "Placement guidance + signal-quality feedback"],
    ["False alarms", "Repeated-window checks + confidence + confirmation"],
    ["Low connectivity", "Encrypted local buffer + offline SOS retry"],
  ];
  risks.forEach(([r, m], i) => addBox(slide, `health-risk-${i}`, `${r}\n${m}`, { left: 770, top: 150 + i * 62, width: 390, height: 50 }, { fill: "#FFF4E8", line: C.orange, fontSize: 14, align: "left" }));
  addBox(slide, "privacy-boundary", "Privacy boundary\nLocal preprocessing + consent-first sync\nCaregiver access is explicit, role-based and auditable", { left: 62, top: 432, width: 1098, height: 82 }, { fill: C.pale, line: C.blue, fontSize: 16, bold: true, align: "left" });
}

function slide5Health(p) {
  const slide = p.slides.getItem(4);
  setHeader(slide, "IMPACT AND BENEFITS");
  setTeamPill(slide, "GazeConnect Health");
  const old = shapeByName(slide, "TextBox 8");
  if (old) old.delete();
  addText(slide, "health-impact-lead", "One interface connects the patient, the caregiver and the surrounding risk context—without requiring speech or constant cloud connectivity.", { left: 70, top: 120, width: 1130, height: 66 }, { fontSize: 21, bold: true, color: C.navy, alignment: "center" });
  const cards = [
    ["Patient", "Communicate symptoms, consent and urgent needs through gaze; receive spoken responses.", C.blue],
    ["Caregiver", "See trends, reports and confidence-aware alerts; respond directly to the patient.", C.green],
    ["Resilience", "Remote emergency alerts plus local buffering keep support available during external emergencies and connectivity loss.", C.orange],
    ["Trust", "Privacy-preserving processing, explicit sharing and no-diagnosis guardrails.", C.cyan],
  ];
  cards.forEach(([title, body, color], i) => {
    const x = 70 + (i % 2) * 570;
    const y = 222 + Math.floor(i / 2) * 140;
    addBox(slide, `health-impact-${i}`, `${title}\n${body}`, { left: x, top: y, width: 520, height: 112 }, { fill: C.pale2, line: color, fontSize: 17, bold: true, align: "left" });
  });
  addText(slide, "health-impact-footer", "Outcome: a patient-controlled communication channel plus continuous, privacy-first health support.", { left: 70, top: 520, width: 1130, height: 46 }, { fontSize: 17, italic: true, color: C.grey, alignment: "center" });
}

function slide6Health(p) {
  const slide = p.slides.getItem(5);
  setHeader(slide, "RESEARCH AND REFERENCES");
  setTeamPill(slide, "GazeConnect Health");
  const old = shapeByName(slide, "TextBox 8");
  if (old) old.delete();
  addLabel(slide, "SIH + product references", 62, 116, 420, C.blue);
  addText(slide, "health-refs-left", [
    [{ run: "SIH 2026 catalogue / PS 26181", textStyle: { bold: true, color: C.navy } }, "\nhttps://www.sih.gov.in/sih2026PS"],
    [{ run: "Prototype evidence", textStyle: { bold: true, color: C.navy } }, "\nEye-tracker build photographs and pupil-detection screenshot"],
    [{ run: "Biosignal monitoring reference (open-access PMC article)", textStyle: { bold: true, color: C.navy } }, "\nhttps://pmc.ncbi.nlm.nih.gov/articles/PMC8213464/"],
  ], { left: 62, top: 150, width: 540, height: 180 }, { fontSize: 15, color: C.grey, lineSpacing: 1.18 });
  addLabel(slide, "Sensor / platform references", 662, 116, 500, C.blue);
  addText(slide, "health-refs-right", [
    [{ run: "MAX30101 pulse-ox / heart-rate sensor", textStyle: { bold: true, color: C.navy } }, "\nhttps://www.analog.com/en/products/MAX30101.html"],
    [{ run: "AD8232 ECG module + 3-electrode interface", textStyle: { bold: true, color: C.navy } }, "\nhttps://www.analog.com/en/products/AD8232.html"],
    [{ run: "ESP32 resources", textStyle: { bold: true, color: C.navy } }, "\nhttps://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32/resources.html"],
  ], { left: 662, top: 150, width: 540, height: 180 }, { fontSize: 15, color: C.grey, lineSpacing: 1.18 });
  addRule(slide, 62, 350, 1136);
  addLabel(slide, "Team", 62, 438, 180, C.green);
  addText(slide, "health-team-roster", "Ashwath Soni (Lead / Backend) • Arunya (IoT + Backend) • Tushar Dhingra (Full stack) • Harnoor Singh Arora (Frontend) • Sahil Chhabra (Frontend) • Deepakshi Manhas (UI/UX)", { left: 62, top: 468, width: 1136, height: 66 }, { fontSize: 15, color: C.navy, alignment: "center", lineSpacing: 1.06 });
}

async function buildDeck(kind) {
  const p = await PresentationFile.importPptx(await FileBlob.load(TEMPLATE));
  p.slides.remove(6);
  for (const slide of p.slides.items) removeTemplateFooter(slide);
  for (const slide of p.slides.items) removeTemplateFooter(slide);
  if (kind === "communication") {
    titleSlide(p, { psId: "SIH26215", psTitle: "AICTE Student Innovation – MedTech/BioTech/HealthTech Hardware", theme: "MedTech / BioTech / HealthTech", ideaTitle: "GazeConnect: Gaze-Based Assistive Communication System", titleNote: "Problem: ALS users may lose speech and hand control • Solution: gaze-based communication, AI-assisted calls and appliance control." });
    slide2Communication(p);
    slide3Communication(p);
    slide4Communication(p);
    slide5Communication(p);
    slide6Communication(p);
  } else {
    titleSlide(p, { psId: "SIH26181", psTitle: "Secure, AI-powered Personal Health Companion", theme: "MedTech / BioTech / HealthTech", ideaTitle: "GazeConnect Health: Gaze-Accessible Personal Health Companion", titleNote: "Problem: At-risk patients may be unable to report symptoms or receive timely support • Solution: gaze and sensor-based, privacy-preserving early warning." });
    slide2Health(p);
    slide3Health(p);
    slide4Health(p);
    slide5Health(p);
    slide6Health(p);
  }
  const prefix = kind === "communication" ? "SIH26215-GazeConnect" : "SIH26181-GazeConnect-Health";
  for (const slide of p.slides.items) {
    const png = await p.export({ slide, format: "png", scale: 1 });
    await writeBlob(`${OUT_DIR}/${prefix}-slide-${String(slide.index + 1).padStart(2, "0")}.png`, png);
  }
  const montage = await p.export({ format: "webp", montage: true, scale: 1 });
  await writeBlob(`${OUT_DIR}/${prefix}-montage.webp`, montage);
  const pptx = await PresentationFile.exportPptx(p);
  await pptx.save(`${OUT_DIR}/${prefix}.pptx`);
  return { p, prefix };
}

await fs.mkdir(OUT_DIR, { recursive: true });
await buildDeck("communication");
await buildDeck("health");
console.log("Built SIH26215 and SIH26181 decks.");
