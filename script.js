const lessonInput = document.getElementById("lessonInput");
const mathsSourceInput = document.getElementById("mathsSourceInput");
const translateMathsBtn = document.getElementById("translateMathsBtn");
const clearMathsSourceBtn = document.getElementById("clearMathsSourceBtn");
const mathsAutoTranslateToggle = document.getElementById("mathsAutoTranslateToggle");
const mathsTranslateProgress = document.getElementById("mathsTranslateProgress");
const mathsTranslateProgressBar = document.getElementById("mathsTranslateProgressBar");
const mathsTranslateProgressLabel = document.getElementById("mathsTranslateProgressLabel");
const mathsTranslationPreview = document.getElementById("mathsTranslationPreview");
const mathsTranslatorStatus = document.getElementById("mathsTranslatorStatus");
const placeValueNumberInput = document.getElementById("placeValueNumberInput");
const placeValueSystemSelect = document.getElementById("placeValueSystemSelect");
const applyPlaceValueTableBtn = document.getElementById("applyPlaceValueTableBtn");
const showPlaceValueTableBtn = document.getElementById("showPlaceValueTableBtn");
const placeValueToolStatus = document.getElementById("placeValueToolStatus");
const workflowStepButtons = Array.from(document.querySelectorAll("[data-workflow-target]"));
const presentationTemplateInputs = Array.from(document.querySelectorAll('input[name="presentationTemplate"]'));
const presentationTemplateStatus = document.getElementById("presentationTemplateStatus");
const outcomesTitleInput = document.getElementById("outcomesTitleInput");
const saveOutcomesTitleBtn = document.getElementById("saveOutcomesTitleBtn");
const outcomesTitleStatus = document.getElementById("outcomesTitleStatus");
const inputPanel = document.getElementById("inputPanel");
const stagePanel = document.getElementById("stagePanel");
const themeSelect = document.getElementById("themeSelect");
const themeToggle = document.getElementById("themeToggle");
const themeModeLabel = document.getElementById("themeModeLabel");
const textColorSelect = document.getElementById("textColorSelect");
const boldToggleBtn = document.getElementById("boldToggleBtn");
const italicToggleBtn = document.getElementById("italicToggleBtn");
const underlineToggleBtn = document.getElementById("underlineToggleBtn");
const caseOriginalBtn = document.getElementById("caseOriginalBtn");
const caseLowerBtn = document.getElementById("caseLowerBtn");
const caseTitleBtn = document.getElementById("caseTitleBtn");
const caseUpperBtn = document.getElementById("caseUpperBtn");
const insertSpaceBtn = document.getElementById("insertSpaceBtn");
const insertNewLineBtn = document.getElementById("insertNewLineBtn");
const insertTabBtn = document.getElementById("insertTabBtn");
const insertBulletBtn = document.getElementById("insertBulletBtn");
const insertArrowBtn = document.getElementById("insertArrowBtn");
const insertMultiplyBtn = document.getElementById("insertMultiplyBtn");
const insertDivideBtn = document.getElementById("insertDivideBtn");
const insertLessEqualBtn = document.getElementById("insertLessEqualBtn");
const insertGreaterEqualBtn = document.getElementById("insertGreaterEqualBtn");
const insertRupeeBtn = document.getElementById("insertRupeeBtn");
const spacingToolsStatus = document.getElementById("spacingToolsStatus");
const selectionStyleCard = document.getElementById("selectionStyleCard");
const selectedKeywordLabel = document.getElementById("selectedKeywordLabel");
const selectedTextColorSelect = document.getElementById("selectedTextColorSelect");
const selectedBoldToggleBtn = document.getElementById("selectedBoldToggleBtn");
const selectedItalicToggleBtn = document.getElementById("selectedItalicToggleBtn");
const selectedUnderlineToggleBtn = document.getElementById("selectedUnderlineToggleBtn");
const applySelectedStyleBtn = document.getElementById("applySelectedStyleBtn");
const clearSelectedStyleBtn = document.getElementById("clearSelectedStyleBtn");
const selectionStyleStatus = document.getElementById("selectionStyleStatus");
const scenePromptInput = document.getElementById("scenePromptInput");
const sceneVfxSelect = document.getElementById("sceneVfxSelect");
const sceneMusicModeSelect = document.getElementById("sceneMusicModeSelect");
const exportQualitySelect = document.getElementById("exportQualitySelect");
const sceneImageInput = document.getElementById("sceneImageInput");
const sceneImagePreviewList = document.getElementById("sceneImagePreviewList");
const sceneMusicInput = document.getElementById("sceneMusicInput");
const sceneMusicPreview = document.getElementById("sceneMusicPreview");
const sceneMusicStatus = document.getElementById("sceneMusicStatus");
const generateSceneBtn = document.getElementById("generateSceneBtn");
const generateSceneShowBtn = document.getElementById("generateSceneShowBtn");
const clearSceneBtn = document.getElementById("clearSceneBtn");
const sceneGenerationProgress = document.getElementById("sceneGenerationProgress");
const sceneGenerationProgressBar = document.getElementById("sceneGenerationProgressBar");
const sceneGenerationProgressLabel = document.getElementById("sceneGenerationProgressLabel");
const sceneGeneratorStatus = document.getElementById("sceneGeneratorStatus");
const scenePreviewStage = document.getElementById("scenePreviewStage");
const scenePreviewLabel = document.getElementById("scenePreviewLabel");
const sceneThemeChip = document.getElementById("sceneThemeChip");
const sceneVfxChip = document.getElementById("sceneVfxChip");
const sceneMusicChip = document.getElementById("sceneMusicChip");
const sceneExportChip = document.getElementById("sceneExportChip");
const scenePreviewImage = document.getElementById("scenePreviewImage");
const scenePreviewHint = document.getElementById("scenePreviewHint");
const showScreenBtn = document.getElementById("showScreenBtn");
const editBtn = document.getElementById("editBtn");
const playBtn = document.getElementById("playBtn");
const playbackPercentIndicator = document.getElementById("playbackPercentIndicator");
const taskPercentIndicator = document.getElementById("taskPercentIndicator");
const pauseStageBtn = document.getElementById("pauseStageBtn");
const stopStageBtn = document.getElementById("stopStageBtn");
const stageImageUploadBtn = document.getElementById("stageImageUploadBtn");
const stageVideoUploadBtn = document.getElementById("stageVideoUploadBtn");
const stageImageCutoutBtn = document.getElementById("stageImageCutoutBtn");
const stageImageRestoreBtn = document.getElementById("stageImageRestoreBtn");
const stageVideoCutoutBtn = document.getElementById("stageVideoCutoutBtn");
const stageVideoRestoreBtn = document.getElementById("stageVideoRestoreBtn");
const stageAutoTeachBtn = document.getElementById("stageAutoTeachBtn");
const stageAutoBRollBtn = document.getElementById("stageAutoBRollBtn");
const stageRemoveImageBtn = document.getElementById("stageRemoveImageBtn");
const stageClearImagesBtn = document.getElementById("stageClearImagesBtn");
const stageRemoveVideoBtn = document.getElementById("stageRemoveVideoBtn");
const stageMediaStatus = document.getElementById("stageMediaStatus");
const prevPageBtn = document.getElementById("prevPageBtn");
const nextPageBtn = document.getElementById("nextPageBtn");
const pageIndicator = document.getElementById("pageIndicator");
const zoomOutBtn = document.getElementById("zoomOutBtn");
const zoomInBtn = document.getElementById("zoomInBtn");
const zoomValue = document.getElementById("zoomValue");
const fontDecreaseBtn = document.getElementById("fontDecreaseBtn");
const fontIncreaseBtn = document.getElementById("fontIncreaseBtn");
const fontValue = document.getElementById("fontValue");
const downloadBtn = document.getElementById("downloadBtn");
const downloadPdfContextBtn = document.getElementById("downloadPdfContextBtn");
const stageBoldBtn = document.getElementById("stageBoldBtn");
const stageItalicBtn = document.getElementById("stageItalicBtn");
const stageUnderlineBtn = document.getElementById("stageUnderlineBtn");
const stageTimelineCard = document.getElementById("stageTimelineCard");
const stageTimelineMeta = document.getElementById("stageTimelineMeta");
const stageModeBadge = document.getElementById("stageModeBadge");
const stageTimelineInput = document.getElementById("stageTimelineInput");
const stageCurrentTime = document.getElementById("stageCurrentTime");
const stageDuration = document.getElementById("stageDuration");
const seekBackwardBtn = document.getElementById("seekBackwardBtn");
const seekForwardBtn = document.getElementById("seekForwardBtn");
const playbackSpeedSelect = document.getElementById("playbackSpeedSelect");
const stagePlaybackSpeedSelect = document.getElementById("stagePlaybackSpeedSelect");
const stageToolbarGroups = Array.from(document.querySelectorAll(".stage-actions .stage-toolbar-group"));
const statusText = document.getElementById("statusText");
const imageInput = document.getElementById("imageInput");
const imageCutoutStatus = document.getElementById("imageCutoutStatus");
const cutoutToleranceInput = document.getElementById("cutoutToleranceInput");
const cutoutToleranceValue = document.getElementById("cutoutToleranceValue");
const cutoutFeatherInput = document.getElementById("cutoutFeatherInput");
const cutoutFeatherValue = document.getElementById("cutoutFeatherValue");
const cutoutSpillInput = document.getElementById("cutoutSpillInput");
const cutoutSpillValue = document.getElementById("cutoutSpillValue");
const cutoutScreenBlendInput = document.getElementById("cutoutScreenBlendInput");
const cutoutScreenBlendValue = document.getElementById("cutoutScreenBlendValue");
const cutoutControlsStatus = document.getElementById("cutoutControlsStatus");
const imagePreviewList = document.getElementById("imagePreviewList");
const introClipEnabled = document.getElementById("introClipEnabled");
const introClipStatus = document.getElementById("introClipStatus");

const proCaptionsEnabled = document.getElementById("proCaptionsEnabled");
const proAnimationsEnabled = document.getElementById("proAnimationsEnabled");
const proQuizEnabled = document.getElementById("proQuizEnabled");
const proDuckingEnabled = document.getElementById("proDuckingEnabled");

const videoInput = document.getElementById("videoInput");
const clearVideoBtn = document.getElementById("clearVideoBtn");
const videoPreview = document.getElementById("videoPreview");
const videoPreviewList = document.getElementById("videoPreviewList");
const videoStatus = document.getElementById("videoStatus");
const startServersBtn = document.getElementById("startServersBtn");
const copyStartAllBtn = document.getElementById("copyStartAllBtn");
const checkServersBtn = document.getElementById("checkServersBtn");
const serverControlsStatus = document.getElementById("serverControlsStatus");
const narrationHealthStatus = document.getElementById("narrationHealthStatus");
const anjaliCloneHealthStatus = document.getElementById("anjaliCloneHealthStatus");
const transcribeHealthStatus = document.getElementById("transcribeHealthStatus");
const videoExportHealthStatus = document.getElementById("videoExportHealthStatus");
const ollamaHealthStatus = document.getElementById("ollamaHealthStatus");
const dictateBtn = document.getElementById("dictateBtn");
const stopDictateBtn = document.getElementById("stopDictateBtn");
const previewTextBtn = document.getElementById("previewTextBtn");
const stopPreviewBtn = document.getElementById("stopPreviewBtn");
const previewVoiceChooser = document.getElementById("previewVoiceChooser");
const previewMaleBtn = document.getElementById("previewMaleBtn");
const previewFemaleBtn = document.getElementById("previewFemaleBtn");
const previewIndianFemaleBtn = document.getElementById("previewIndianFemaleBtn");
const previewFreshBtn = document.getElementById("previewFreshBtn");
const previewAnjaliBtn = document.getElementById("previewAnjaliBtn");
const slideVoiceSelect = document.getElementById("slideVoiceSelect");
const speechToolsStatus = document.getElementById("speechToolsStatus");
const loadMathsNumbersBtn = document.getElementById("loadMathsNumbersBtn");
const loadMathsOperationsBtn = document.getElementById("loadMathsOperationsBtn");
const loadMathsTablesBtn = document.getElementById("loadMathsTablesBtn");
const loadMathsSumsBtn = document.getElementById("loadMathsSumsBtn");
const loadMathsPronunciationBtn = document.getElementById("loadMathsPronunciationBtn");
const loadTable2Btn = document.getElementById("loadTable2Btn");
const loadTable3Btn = document.getElementById("loadTable3Btn");
const loadTable4Btn = document.getElementById("loadTable4Btn");
const loadTable5Btn = document.getElementById("loadTable5Btn");
const loadTable10Btn = document.getElementById("loadTable10Btn");
const loadTableComboBtn = document.getElementById("loadTableComboBtn");
const anjaliSampleAudio = document.getElementById("anjaliSampleAudio");
const useAnjaliSampleBtn = document.getElementById("useAnjaliSampleBtn");
const mathsHelperStatus = document.getElementById("mathsHelperStatus");
const pdfInput = document.getElementById("pdfInput");
const pdfShowBtn = document.getElementById("pdfShowBtn");
const pdfPresentBtn = document.getElementById("pdfPresentBtn");
const pdfSelectAllBtn = document.getElementById("pdfSelectAllBtn");
const pdfClearSelectionBtn = document.getElementById("pdfClearSelectionBtn");
const clearPdfBtn = document.getElementById("clearPdfBtn");
const pdfProgress = document.getElementById("pdfProgress");
const pdfProgressBar = document.getElementById("pdfProgressBar");
const pdfProgressLabel = document.getElementById("pdfProgressLabel");
const pdfStatus = document.getElementById("pdfStatus");
const pdfMeta = document.getElementById("pdfMeta");
const pdfPageSelectionSummary = document.getElementById("pdfPageSelectionSummary");
const pdfPageList = document.getElementById("pdfPageList");
const pdfPreviewList = document.getElementById("pdfPreviewList");
const transcribeAudioInput = document.getElementById("transcribeAudioInput");
const submitTranscribeBtn = document.getElementById("submitTranscribeBtn");
const transcribeProgress = document.getElementById("transcribeProgress");
const transcribeProgressBar = document.getElementById("transcribeProgressBar");
const transcribeProgressLabel = document.getElementById("transcribeProgressLabel");
const transcribeStatus = document.getElementById("transcribeStatus");
const audioInput = document.getElementById("audioInput");
const audioStatus = document.getElementById("audioStatus");
const audioPreview = document.getElementById("audioPreview");
const recordBtn = document.getElementById("recordBtn");
const stopRecordBtn = document.getElementById("stopRecordBtn");
const clearAudioBtn = document.getElementById("clearAudioBtn");
const loadAnjaliNarrationBtn = document.getElementById("loadAnjaliNarrationBtn");
const downloadAnjaliBtn = document.getElementById("downloadAnjaliBtn");
const downloadMaleBtn = document.getElementById("downloadMaleBtn");
const downloadFemaleBtn = document.getElementById("downloadFemaleBtn");
const downloadIndianFemaleBtn = document.getElementById("downloadIndianFemaleBtn");
const downloadFreshBtn = document.getElementById("downloadFreshBtn");
const narrationGenStatus = document.getElementById("narrationGenStatus");
const narrationLiveIndicator = document.getElementById("narrationLiveIndicator");
const narrationLiveProgressFill = document.getElementById("narrationLiveProgressFill");
const narrationLiveProgressLabel = document.getElementById("narrationLiveProgressLabel");
const previewCanvas = document.getElementById("previewCanvas");
let canvas = previewCanvas;
let ctx = canvas.getContext("2d");
applyHighQualityImageRendering(ctx);
const stageLogoImage = document.getElementById("stageLogoImage");
const THEME_STORAGE_KEY = "learning-outcomes-theme";
const PRESENTATION_TEMPLATE_STORAGE_KEY = "learning-outcomes-presentation-template";
const OUTCOMES_TITLE_STORAGE_KEY = "learning-outcomes-template-title";
const VIDEO_EXPORT_HEALTH_TIMEOUT_MS = 12000;
const VIDEO_EXPORT_HEALTH_GRACE_MS = 45000;
const MAX_IMAGE_UPLOADS = 12;
const SLIDE_IMAGES_PER_PAGE = 4;
const LOGO_SOURCE_BOUNDS = {
  x: 36,
  y: 19,
  width: 656,
  height: 208
};
const LOGO_WIDTH_COMPRESSION = 0.94;
const PREVIEW_ZOOM_MIN = 0.8;
const PREVIEW_ZOOM_MAX = 1.6;
const PREVIEW_ZOOM_STEP = 0.1;
const FONT_SCALE_MIN = 0.8;
const FONT_SCALE_MAX = 1.6;
const FONT_SCALE_STEP = 0.1;
const PDF_JS_FILE = "pdf.min.js";
const PDF_JS_WORKER_FILE = "pdf.worker.min.js";
const PDF_RENDER_SCALE_MIN = 1.6;
const PDF_RENDER_SCALE_MAX = 3.2;
const PDF_RENDER_TARGET_MAX_WIDTH_PX = 2200;
const PDF_RENDER_TARGET_MAX_HEIGHT_PX = 2800;
const PDF_STAGE_SEEK_STEP_MS = 5000;
const PDF_FACE_MASK_PADDING_X = 1.2;
const PDF_FACE_MASK_PADDING_TOP = 1.4;
const PDF_FACE_MASK_PADDING_BOTTOM = 3.4;
const PDF_FACE_MASK_MIN_SIZE = 28;
const PDF_EXAMPLE_IMAGE_MAX_PER_PAGE = 4;
const PDF_EXAMPLE_IMAGE_MIN_WIDTH_PX = 180;
const PDF_EXAMPLE_IMAGE_MIN_HEIGHT_PX = 110;
const PDF_CLIPBOARD_MARKER_ATTRIBUTE = "data-maths-teacher-pdf-copy";
const MUX_PACKAGE_MAGIC = "LOMUX1";
const STAGE_VIDEO_MAX_DIMENSION = 1280;
const STAGE_VIDEO_CUTOUT_TOLERANCE = 66;
const STAGE_VIDEO_EDGE_FEATHER = 22;
const DEFAULT_INTRO_VIDEO_FILE = "default-intro.mp4";
const ANJALI_SAMPLE_AUDIO_FILE = "voice-preview-anjali.mp3";
const EXPORT_NARRATION_VOICE = "anjali";
const PRESENTATION_TEMPLATE_CLASSIC = "classic";
const PRESENTATION_TEMPLATE_OUTCOMES = "learning-outcomes";
// Central classroom-voice tuning keeps pronunciation behavior easy to adjust later.
const NARRATION_STYLE_PROMPT = "Speak in a natural Indian female teacher voice with clear Indian English pronunciation. Pronounce every word, number, unit, and maths symbol carefully. Keep the accent Indian, warm, and classroom-ready. Use a calm teaching pace, clear pauses, and highly intelligible school pronunciation. Avoid foreign accent drift, rushed speech, swallowed syllables, and casual delivery.";
const NARRATION_STYLE_CONFIG = Object.freeze({
  locale: "en-IN",
  accent: "indian-female-english",
  pacing: "calm-slower-classroom",
  pronunciationMode: "strict-maths-teacher",
  stylePrompt: NARRATION_STYLE_PROMPT
});
const ANJALI_TTS_PROFILE = Object.freeze({
  voiceId: "anjali",
  gender: "female",
  locale: "en-IN",
  accent: "indian",
  style: "soft-natural-classroom",
  pronunciationMode: NARRATION_STYLE_CONFIG.pronunciationMode,
  stylePrompt: NARRATION_STYLE_CONFIG.stylePrompt
});
const ANJALI_GENERATION_OPTIONS = Object.freeze({
  repetitionPenalty: 1.12,
  topP: 0.88,
  temperature: 0.58,
  topK: 64,
  cfgWeight: 0,
  exaggeration: 0,
  minP: 0,
  normLoudness: true
});
const STAGE_LEFT_CONTENT_GAP_PX = 132;
const STAGE_RIGHT_CLEAR_GAP_PX = 380;
const STAGE_TEXT_SIDE_MARGIN_PX = 64;
const STAGE_TEXT_TOP_MARGIN_PX = 32;
const STAGE_TEXT_BOTTOM_MARGIN_PX = 42;
const STAGE_IMAGE_WORKSPACE_PADDING_PX = 34;
const STAGE_IMAGE_WORKSPACE_TOP_PX = 18;
const STAGE_IMAGE_WORKSPACE_BOTTOM_PX = 20;
const STAGE_PDF_IMAGE_STRIP_WIDTH_PX = 320;
const STAGE_PDF_IMAGE_STRIP_GAP_PX = 18;
const STAGE_IMAGE_MIN_WIDTH_PX = 72;
const STAGE_IMAGE_MIN_HEIGHT_PX = 72;
const STAGE_IMAGE_HANDLE_SIZE_PX = 16;
const NARRATION_CHUNK_MAX_LENGTH = 560;
const NARRATION_CHUNK_THRESHOLD = 1800;
const ANJALI_NARRATION_CHUNK_MAX_LENGTH = 220;
const ANJALI_NARRATION_CHUNK_THRESHOLD = 260;
const DEFAULT_STAGE_PLAYBACK_RATE = 1;
const EXPORT_RENDER_SPEED_MULTIPLIER = 1;
const MAX_EXPORT_CAPTURE_FPS = 72;
const LONG_EXPORT_THRESHOLD_MS = 5 * 60 * 1000;
const VERY_LONG_EXPORT_THRESHOLD_MS = 15 * 60 * 1000;
const MUX_CHUNK_UPLOAD_THRESHOLD_BYTES = 96 * 1024 * 1024;
const MUX_CHUNK_UPLOAD_SIZE_BYTES = 8 * 1024 * 1024;
const STRICT_INTER_WORD_PAUSE_MS = 400;
const STRICT_SENTENCE_PAUSE_MS = 800;
const STRICT_SOFT_SENTENCE_PAUSE_MS = 520;
const STRICT_HEADING_PAUSE_MS = 1100;
const STRICT_SCENE_END_BUFFER_MS = 1500;
const STRICT_AUTOPLAY_RECOVERY_MS = 1000;
const STRICT_VOICE_VOLUME = 0.85;
const STRICT_BACKGROUND_MUSIC_VOLUME = 0.2;
const LIVE_SCENE_RENDER_FPS = 24;
const EXPORT_SCENE_RENDER_FPS = 12;
const SCENE_RENDER_MOUTH_DELTA = 0.035;
const NARRATION_CHUNK_JOIN_GAP_MS = 0;
const NARRATION_CHUNK_FADE_MS = 32;
const SPEECH_SYNC_REVEAL_START = 0.16;
const SPEECH_SYNC_REVEAL_END = 0.96;
const SPEECH_SYNC_WORD_COMMIT_MIN = 0.38;
const SPEECH_SYNC_WORD_COMMIT_MAX = 0.68;
const SPEECH_SYNC_VISUAL_PROGRESS_LAG = 0.18;
const MATHS_NUMBERS_TEMPLATE = `# Numbers
1 is one.
2 is two.
3 is three.
4 is four.
5 is five.

# Count Together
Count the stars.
Count the circles.
Count the apples.

# Speak Clearly
Say the numbers slowly and clearly.`;
const MATHS_OPERATIONS_TEMPLATE = `# Operations
Addition means putting numbers together.
2 plus 3 equals 5.
4 plus 1 equals 5.

Subtraction means taking away.
5 minus 2 equals 3.
7 minus 4 equals 3.

# Shapes
A triangle has 3 sides.
A rectangle has 4 sides.`;
const MATHS_PRONUNCIATION_TEMPLATE = `# Maths Pronunciation Practice
Zero
One
Two
Three
Four
Five
Plus
Minus
Equals
Triangle
Rectangle
Circle
Division
Multiplication`;
const MATHS_TABLES_TEMPLATE = buildTimesTablesLesson([2, 3, 4, 5, 6, 7, 8, 9, 10]);
const MATHS_SUMS_TEMPLATE = `# Mixed Maths Sums
2 + 2 = 4.
3 + 5 = 8.
6 + 4 = 10.
9 - 3 = 6.
12 - 5 = 7.
15 - 6 = 9.

# Multiply
2 × 2 = 4.
2 × 5 = 10.
3 × 4 = 12.
4 × 6 = 24.
5 × 3 = 15.

# Divide
8 ÷ 2 = 4.
12 ÷ 3 = 4.
18 ÷ 6 = 3.
20 ÷ 5 = 4.

# Word Problems
Ria has 2 bags with 4 apples each.
2 × 4 = 8 apples.

There are 10 sweets and 5 children.
10 ÷ 5 = 2 sweets each.`;

function buildSingleTimesTable(multiplier, maxFactor = 10) {
  const lines = [`# Table Of ${multiplier}`];
  for (let factor = 1; factor <= maxFactor; factor += 1) {
    lines.push(`${multiplier} × ${factor} = ${multiplier * factor}.`);
  }
  return lines.join("\n");
}

function buildTimesTablesLesson(multipliers = [], maxFactor = 10) {
  return multipliers
    .filter((value) => Number.isFinite(value) && value > 0)
    .map((value) => buildSingleTimesTable(value, maxFactor))
    .join("\n\n");
}
const NUMBER_WORD_VALUES = Object.freeze({
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90
});
const SMALL_NUMBER_WORDS = Object.freeze([
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen"
]);
const TENS_NUMBER_WORDS = Object.freeze([
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety"
]);
const SPOKEN_MEASUREMENT_UNITS = Object.freeze([
  Object.freeze({ short: "cm", singular: "centimeter", plural: "centimeters" }),
  Object.freeze({ short: "km", singular: "kilometer", plural: "kilometers" }),
  Object.freeze({ short: "hm", singular: "hectometer", plural: "hectometers" }),
  Object.freeze({ short: "dam", singular: "decameter", plural: "decameters" }),
  Object.freeze({ short: "m", singular: "meter", plural: "meters" }),
  Object.freeze({ short: "dm", singular: "decimeter", plural: "decimeters" }),
  Object.freeze({ short: "mm", singular: "millimeter", plural: "millimeters" }),
  Object.freeze({ short: "kg", singular: "kilogram", plural: "kilograms" }),
  Object.freeze({ short: "gm", singular: "gram", plural: "grams" }),
  Object.freeze({ short: "ml", singular: "milliliter", plural: "milliliters" }),
  Object.freeze({ short: "hr", singular: "hour", plural: "hours" }),
  Object.freeze({ short: "hrs", singular: "hour", plural: "hours" }),
  Object.freeze({ short: "min", singular: "minute", plural: "minutes" }),
  Object.freeze({ short: "mins", singular: "minute", plural: "minutes" })
]);
const SPOKEN_TERM_REPLACEMENTS = Object.freeze([
  Object.freeze({ pattern: /\bAnjali\b/gi, replacement: "Ahn-ja-lee" }),
  Object.freeze({ pattern: /\bIndia\b/gi, replacement: "In-dee-uh" }),
  Object.freeze({ pattern: /\bIndian\b/gi, replacement: "In-dee-uhn" }),
  Object.freeze({ pattern: /\bfemale\b/gi, replacement: "fee-mayl" }),
  Object.freeze({ pattern: /\bdecimal point\b/gi, replacement: "decimal point" }),
  Object.freeze({ pattern: /\bplace value\b/gi, replacement: "place value" }),
  Object.freeze({ pattern: /\bexpanded form\b/gi, replacement: "expanded form" }),
  Object.freeze({ pattern: /\blearning outcomes\b/gi, replacement: "learning outcomes" }),
  Object.freeze({ pattern: /\blearning time\b/gi, replacement: "learning time" }),
  Object.freeze({ pattern: /\bmaths\b/gi, replacement: "maths" }),
  Object.freeze({ pattern: /\bcm\b/gi, replacement: "centimetre" }),
  Object.freeze({ pattern: /\bkm\b/gi, replacement: "kilometre" }),
  Object.freeze({ pattern: /\bmm\b/gi, replacement: "millimetre" }),
  Object.freeze({ pattern: /\bkg\b/gi, replacement: "kilogram" }),
  Object.freeze({ pattern: /\bgm\b/gi, replacement: "gram" }),
  Object.freeze({ pattern: /\bml\b/gi, replacement: "millilitre" }),
  Object.freeze({ pattern: /\bmm2\b/gi, replacement: "square millimetres" }),
  Object.freeze({ pattern: /\bcm2\b/gi, replacement: "square centimetres" }),
  Object.freeze({ pattern: /\bm2\b/gi, replacement: "square metres" }),
  Object.freeze({ pattern: /\bkm2\b/gi, replacement: "square kilometres" }),
  Object.freeze({ pattern: /\bmrp\b/gi, replacement: "M R P" }),
  Object.freeze({ pattern: /\bq\.\s*(\d+)/gi, replacement: "question $1" }),
  Object.freeze({ pattern: /\bans\.\b/gi, replacement: "answer" }),
  Object.freeze({ pattern: /\bex\.\b/gi, replacement: "exercise" }),
  Object.freeze({ pattern: /\bst\.\b/gi, replacement: "standard" }),
  Object.freeze({ pattern: /\bnos?\.\b/gi, replacement: "numbers" }),
  Object.freeze({ pattern: /\bno\.\s*(\d+)/gi, replacement: "number $1" }),
  Object.freeze({ pattern: /\bpg\.\s*(\d+)/gi, replacement: "page $1" }),
  Object.freeze({ pattern: /\bqns?\.\b/gi, replacement: "questions" }),
  Object.freeze({ pattern: /\bstd\.\b/gi, replacement: "standard" }),
  Object.freeze({ pattern: /\blike\s*&\s*unlike\b/gi, replacement: "like and unlike" }),
  Object.freeze({ pattern: /&/g, replacement: " and " }),
  Object.freeze({ pattern: /\u2192/g, replacement: " to " }),
  Object.freeze({ pattern: /_{2,}/g, replacement: " blank " }),
  Object.freeze({ pattern: /₹/g, replacement: " rupees " })
]);
const ORDINAL_WORD_MAP = Object.freeze({
  1: "first",
  2: "second",
  3: "third",
  4: "fourth",
  5: "fifth",
  6: "sixth",
  7: "seventh",
  8: "eighth",
  9: "ninth",
  10: "tenth",
  11: "eleventh",
  12: "twelfth",
  13: "thirteenth",
  14: "fourteenth",
  15: "fifteenth",
  16: "sixteenth",
  17: "seventeenth",
  18: "eighteenth",
  19: "nineteenth",
  20: "twentieth"
});
const NUMBER_SCALE_VALUES = Object.freeze({
  hundred: 100,
  thousand: 1000
});

function createEmptyStageVideoState() {
  return {
    id: "",
    url: "",
    fileName: "",
    blob: null,
    element: null,
    durationMs: 0,
    width: 0,
    height: 0,
    posterDataUrl: "",
    cutoutApplied: false,
    cutoutConfidence: 0,
    cutoutKey: null,
    cutoutSurface: null,
    aspectRatio: 16 / 9,
    frameX: 0,
    frameY: 0,
    frameWidth: 0,
    frameHeight: 0
  };
}

let pdfLibraryPromise = null;
let pdfFaceDetector = null;
let pdfFaceFilteringUnavailable = false;

const state = {
  narrationServerUrl: "http://127.0.0.1:8424",
  narrationServerReady: false,
  anjaliCloneServerUrl: "http://127.0.0.1:8426",
  anjaliCloneServerReady: false,
  transcribeServerUrl: "http://127.0.0.1:8428",
  transcribeServerReady: false,
  videoExportServerUrl: "http://127.0.0.1:8430",
  videoExportServerReady: false,
  text: "",
  presentationTemplate: PRESENTATION_TEMPLATE_CLASSIC,
  outcomesTitle: "",
  lines: [],
  words: [],
  tokens: [],
  displayedText: "",
  speaking: false,
  mouthOpen: 0.12,
  lessonPlaybackRate: DEFAULT_STAGE_PLAYBACK_RATE,
  animationFrame: null,
  typingInterval: null,
  speechUtterance: null,
  images: [],
  stageVideo: createEmptyStageVideoState(),
  stageVideos: [],
  activeStageVideoId: "",
  introPlayback: {
    enabled: false,
    active: false,
    previewVisible: false,
    available: null,
    fileName: "INTRO.mp4",
    url: DEFAULT_INTRO_VIDEO_FILE,
    element: null,
    durationMs: 0
  },
  narration: {
    url: "",
    fileName: "",
    durationMs: 0,
    source: "",
    blob: null,
    textSource: "",
    voice: "",
    syncProfile: null
  },
  recording: {
    recorder: null,
    chunks: [],
    stream: null
  },
  pdfSelectedFile: null,
  pdfLoading: false,
  presentationMode: "lesson",
  pdf: {
    fileName: "",
    fileSignature: "",
    extractedText: "",
    pageTexts: [],
    pageCount: 0,
    pages: [],
    contextPages: [],
    contextPagesKey: "",
    autoImageSyncKey: "",
    lessonAutoImageSyncKey: "",
    selectedPageIndexes: [],
    renderMode: "context",
    currentTimeMs: 0,
    totalDurationMs: 0,
    playbackRate: DEFAULT_STAGE_PLAYBACK_RATE,
    requestId: 0,
    pageSchedule: [],
    paused: false,
    audioDriven: false,
    timelineStartedAt: 0,
    timelineStartOffsetMs: 0,
    narration: {
      url: "",
      fileName: "",
      durationMs: 0,
      blob: null,
      textSource: "",
      voice: "",
      source: "",
      syncProfile: null
    }
  },
  dictation: {
    recognition: null,
    active: false,
    baseText: "",
    finalTranscript: ""
  },
  transcribeSelectedFile: null,
  transcribing: false,
  generatingNarration: false,
  inputPreviewing: false,
  previewAudio: null,
  previewAudioUrl: "",
  preferredNarrationVoice: "anjali",
  mathsTranslator: {
    auto: true,
    lastSource: "",
    lastTranslated: "",
    translating: false,
    requestId: 0,
    timerId: 0,
    previewTimerId: 0
  },
  narrationWarmup: {
    timerId: 0,
    requestId: 0,
    active: false,
    text: "",
    voice: ""
  },
  narrationLiveProgress: {
    timerId: 0,
    startedAt: 0,
    label: "",
    detail: "",
    progress: 0
  },
  localServerStartup: {
    active: false,
    startedAt: 0
  },
  anjaliMonitor: {
    timerId: 0,
    lastKnownReady: null,
    lastHealthyAt: 0,
    warming: false,
    lastError: "",
    modelLoaded: false,
    transientFailureCount: 0,
    generationActiveCount: 0
  },
  videoExportMonitor: {
    lastHealthyAt: 0,
    transientFailureCount: 0
  },
  lessonInputTimerId: 0,
  contentScrollOffset: 0,
  previewPageIndex: 0,
  renderedPageCount: 1,
  previewZoom: 1,
  fontScale: 1,
  sceneUploads: [],
  sceneGenerationActive: false,
  scene: {
    prompt: "",
    theme: "Classroom",
    vfx: "sparkles",
    musicMood: "bright",
    exportQuality: "2k",
    palette: ["#0e84ad", "#4eb6de", "#ffb548"],
    description: "Bright classroom style with gentle sparkles."
  },
  music: {
    url: "",
    fileName: "",
    blob: null,
    source: "",
    mood: "",
    durationMs: 0,
    volume: 0.2,
    enabled: false
  },
  exportVideoTrack: null,
  exportingVideo: false,
  selectedPhrase: "",
  keywordStyles: [],
  selectionStyle: {
    color: "#ffffff",
    bold: false,
    italic: false,
    underline: false
  },
  cutoutControls: {
    tolerance: STAGE_VIDEO_CUTOUT_TOLERANCE,
    feather: STAGE_VIDEO_EDGE_FEATHER,
    spill: 35,
    screenBlend: 28,
    refreshRevision: 0,
    refreshTimerId: 0
  },
  imageEditor: {
    activeIndex: -1,
    hoverIndex: -1,
    hoverMode: "",
    activeHandle: "",
    mode: "",
    pointerId: null,
    startPointerX: 0,
    startPointerY: 0,
    startX: 0,
    startY: 0,
    startWidth: 0,
    startHeight: 0,
    startAspectRatio: 4 / 3
  },
  imageRenderBoxes: [],
  stageVideoEditor: {
    activeId: "",
    hoverMode: "",
    mode: "",
    pointerId: null,
    startPointerX: 0,
    startPointerY: 0,
    startX: 0,
    startY: 0,
    startWidth: 0,
    startHeight: 0
  },
  stageVideoRenderBox: null,
  activeAudio: null,
  activeMusic: null,
  exportCapture: {
    minFrameIntervalMs: 0,
    lastFrameAt: 0
  },
  actionLocks: {
    showScreen: false,
    pdfShow: false,
    pdfPresent: false,
    play: false,
    export: false,
    preview: false,
    narrationDownload: false
  },
  taskProgress: {
    revision: 0,
    progress: 0,
    hideTimeoutId: 0,
    label: "",
    startedAt: 0
  },
  audioContext: null,
  audioGraph: null,
  exportFallbackMode: false,
  mediaFrame: null,
  runtimeErrorMessage: "",
  displayStyle: {
    color: "#ffffff",
    bold: false,
    italic: false,
    underline: false,
    caseMode: "original"
  }
};

function getDisplayErrorMessage(error, fallback = "Something went wrong.") {
  if (!error) {
    return fallback;
  }

  if (typeof error === "string") {
    return error.trim() || fallback;
  }

  if (typeof error?.message === "string" && error.message.trim()) {
    return error.message.trim();
  }

  if (typeof error?.reason === "string" && error.reason.trim()) {
    return error.reason.trim();
  }

  if (typeof error?.reason?.message === "string" && error.reason.message.trim()) {
    return error.reason.message.trim();
  }

  return fallback;
}

function isLikelyErrorMessage(message = "") {
  const safeMessage = String(message || "").trim();
  if (!safeMessage) {
    return false;
  }

  return /(error|failed|failure|cannot|can't|could not|unable|unavailable|not available|timed out|timeout|denied|refused|invalid|missing|unsupported|not supported|unexpected|offline|crash|stopped working)/i.test(safeMessage);
}

function applyStatusMessage(element, message, options = {}) {
  const text = String(message || "").trim();
  const isError = typeof options.error === "boolean"
    ? options.error
    : isLikelyErrorMessage(text);

  if (element) {
    element.textContent = text;
    element.classList.toggle("is-error", isError);
  }

  return { text, isError };
}

function clearRuntimeDisplayError(options = {}) {
  const hadError = Boolean(state.runtimeErrorMessage);
  state.runtimeErrorMessage = "";
  if (hadError && options.redraw !== false && !stagePanel.classList.contains("hidden")) {
    try {
      drawScene(state.mouthOpen);
    } catch (error) {
      console.error(error);
    }
  }
}

function showRuntimeDisplayError(message, options = {}) {
  const cleanMessage = getDisplayErrorMessage(message).replace(/^error:\s*/i, "").trim();
  if (!cleanMessage) {
    return;
  }

  state.runtimeErrorMessage = cleanMessage;
  if (options.updateStatus !== false) {
    applyStatusMessage(statusText, `Error: ${cleanMessage}`, { error: true });
  }
  if (options.redraw !== false && !stagePanel.classList.contains("hidden")) {
    try {
      drawScene(state.mouthOpen);
    } catch (error) {
      console.error(error);
    }
  }
}

function setStatus(message, options = {}) {
  const result = applyStatusMessage(statusText, message, { error: options.error });
  if (result.isError) {
    state.runtimeErrorMessage = result.text.replace(/^error:\s*/i, "").trim();
    if (options.redraw !== false && !stagePanel.classList.contains("hidden")) {
      try {
        drawScene(state.mouthOpen);
      } catch (error) {
        console.error(error);
      }
    }
    return;
  }

  if (!options.keepRuntimeError) {
    clearRuntimeDisplayError({ redraw: options.redraw });
  }
}

function setStageMediaStatus(message) {
  const result = applyStatusMessage(stageMediaStatus, message);
  if (result.isError) {
    showRuntimeDisplayError(result.text);
  }
}

function setAudioStatus(message) {
  const result = applyStatusMessage(audioStatus, message);
  if (result.isError) {
    showRuntimeDisplayError(result.text);
  }
}

function setSpeechToolsStatus(message) {
  const result = applyStatusMessage(speechToolsStatus, message);
  if (result.isError) {
    showRuntimeDisplayError(result.text);
  }
}

function setTranscribeStatus(message) {
  const result = applyStatusMessage(transcribeStatus, message);
  if (result.isError) {
    showRuntimeDisplayError(result.text);
  }
}

function setNarrationGenStatus(message) {
  const result = applyStatusMessage(narrationGenStatus, message);
  if (result.isError) {
    showRuntimeDisplayError(result.text);
  }
}

function clearNarrationLiveProgressTimer() {
  if (state.narrationLiveProgress.timerId) {
    window.clearInterval(state.narrationLiveProgress.timerId);
    state.narrationLiveProgress.timerId = 0;
  }
}

function renderNarrationLiveProgress(options = {}) {
  if (!narrationLiveIndicator || !narrationLiveProgressLabel || !narrationLiveProgressFill) {
    return;
  }

  const safeProgress = clamp(
    Number.isFinite(options.progress) ? options.progress : state.narrationLiveProgress.progress,
    0,
    1
  );
  const elapsedMs = Math.max(0, Date.now() - (state.narrationLiveProgress.startedAt || Date.now()));
  const label = options.label || state.narrationLiveProgress.label || "Generating anjali narration...";
  const detail = options.detail || state.narrationLiveProgress.detail || `${formatDurationMs(elapsedMs)} elapsed`;

  state.narrationLiveProgress.progress = safeProgress;
  state.narrationLiveProgress.label = label;
  state.narrationLiveProgress.detail = detail;

  narrationLiveProgressLabel.textContent = `${label} ${detail}`.trim();
  narrationLiveIndicator.classList.remove("hidden");
  narrationLiveIndicator.classList.toggle("is-active", options.active !== false);
  narrationLiveIndicator.classList.toggle("is-complete", Boolean(options.complete));
  narrationLiveIndicator.classList.toggle("is-error", Boolean(options.error));

  if (options.complete || options.error) {
    narrationLiveProgressFill.style.width = "100%";
  } else {
    narrationLiveProgressFill.style.width = `${Math.max(12, Math.round(safeProgress * 100))}%`;
  }
}

function startNarrationLiveProgress(label) {
  clearNarrationLiveProgressTimer();
  state.narrationLiveProgress.startedAt = Date.now();
  state.narrationLiveProgress.label = String(label || "Generating anjali narration...");
  state.narrationLiveProgress.detail = "0s elapsed";
  state.narrationLiveProgress.progress = 0.08;
  renderNarrationLiveProgress({
    label: state.narrationLiveProgress.label,
    detail: state.narrationLiveProgress.detail,
    progress: state.narrationLiveProgress.progress,
    active: true
  });
  state.narrationLiveProgress.timerId = window.setInterval(() => {
    const elapsedMs = Math.max(0, Date.now() - state.narrationLiveProgress.startedAt);
    renderNarrationLiveProgress({
      label: state.narrationLiveProgress.label,
      detail: `${formatDurationMs(elapsedMs)} elapsed`,
      progress: state.narrationLiveProgress.progress,
      active: true
    });
  }, 1000);
}

function updateNarrationLiveProgress(label, progress) {
  if (!state.generatingNarration && !state.narrationLiveProgress.startedAt) {
    return;
  }

  const safeLabel = String(label || state.narrationLiveProgress.label || "Generating anjali narration...");
  const safeProgress = clamp(Number.isFinite(progress) ? progress : state.narrationLiveProgress.progress, 0, 0.96);
  const elapsedMs = Math.max(0, Date.now() - (state.narrationLiveProgress.startedAt || Date.now()));
  renderNarrationLiveProgress({
    label: safeLabel,
    detail: `${formatDurationMs(elapsedMs)} elapsed`,
    progress: safeProgress,
    active: true
  });
}

function finishNarrationLiveProgress(message, options = {}) {
  if (!narrationLiveIndicator) {
    return;
  }

  clearNarrationLiveProgressTimer();
  const safeMessage = String(message || (options.error ? "Narration generation failed." : "Narration ready."));
  renderNarrationLiveProgress({
    label: safeMessage,
    detail: options.error ? "Please try again." : "Completed",
    progress: 1,
    active: false,
    complete: !options.error,
    error: Boolean(options.error)
  });
  window.setTimeout(() => {
    narrationLiveIndicator.classList.add("hidden");
    narrationLiveIndicator.classList.remove("is-active", "is-complete", "is-error");
    narrationLiveProgressFill.style.width = "0%";
    narrationLiveProgressLabel.textContent = "Anjali narration is preparing...";
  }, options.error ? 2800 : 1800);
  state.narrationLiveProgress.startedAt = 0;
  state.narrationLiveProgress.label = "";
  state.narrationLiveProgress.detail = "";
  state.narrationLiveProgress.progress = 0;
}

function setMathsHelperStatus(message) {
  const result = applyStatusMessage(mathsHelperStatus, message);
  if (result.isError) {
    showRuntimeDisplayError(result.text);
  }
}

function setImageCutoutStatus(message) {
  const result = applyStatusMessage(imageCutoutStatus, message);
  if (result.isError) {
    showRuntimeDisplayError(result.text);
  }
}

function setCutoutControlsStatus(message) {
  const result = applyStatusMessage(cutoutControlsStatus, message);
  if (result.isError) {
    showRuntimeDisplayError(result.text);
  }
}

function setVideoStatus(message) {
  const result = applyStatusMessage(videoStatus, message);
  if (result.isError) {
    showRuntimeDisplayError(result.text);
  }
}

function setIntroClipStatus(message) {
  const result = applyStatusMessage(introClipStatus, message);
  if (result.isError) {
    showRuntimeDisplayError(result.text);
  }
}

function setServerControlsStatus(message) {
  const result = applyStatusMessage(serverControlsStatus, message);
  if (result.isError) {
    showRuntimeDisplayError(result.text);
  }
}

function setSelectionStyleStatus(message) {
  const result = applyStatusMessage(selectionStyleStatus, message);
  if (result.isError) {
    showRuntimeDisplayError(result.text);
  }
}

function setIconButtonState(button, iconHtml, label) {
  if (!button) {
    return;
  }

  button.innerHTML = `<span aria-hidden="true">${iconHtml}</span>`;
  button.setAttribute("aria-label", label);
  button.title = label;
}

async function runLockedAction(lockName, buttons, task) {
  if (state.actionLocks?.[lockName]) {
    if (lockName === "export") {
      updateTaskProgressUi(Math.max(0.01, state.taskProgress.progress || 0.01), true, {
        label: state.exportingVideo
          ? (isPdfPresentationMode() ? "PDF export is already running..." : "Video export is already running...")
          : (isPdfPresentationMode() ? "PDF export is still preparing..." : "Video export is still preparing...")
      });
      setStatus(
        state.exportingVideo
          ? (isPdfPresentationMode() ? "PDF export is already running. Please wait for it to finish." : "Video export is already running. Please wait for it to finish.")
          : (isPdfPresentationMode() ? "PDF export is still preparing. Please wait..." : "Video export is still preparing. Please wait...")
      );
      updateStageModeUi();
    }
    return;
  }

  const buttonList = (Array.isArray(buttons) ? buttons : [buttons]).filter(Boolean);
  const previousStates = buttonList.map((button) => Boolean(button.disabled));
  clearRuntimeDisplayError();
  state.actionLocks[lockName] = true;
  buttonList.forEach((button) => {
    button.disabled = true;
    button.setAttribute("aria-busy", "true");
  });
  if (lockName === "export") {
    updateTaskProgressUi(0.01, true, {
      label: isPdfPresentationMode() ? "Starting PDF export..." : "Starting video export..."
    });
  }

  try {
    return await task();
  } catch (error) {
    const fallbackMessage = lockName === "export"
      ? (isPdfPresentationMode() ? "PDF export could not finish." : "Video export could not finish.")
      : "That action could not finish.";
    console.error(error);
    showRuntimeDisplayError(getDisplayErrorMessage(error, fallbackMessage));
    return undefined;
  } finally {
    state.actionLocks[lockName] = false;
    buttonList.forEach((button, index) => {
      button.disabled = previousStates[index];
      button.removeAttribute("aria-busy");
    });
    if (lockName === "export" && !state.exportingVideo) {
      resetTaskProgressUi();
    }
    updatePdfUi();
    updateSpeechToolsUi();
    updateStageModeUi();
    updateStageMediaToolUi();
  }
}

function beginExportFromUi(task) {
  const startingLabel = isPdfPresentationMode() ? "Starting PDF export..." : "Starting video export...";
  setStatus(startingLabel);
  updateTaskProgressUi(0.01, true, { label: startingLabel });
  updateStageModeUi();
  return runLockedAction("export", [downloadBtn, downloadPdfContextBtn, playBtn], task);
}

function buildHumanTaskLabel(label = "") {
  const cleanLabel = (label || "").replace(/\s+/g, " ").trim();
  if (!cleanLabel) {
    if (state.exportingVideo) {
      return {
        title: isPdfPresentationMode() ? "Exporting PDF" : "Exporting Video",
        detail: isPdfPresentationMode()
          ? "Rendering pages and preparing the final MP4..."
          : "Rendering the lesson and preparing the final MP4..."
      };
    }

    return {
      title: "Working",
      detail: "Preparing the next step..."
    };
  }

  if (/ffmpeg|combining|mux/i.test(cleanLabel)) {
    return {
      title: "Exporting Video",
      detail: cleanLabel
    };
  }

  if (/render/i.test(cleanLabel)) {
    return {
      title: "Rendering",
      detail: cleanLabel
    };
  }

  if (/pdf/i.test(cleanLabel)) {
    return {
      title: "Preparing PDF",
      detail: cleanLabel
    };
  }

  if (state.exportingVideo) {
    return {
      title: isPdfPresentationMode() ? "Exporting PDF" : "Exporting Video",
      detail: cleanLabel
    };
  }

  return {
    title: "Working",
    detail: cleanLabel
  };
}

function normalizeExportQuality(value) {
  return value === "4k"
    ? "4k"
    : value === "2k"
      ? "2k"
      : "hd";
}

function getSelectedExportQuality() {
  return normalizeExportQuality(exportQualitySelect?.value || state.scene.exportQuality || "2k");
}

function resolveProjectAssetUrl(path) {
  try {
    return new URL(path, window.location.href).href;
  } catch (error) {
    console.error(error);
    return path;
  }
}

function getCutoutTolerance(force = false) {
  const baseTolerance = clamp(
    Number(state.cutoutControls?.tolerance) || STAGE_VIDEO_CUTOUT_TOLERANCE,
    20,
    110
  );
  return Math.round(baseTolerance + (force ? 10 : 0));
}

function getCutoutFeather() {
  return clamp(
    Number(state.cutoutControls?.feather) || STAGE_VIDEO_EDGE_FEATHER,
    4,
    48
  );
}

function getCutoutSpillStrength() {
  return clamp((Number(state.cutoutControls?.spill) || 0) / 100, 0, 1);
}

function getCutoutScreenBlendStrength() {
  return clamp((Number(state.cutoutControls?.screenBlend) || 0) / 100, 0, 1);
}

function getCutoutKeyTolerance(key) {
  if (!key) {
    return getCutoutTolerance(false);
  }

  const boost = Number.isFinite(key.toleranceBoost) ? key.toleranceBoost : 0;
  if (Number.isFinite(key.tolerance)) {
    return clamp(key.tolerance, 20, 140);
  }

  return getCutoutTolerance(false) + boost;
}

function updateCutoutControlsUi() {
  if (cutoutToleranceInput) {
    cutoutToleranceInput.value = `${Math.round(getCutoutTolerance(false))}`;
  }
  if (cutoutToleranceValue) {
    cutoutToleranceValue.textContent = `${Math.round(getCutoutTolerance(false))}`;
  }

  if (cutoutFeatherInput) {
    cutoutFeatherInput.value = `${Math.round(getCutoutFeather())}`;
  }
  if (cutoutFeatherValue) {
    cutoutFeatherValue.textContent = `${Math.round(getCutoutFeather())}`;
  }

  const spillPercent = Math.round(getCutoutSpillStrength() * 100);
  if (cutoutSpillInput) {
    cutoutSpillInput.value = `${spillPercent}`;
  }
  if (cutoutSpillValue) {
    cutoutSpillValue.textContent = `${spillPercent}%`;
  }

  const blendPercent = Math.round(getCutoutScreenBlendStrength() * 100);
  if (cutoutScreenBlendInput) {
    cutoutScreenBlendInput.value = `${blendPercent}`;
  }
  if (cutoutScreenBlendValue) {
    cutoutScreenBlendValue.textContent = `${blendPercent}%`;
  }
}

function applyScreenMatchOverlay(area, strength = getCutoutScreenBlendStrength()) {
  if (!area || strength <= 0) {
    return;
  }

  const safeStrength = clamp(strength, 0, 1);
  const tint = ctx.createLinearGradient(area.x, area.y, area.x, area.y + area.height);
  tint.addColorStop(0, `rgba(55, 129, 168, ${0.05 + (safeStrength * 0.22)})`);
  tint.addColorStop(0.55, `rgba(73, 153, 187, ${0.04 + (safeStrength * 0.12)})`);
  tint.addColorStop(1, `rgba(167, 212, 235, ${0.06 + (safeStrength * 0.24)})`);
  ctx.fillStyle = tint;
  ctx.fillRect(area.x, area.y, area.width, area.height);

  const highlight = ctx.createRadialGradient(
    area.x + (area.width * 0.72),
    area.y + (area.height * 0.24),
    20,
    area.x + (area.width * 0.72),
    area.y + (area.height * 0.24),
    area.width * 0.85
  );
  highlight.addColorStop(0, `rgba(255,255,255,${0.08 + (safeStrength * 0.2)})`);
  highlight.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = highlight;
  ctx.fillRect(area.x, area.y, area.width, area.height);
}

function softenForegroundSpill(data, offset, key, edgeFactor = 1) {
  const spillStrength = getCutoutSpillStrength();
  if (!key?.greenish || spillStrength <= 0 || edgeFactor <= 0) {
    return;
  }

  const r = data[offset];
  const g = data[offset + 1];
  const b = data[offset + 2];
  const dominant = Math.max(r, b);
  const spillAmount = g - dominant;
  if (spillAmount <= 5 || g < 52) {
    return;
  }

  const influence = clamp(edgeFactor, 0, 1) * spillStrength;
  const greenReduction = Math.round(spillAmount * (0.38 + (influence * 0.38)));
  const blueBoost = Math.round(spillAmount * influence * 0.18);
  const redBoost = Math.round(spillAmount * influence * 0.08);
  data[offset] = clamp(r + redBoost, 0, 255);
  data[offset + 1] = clamp(g - greenReduction, 0, 255);
  data[offset + 2] = clamp(b + blueBoost, 0, 255);
}

function scheduleCutoutPreviewRefresh() {
  if (!state.cutoutControls) {
    return;
  }

  state.cutoutControls.refreshRevision += 1;
  const revision = state.cutoutControls.refreshRevision;
  if (state.cutoutControls.refreshTimerId) {
    window.clearTimeout(state.cutoutControls.refreshTimerId);
  }

  state.cutoutControls.refreshTimerId = window.setTimeout(async () => {
    if (revision !== state.cutoutControls.refreshRevision) {
      return;
    }

    const selectedImageIndex = getSelectedImageIndex();
    const selectedImage = selectedImageIndex >= 0 ? state.images[selectedImageIndex] : null;
    if (selectedImage?.cutoutApplied) {
      try {
        await applySmartCutoutToImageAt(selectedImageIndex, true);
        selectImageAt(selectedImageIndex, { moveToPage: false });
        setCutoutControlsStatus("Smart cutout tuning updated. The selected image was refreshed with the new edge settings.");
      } catch (error) {
        console.error(error);
        setCutoutControlsStatus("Smart cutout tuning changed, but the selected image could not be refreshed automatically.");
      }
      return;
    }

    if (stagePanel && !stagePanel.classList.contains("hidden")) {
      drawScene(state.mouthOpen);
    }
  }, 220);
}

function handleCutoutControlChange() {
  state.cutoutControls.tolerance = clamp(Number(cutoutToleranceInput?.value) || STAGE_VIDEO_CUTOUT_TOLERANCE, 20, 110);
  state.cutoutControls.feather = clamp(Number(cutoutFeatherInput?.value) || STAGE_VIDEO_EDGE_FEATHER, 4, 48);
  state.cutoutControls.spill = clamp(Number(cutoutSpillInput?.value) || 0, 0, 100);
  state.cutoutControls.screenBlend = clamp(Number(cutoutScreenBlendInput?.value) || 0, 0, 100);
  updateCutoutControlsUi();
  setCutoutControlsStatus("Smart cutout controls updated. Active video updates live, and selected cutout images refresh automatically.");
  if (stagePanel && !stagePanel.classList.contains("hidden")) {
    drawScene(state.mouthOpen);
  }
  scheduleCutoutPreviewRefresh();
}

function getRequestedExportQuality() {
  return normalizeExportQuality(state.scene.exportQuality);
}

function getEffectiveExportQuality() {
  const requestedQuality = getRequestedExportQuality();
  if (state.stageVideo.url && requestedQuality === "hd") {
    return "2k";
  }

  return requestedQuality;
}

function getExportQualityLabel(quality = getEffectiveExportQuality()) {
  return quality === "4k"
    ? "4K"
    : quality === "2k"
      ? "2K"
      : "HD";
}

function setSceneGeneratorStatus(message) {
  const result = applyStatusMessage(sceneGeneratorStatus, message);
  if (result.isError) {
    showRuntimeDisplayError(result.text);
  }
}

function setSceneMusicStatus(message) {
  const result = applyStatusMessage(sceneMusicStatus, message);
  if (result.isError) {
    showRuntimeDisplayError(result.text);
  }
}

function setSceneGenerationProgress(value, label = "") {
  const safeValue = clamp(Math.round(value), 0, 100);
  sceneGenerationProgress.classList.remove("hidden");
  sceneGenerationProgress.setAttribute("aria-valuenow", `${safeValue}`);
  sceneGenerationProgressBar.style.width = `${safeValue}%`;
  updateTaskProgressUi(safeValue / 100, true, {
    label: label || "Generating scene"
  });
  sceneGenerationProgressLabel.textContent = label
    ? `${safeValue}% - ${label}`
    : `${safeValue}% complete`;
}

function resetSceneGenerationProgress() {
  sceneGenerationProgress.classList.add("hidden");
  sceneGenerationProgress.setAttribute("aria-valuenow", "0");
  sceneGenerationProgressBar.style.width = "0%";
  sceneGenerationProgressLabel.textContent = "0% complete";
  resetTaskProgressUi();
}

function updateSceneGeneratorUi() {
  const isBusy = state.sceneGenerationActive;
  generateSceneBtn.disabled = isBusy;
  generateSceneShowBtn.disabled = isBusy;
  clearSceneBtn.disabled = isBusy;
  scenePromptInput.disabled = isBusy;
  sceneVfxSelect.disabled = isBusy;
  sceneMusicModeSelect.disabled = isBusy;
  exportQualitySelect.disabled = isBusy;
  sceneImageInput.disabled = isBusy;
  sceneMusicInput.disabled = isBusy;
}

function updateStagePageUi(currentPageIndex = 0, totalPageCount = 1) {
  const safeTotal = Math.max(1, totalPageCount);
  const safeIndex = clamp(currentPageIndex, 0, safeTotal - 1);
  const lockNavigation = state.speaking || downloadBtn.disabled;
  const currentPdfPage = isPdfPresentationMode()
    ? getPdfPresentationPages()[safeIndex]
    : null;

  if (pageIndicator) {
    pageIndicator.textContent = currentPdfPage
      ? `Selected ${safeIndex + 1} / ${safeTotal} | PDF ${currentPdfPage.sourcePageNumber || currentPdfPage.pageNumber}${currentPdfPage.totalParts > 1 ? ` • Part ${currentPdfPage.partIndex + 1}/${currentPdfPage.totalParts}` : ""}`
      : `Page ${safeIndex + 1} / ${safeTotal}`;
  }

  if (prevPageBtn) {
    prevPageBtn.disabled = lockNavigation || safeIndex <= 0;
  }

  if (nextPageBtn) {
    nextPageBtn.disabled = lockNavigation || safeIndex >= safeTotal - 1;
  }
}

function formatControlPercent(value) {
  return `${Math.round(value * 100)}%`;
}

function setIndicatorProgress(indicator, progress = 0) {
  if (!indicator) {
    return;
  }

  const safeProgress = clamp(progress, 0, 1);
  indicator.style.setProperty("--indicator-progress", `${Math.round(safeProgress * 100)}%`);
}

function clearTaskProgressHideTimer() {
  if (state.taskProgress.hideTimeoutId) {
    window.clearTimeout(state.taskProgress.hideTimeoutId);
    state.taskProgress.hideTimeoutId = 0;
  }
}

function scheduleTaskProgressHide(delayMs = 240, expectedRevision = state.taskProgress.revision) {
  if (!taskPercentIndicator) {
    return;
  }

  clearTaskProgressHideTimer();
  const safeDelay = Math.max(0, Math.round(delayMs));
  state.taskProgress.hideTimeoutId = window.setTimeout(() => {
    if (expectedRevision !== state.taskProgress.revision) {
      return;
    }

    taskPercentIndicator.textContent = "0%";
    taskPercentIndicator.title = "";
    taskPercentIndicator.removeAttribute("aria-label");
    taskPercentIndicator.classList.remove("is-active", "is-complete");
    taskPercentIndicator.classList.add("hidden");
    setIndicatorProgress(taskPercentIndicator, 0);
    state.taskProgress.progress = 0;
    state.taskProgress.label = "";
    state.taskProgress.startedAt = 0;
    state.taskProgress.hideTimeoutId = 0;
  }, safeDelay);
}

function updatePlaybackProgressUi(progress = 0, active = false) {
  if (!playbackPercentIndicator) {
    return;
  }

  const safeProgress = clamp(progress, 0, 1);
  playbackPercentIndicator.textContent = formatControlPercent(safeProgress);
  playbackPercentIndicator.classList.toggle("is-active", active);
  playbackPercentIndicator.classList.toggle("is-complete", safeProgress >= 0.999 && active);
  setIndicatorProgress(playbackPercentIndicator, safeProgress);
}

function syncLessonPlaybackProgressUi(progress = 0, active = state.speaking) {
  updatePlaybackProgressUi(progress, active);
}

function updateTaskProgressUi(progress = 0, active = false, options = {}) {
  if (!taskPercentIndicator) {
    if (options.mirrorStage) {
      updatePlaybackProgressUi(progress, active);
    }
    return;
  }

  const safeProgress = clamp(progress, 0, 1);

  if (!active) {
    scheduleTaskProgressHide(
      Number.isFinite(options.delayMs) ? options.delayMs : (state.taskProgress.progress >= 0.999 ? 900 : 240),
      Number.isFinite(options.expectedRevision) ? options.expectedRevision : state.taskProgress.revision
    );

    if (options.mirrorStage) {
      updatePlaybackProgressUi(safeProgress, false);
    }
    return state.taskProgress.revision;
  }

  clearTaskProgressHideTimer();
  state.taskProgress.revision += 1;
  if (!state.taskProgress.startedAt || safeProgress < state.taskProgress.progress || safeProgress <= 0.001) {
    state.taskProgress.startedAt = performance.now();
  }
  state.taskProgress.progress = safeProgress;
  state.taskProgress.label = typeof options.label === "string" && options.label.trim()
    ? options.label.trim()
    : (statusText?.textContent?.trim() || "");

  const humanLabel = buildHumanTaskLabel(state.taskProgress.label);
  let detailText = humanLabel.detail;
  if (state.exportingVideo) {
    if (safeProgress > 0.01 && safeProgress < 0.999 && state.taskProgress.startedAt) {
      const elapsedMs = Math.max(0, performance.now() - state.taskProgress.startedAt);
      const estimatedTotalMs = elapsedMs / safeProgress;
      const remainingMs = Math.max(0, estimatedTotalMs - elapsedMs);
      detailText = `${humanLabel.detail} | ${formatDurationMs(elapsedMs)} elapsed | ${formatDurationMs(remainingMs)} left`;
    } else if (safeProgress <= 0.01) {
      detailText = `${humanLabel.detail} | estimating time...`;
    }
  }
  taskPercentIndicator.innerHTML = `<span class="task-progress-title">${humanLabel.title}</span><strong class="task-progress-percent">${formatControlPercent(safeProgress)}</strong><span class="task-progress-detail">${detailText}</span>`;
  taskPercentIndicator.title = state.taskProgress.label
    ? `${formatControlPercent(safeProgress)} - ${state.taskProgress.label}`
    : formatControlPercent(safeProgress);
  taskPercentIndicator.setAttribute(
    "aria-label",
    state.taskProgress.label
      ? `${formatControlPercent(safeProgress)} ${state.taskProgress.label}`
      : `${formatControlPercent(safeProgress)} loading`
  );
  taskPercentIndicator.classList.add("is-active");
  taskPercentIndicator.classList.toggle("is-complete", safeProgress >= 0.999);
  taskPercentIndicator.classList.remove("hidden");
  setIndicatorProgress(taskPercentIndicator, safeProgress);

  if (options.mirrorStage) {
    updatePlaybackProgressUi(safeProgress, active);
  }

  return state.taskProgress.revision;
}

function resetTaskProgressUi(options = {}) {
  updateTaskProgressUi(0, false, options);
}

function normalizeControlValue(value) {
  return Math.round(value * 10) / 10;
}

function applyPreviewZoom() {
  previewCanvas.style.transform = `scale(${state.previewZoom})`;
}

function updateStageViewUi() {
  const pdfMode = isPdfPresentationMode();

  if (zoomValue) {
    zoomValue.textContent = formatControlPercent(state.previewZoom);
  }

  if (fontValue) {
    fontValue.textContent = pdfMode ? "PDF" : formatControlPercent(state.fontScale);
  }

  if (zoomOutBtn) {
    zoomOutBtn.disabled = state.previewZoom <= PREVIEW_ZOOM_MIN;
  }

  if (zoomInBtn) {
    zoomInBtn.disabled = state.previewZoom >= PREVIEW_ZOOM_MAX;
  }

  if (fontDecreaseBtn) {
    fontDecreaseBtn.disabled = pdfMode || state.fontScale <= FONT_SCALE_MIN;
  }

  if (fontIncreaseBtn) {
    fontIncreaseBtn.disabled = pdfMode || state.fontScale >= FONT_SCALE_MAX;
  }
}

function setPreviewZoom(nextZoom) {
  state.previewZoom = clamp(normalizeControlValue(nextZoom), PREVIEW_ZOOM_MIN, PREVIEW_ZOOM_MAX);
  applyPreviewZoom();
  updateStageViewUi();
}

function setFontScale(nextScale) {
  state.fontScale = clamp(normalizeControlValue(nextScale), FONT_SCALE_MIN, FONT_SCALE_MAX);
  state.pdf.contextPagesKey = "";
  state.pdf.autoImageSyncKey = "";
  state.pdf.lessonAutoImageSyncKey = "";

  if (hasActivePdfSelection()) {
    rebuildPdfPresentationSchedule({ preserveTime: true });
  }
  syncExtractedPdfLessonImages({ skipDraw: true });
  updateStageViewUi();

  if (!stagePanel.classList.contains("hidden")) {
    drawScene(state.mouthOpen);
  }
}

function setPreviewPage(nextPageIndex) {
  const totalPageCount = Math.max(1, state.renderedPageCount || 1);
  const safePageIndex = clamp(nextPageIndex, 0, totalPageCount - 1);

  if (isPdfPresentationMode()) {
    void focusPdfSelectionPage(safePageIndex, {
      startPlayback: !stagePanel.classList.contains("hidden")
    });
    return;
  }

  state.previewPageIndex = safePageIndex;
  drawScene(state.mouthOpen);
}

function getStoredTheme() {
  try {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }
  } catch (error) {
    console.error(error);
  }

  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme) {
  const nextTheme = theme === "dark" ? "dark" : "light";
  document.body.setAttribute("data-theme", nextTheme);
  if (themeSelect) {
    themeSelect.value = nextTheme;
  }
  if (themeToggle) {
    themeToggle.checked = nextTheme === "dark";
  }
  if (themeModeLabel) {
    themeModeLabel.textContent = nextTheme === "dark" ? "Dark Theme" : "Day Theme";
  }

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  } catch (error) {
    console.error(error);
  }
}

function initializeTheme() {
  applyTheme(getStoredTheme());
}

function normalizePresentationTemplate(value) {
  return String(value || "").trim().toLowerCase() === PRESENTATION_TEMPLATE_OUTCOMES
    ? PRESENTATION_TEMPLATE_OUTCOMES
    : PRESENTATION_TEMPLATE_CLASSIC;
}

function getPresentationTemplateLabel(template = state.presentationTemplate) {
  return normalizePresentationTemplate(template) === PRESENTATION_TEMPLATE_OUTCOMES
    ? "Learning Outcomes"
    : "Classic Stage";
}

function getStoredPresentationTemplate() {
  try {
    const savedTemplate = window.localStorage.getItem(PRESENTATION_TEMPLATE_STORAGE_KEY);
    return normalizePresentationTemplate(savedTemplate);
  } catch (error) {
    console.error(error);
  }

  return PRESENTATION_TEMPLATE_CLASSIC;
}

function normalizeOutcomesTitle(value = "") {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, 72);
}

function getStoredOutcomesTitle() {
  try {
    return normalizeOutcomesTitle(window.localStorage.getItem(OUTCOMES_TITLE_STORAGE_KEY) || "");
  } catch (error) {
    console.error(error);
    return "";
  }
}

function updateOutcomesTitleUi() {
  const titleValue = normalizeOutcomesTitle(state.outcomesTitle);
  if (outcomesTitleInput && outcomesTitleInput.value !== titleValue) {
    outcomesTitleInput.value = titleValue;
  }

  const isOutcomesTemplate = normalizePresentationTemplate(state.presentationTemplate) === PRESENTATION_TEMPLATE_OUTCOMES;
  if (outcomesTitleInput) {
    outcomesTitleInput.disabled = !isOutcomesTemplate;
  }
  if (saveOutcomesTitleBtn) {
    saveOutcomesTitleBtn.disabled = !isOutcomesTemplate;
  }
  if (outcomesTitleStatus) {
    outcomesTitleStatus.textContent = isOutcomesTemplate
      ? (titleValue
        ? `Saved title: ${titleValue}`
        : "The second template uses LEARNING OUTCOMES by default. Save a custom title to show it on screen and in export.")
      : "Switch to Learning Outcomes if you want to save a custom title for that template.";
  }
}

function updatePresentationTemplateUi() {
  const activeTemplate = normalizePresentationTemplate(state.presentationTemplate);
  presentationTemplateInputs.forEach((input) => {
    input.checked = normalizePresentationTemplate(input.value) === activeTemplate;
  });

  if (presentationTemplateStatus) {
    presentationTemplateStatus.textContent = activeTemplate === PRESENTATION_TEMPLATE_OUTCOMES
      ? "Learning Outcomes template is active. Classic is still available any time."
      : "Classic stage is active by default.";
  }
  updateOutcomesTitleUi();
}

function setPresentationTemplate(template, options = {}) {
  const nextTemplate = normalizePresentationTemplate(template);
  const hasChanged = nextTemplate !== normalizePresentationTemplate(state.presentationTemplate);
  state.presentationTemplate = nextTemplate;
  updatePresentationTemplateUi();

  try {
    window.localStorage.setItem(PRESENTATION_TEMPLATE_STORAGE_KEY, nextTemplate);
  } catch (error) {
    console.error(error);
  }

  if (options.announce !== false) {
    setStatus(nextTemplate === PRESENTATION_TEMPLATE_OUTCOMES
      ? "Learning Outcomes template is ready for the presentation screen."
      : "Classic stage template is active.");
  }

  if (!stagePanel.classList.contains("hidden") && options.redraw !== false) {
    drawScene(state.mouthOpen);
  }

  return hasChanged;
}

function initializePresentationTemplate() {
  state.presentationTemplate = getStoredPresentationTemplate();
  state.outcomesTitle = getStoredOutcomesTitle();
  updatePresentationTemplateUi();
}

function setOutcomesTitle(title, options = {}) {
  const normalizedTitle = normalizeOutcomesTitle(title);
  state.outcomesTitle = normalizedTitle;
  try {
    if (normalizedTitle) {
      window.localStorage.setItem(OUTCOMES_TITLE_STORAGE_KEY, normalizedTitle);
    } else {
      window.localStorage.removeItem(OUTCOMES_TITLE_STORAGE_KEY);
    }
  } catch (error) {
    console.error(error);
  }

  updateOutcomesTitleUi();
  drawScene(state.mouthOpen);

  if (!options.silent) {
    setStatus(normalizedTitle
      ? `Learning Outcomes title saved as ${normalizedTitle}.`
      : "Learning Outcomes title cleared. The default title will be used.");
  }
}

function setSpacingToolsStatus(message) {
  if (spacingToolsStatus) {
    spacingToolsStatus.textContent = String(message || "");
  }
}

function getActiveTextInsertionTarget() {
  const activeElement = document.activeElement;
  const candidates = [
    lessonInput,
    mathsSourceInput,
    outcomesTitleInput,
    placeValueNumberInput
  ].filter(Boolean);

  if (
    activeElement
    && candidates.includes(activeElement)
    && typeof activeElement.selectionStart === "number"
    && typeof activeElement.selectionEnd === "number"
  ) {
    return activeElement;
  }

  return lessonInput || candidates[0] || null;
}

function insertTextIntoActiveField(textToInsert = "", label = "Text") {
  const target = getActiveTextInsertionTarget();
  if (!target) {
    setSpacingToolsStatus("No text field is ready for insertion.");
    return;
  }

  const safeInsertText = String(textToInsert || "");
  const start = typeof target.selectionStart === "number" ? target.selectionStart : target.value.length;
  const end = typeof target.selectionEnd === "number" ? target.selectionEnd : target.value.length;
  const nextValue = `${target.value.slice(0, start)}${safeInsertText}${target.value.slice(end)}`;
  target.value = nextValue;
  const nextCursor = start + safeInsertText.length;
  target.focus();
  if (typeof target.setSelectionRange === "function") {
    target.setSelectionRange(nextCursor, nextCursor);
  }
  target.dispatchEvent(new Event("input", { bubbles: true }));
  setSpacingToolsStatus(`${label} inserted into ${target === lessonInput ? "the lesson box" : "the active text field"}.`);
}

function openWorkflowTarget(targetId = "") {
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  if (target.tagName === "DETAILS") {
    target.open = true;
  }

  target.scrollIntoView({
    behavior: "smooth",
    block: targetId === "showScreenBtn" ? "center" : "start"
  });

  if (typeof target.focus === "function") {
    target.focus({ preventScroll: true });
  }
}

function canExportVideo() {
  return typeof canvas.captureStream === "function" && typeof MediaRecorder !== "undefined";
}

function getSupportedVideoMimeType(includeAudioCodecs = false) {
  const videoOnlyMimeTypes = [
    "video/webm;codecs=vp8",
    "video/webm;codecs=vp9",
    "video/webm"
  ];
  const audioCapableMimeTypes = [
    "video/webm;codecs=vp8,opus",
    "video/webm;codecs=vp9,opus",
    "video/webm"
  ];
  const mimeTypes = includeAudioCodecs
    ? [...videoOnlyMimeTypes, ...audioCapableMimeTypes]
    : videoOnlyMimeTypes;

  return mimeTypes.find((type) => MediaRecorder.isTypeSupported(type)) || "video/webm";
}

function createExportMediaRecorder(stream, videoBitsPerSecond) {
  const hasAudioTrack = Boolean(stream?.getAudioTracks?.().length);
  const candidateMimeTypes = hasAudioTrack
    ? [
      getSupportedVideoMimeType(true),
      getSupportedVideoMimeType(false),
      "video/webm"
    ]
    : [
      getSupportedVideoMimeType(false),
      "video/webm"
    ];

  let lastError = null;
  for (const mimeType of candidateMimeTypes.filter(Boolean)) {
    const options = {
      mimeType,
      videoBitsPerSecond
    };
    if (hasAudioTrack) {
      options.audioBitsPerSecond = 192000;
    }

    try {
      return new MediaRecorder(stream, options);
    } catch (error) {
      lastError = error;
      console.error(error);
    }
  }

  if (lastError) {
    throw lastError;
  }

  return new MediaRecorder(stream, { videoBitsPerSecond });
}

function delay(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function getFinalExportHoldMs() {
  return STRICT_SCENE_END_BUFFER_MS;
}

function getExportCompletionTailMs() {
  return getFinalExportHoldMs() + Math.max(0, Math.round((Number(SPEECH_SYNC_VISUAL_PROGRESS_LAG) || 0) * 1000));
}

function getLessonExportCaptureRate() {
  return state.stageVideo.element ? 24 : 20;
}

function getPdfExportCaptureRate(renderMode = "context") {
  return renderMode === "exact" ? 7 : 8;
}

function getExportRenderSpeedMultiplier() {
  const parsedMultiplier = Number(EXPORT_RENDER_SPEED_MULTIPLIER);
  return Number.isFinite(parsedMultiplier) && parsedMultiplier > 0
    ? Math.max(1, parsedMultiplier)
    : 1;
}

function getEffectiveExportRenderSpeedMultiplier(baseRate, targetDurationMs = 0, desiredMultiplier = getExportRenderSpeedMultiplier()) {
  const safeBaseRate = Number.isFinite(Number(baseRate)) ? Math.max(1, Number(baseRate)) : 1;
  const safeTargetDurationMs = Math.max(0, Math.round(Number(targetDurationMs) || 0));
  const safeDesiredMultiplier = Number.isFinite(Number(desiredMultiplier)) && Number(desiredMultiplier) > 0
    ? Number(desiredMultiplier)
    : 1;
  const captureCappedMultiplier = Math.max(1, Math.min(safeDesiredMultiplier, MAX_EXPORT_CAPTURE_FPS / safeBaseRate));

  if (safeTargetDurationMs >= VERY_LONG_EXPORT_THRESHOLD_MS) {
    return Math.max(1, Math.min(captureCappedMultiplier, 2));
  }

  if (safeTargetDurationMs >= LONG_EXPORT_THRESHOLD_MS) {
    return Math.max(1, Math.min(captureCappedMultiplier, 3));
  }

  return captureCappedMultiplier;
}

function getAcceleratedExportCaptureRate(baseRate, renderSpeedMultiplier = getExportRenderSpeedMultiplier()) {
  const safeBaseRate = Number.isFinite(Number(baseRate)) ? Math.max(1, Number(baseRate)) : 1;
  const safeMultiplier = Number.isFinite(Number(renderSpeedMultiplier)) ? Math.max(1, Number(renderSpeedMultiplier)) : 1;
  return Math.min(
    MAX_EXPORT_CAPTURE_FPS,
    Math.max(safeBaseRate, Math.round(safeBaseRate * safeMultiplier))
  );
}

function setExportCaptureRate(fps) {
  const safeFps = Number.isFinite(Number(fps)) ? Math.max(1, Number(fps)) : 0;
  state.exportCapture.minFrameIntervalMs = safeFps ? (1000 / safeFps) : 0;
  state.exportCapture.lastFrameAt = 0;
}

function clearExportCaptureRate() {
  state.exportCapture.minFrameIntervalMs = 0;
  state.exportCapture.lastFrameAt = 0;
}

function getLessonExportBitrate(quality = getEffectiveExportQuality()) {
  if (quality === "4k") {
    return state.stageVideo.element ? 18000000 : 22000000;
  }

  if (quality === "2k") {
    return state.stageVideo.element ? 11000000 : 14000000;
  }

  return state.stageVideo.element ? 7000000 : 9000000;
}

function getPdfExportBitrate(quality = getEffectiveExportQuality(), renderMode = "context") {
  const exactMode = renderMode === "exact";
  if (quality === "4k") {
    return exactMode ? 12000000 : 18000000;
  }

  if (quality === "2k") {
    return exactMode ? 8000000 : 11000000;
  }

  return exactMode ? 5000000 : 7000000;
}

async function fetchWithTimeout(resource, options = {}, timeoutMs = 2500) {
  if (!Number.isFinite(Number(timeoutMs)) || Number(timeoutMs) <= 0) {
    return fetch(resource, options);
  }

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(resource, {
      ...options,
      signal: controller.signal
    });
  } catch (error) {
    if (error?.name === "AbortError") {
      throw new Error(`Request timed out after ${timeoutMs}ms.`);
    }

    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function applyHighQualityImageRendering(targetContext) {
  if (!targetContext) {
    return;
  }

  targetContext.imageSmoothingEnabled = true;
  if ("imageSmoothingQuality" in targetContext) {
    targetContext.imageSmoothingQuality = "high";
  }
}

function resetCanvasSurface() {
  const width = canvas.width;
  const height = canvas.height;
  canvas.width = width;
  canvas.height = height;
  ctx = canvas.getContext("2d");
  applyHighQualityImageRendering(ctx);
}

function useCanvasSurface(nextCanvas) {
  canvas = nextCanvas;
  ctx = canvas.getContext("2d");
  applyHighQualityImageRendering(ctx);
}

function isSafeImageSource(source = "") {
  return typeof source === "string" && (source.startsWith("data:image/") || source.startsWith("blob:"));
}

function isCanvasOriginClean() {
  try {
    ctx.getImageData(0, 0, 1, 1);
    return true;
  } catch (error) {
    return false;
  }
}

function loadImageElementSource(element, source) {
  return new Promise((resolve, reject) => {
    const handleLoad = () => {
      element.removeEventListener("load", handleLoad);
      element.removeEventListener("error", handleError);
      resolve(element);
    };
    const handleError = () => {
      element.removeEventListener("load", handleLoad);
      element.removeEventListener("error", handleError);
      reject(new Error("The logo image could not be loaded safely for export."));
    };

    element.addEventListener("load", handleLoad, { once: true });
    element.addEventListener("error", handleError, { once: true });
    element.src = source;
  });
}

function triggerFileDownload(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();

  window.setTimeout(() => {
    anchor.remove();
    URL.revokeObjectURL(url);
  }, 1500);
}

async function requestVideoSaveHandle(suggestedName = "learning-outcomes-video.mp4") {
  // Direct browser download is more reliable than the picker path here.
  // The picker can make a completed render look like a failed export if the
  // browser blocks or cancels the save dialog after recording has finished.
  return null;
}

async function streamResponseToFileHandle(response, fileHandle) {
  if (!response?.ok) {
    throw new Error("The video export response was not ready to save.");
  }

  const writable = await fileHandle.createWritable();

  try {
    if (response.body && typeof response.body.getReader === "function") {
      const reader = response.body.getReader();

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }

        if (value?.length) {
          await writable.write(value);
        }
      }
    } else {
      await writable.write(await response.blob());
    }

    await writable.close();
  } catch (error) {
    try {
      await writable.abort();
    } catch (abortError) {
      console.error(abortError);
    }

    throw error;
  }
}

async function saveBlobWithHandle(fileHandle, blob) {
  const writable = await fileHandle.createWritable();

  try {
    await writable.write(blob);
    await writable.close();
  } catch (error) {
    try {
      await writable.abort();
    } catch (abortError) {
      console.error(abortError);
    }

    throw error;
  }
}

function splitIntoLines(text) {
  const normalizedText = String(text || "").replace(/\r\n|\r/g, "\n");
  const smartText = normalizedText
    .replace(/(?<!\n)\n(?!\n)/g, (match, offset, string) => {
      const nextSegment = string.substring(offset + 1).trimStart();
      if (/^[•*-]\s|^#+|^[0-9]+\./.test(nextSegment)) {
        return "\n";
      }
      return " ";
    });

  return smartText
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function splitIntoWords(text) {
  return text.trim().split(/\s+/).filter(Boolean);
}

function splitIntoTokens(text) {
  return Array.from(text || "");
}

function convertTwoDigitNumberToWords(value) {
  const safeValue = Math.max(0, Math.floor(Number(value) || 0));
  if (safeValue < 20) {
    return SMALL_NUMBER_WORDS[safeValue] || "";
  }

  const tensPart = Math.floor(safeValue / 10);
  const onesPart = safeValue % 10;
  return onesPart
    ? `${TENS_NUMBER_WORDS[tensPart]} ${SMALL_NUMBER_WORDS[onesPart]}`
    : TENS_NUMBER_WORDS[tensPart];
}

function convertThreeDigitNumberToWords(value) {
  const safeValue = Math.max(0, Math.floor(Number(value) || 0));
  if (safeValue < 100) {
    return convertTwoDigitNumberToWords(safeValue);
  }

  const hundredsPart = Math.floor(safeValue / 100);
  const remainder = safeValue % 100;
  const prefix = `${SMALL_NUMBER_WORDS[hundredsPart]} hundred`;
  return remainder ? `${prefix} and ${convertTwoDigitNumberToWords(remainder)}` : prefix;
}

function convertIntegerToIndianWords(value) {
  const numericValue = Number(String(value || "").replace(/,/g, ""));
  if (!Number.isFinite(numericValue)) {
    return String(value || "");
  }

  const safeValue = Math.trunc(numericValue);
  if (safeValue === 0) {
    return "zero";
  }

  const signPrefix = safeValue < 0 ? "minus " : "";
  let remainder = Math.abs(safeValue);
  const parts = [];
  const placeValues = [
    { size: 10000000, label: "crore" },
    { size: 100000, label: "lakh" },
    { size: 1000, label: "thousand" }
  ];

  placeValues.forEach(({ size, label }) => {
    if (remainder >= size) {
      const chunk = Math.floor(remainder / size);
      parts.push(`${convertIntegerToIndianWords(chunk)} ${label}`);
      remainder %= size;
    }
  });

  if (remainder >= 100) {
    const hundredsPart = Math.floor(remainder / 100);
    parts.push(`${SMALL_NUMBER_WORDS[hundredsPart]} hundred`);
    remainder %= 100;
  }

  if (remainder > 0) {
    if (parts.length && Math.abs(safeValue) >= 100) {
      parts.push(`and ${convertTwoDigitNumberToWords(remainder)}`);
    } else {
      parts.push(convertTwoDigitNumberToWords(remainder));
    }
  }

  return `${signPrefix}${parts.join(" ").replace(/\s+/g, " ").trim()}`.trim();
}

function convertIntegerToInternationalWords(value) {
  const numericValue = Number(String(value || "").replace(/,/g, ""));
  if (!Number.isFinite(numericValue)) {
    return String(value || "");
  }

  const safeValue = Math.trunc(numericValue);
  if (safeValue === 0) {
    return "zero";
  }

  const signPrefix = safeValue < 0 ? "minus " : "";
  let remainder = Math.abs(safeValue);
  const parts = [];
  const placeValues = [
    { size: 1000000000, label: "billion" },
    { size: 1000000, label: "million" },
    { size: 1000, label: "thousand" }
  ];

  placeValues.forEach(({ size, label }) => {
    if (remainder >= size) {
      const chunk = Math.floor(remainder / size);
      parts.push(`${convertThreeDigitNumberToWords(chunk)} ${label}`);
      remainder %= size;
    }
  });

  if (remainder >= 100) {
    parts.push(convertThreeDigitNumberToWords(remainder));
    remainder = 0;
  }

  if (remainder > 0) {
    parts.push(convertTwoDigitNumberToWords(remainder));
  }

  return `${signPrefix}${parts.join(" ").replace(/\s+/g, " ").trim()}`.trim();
}

function convertDecimalNumberToWords(value) {
  const rawValue = String(value || "").replace(/,/g, "").trim();
  if (!rawValue || !/^-?\d+(?:\.\d+)?$/.test(rawValue)) {
    return rawValue;
  }

  if (!rawValue.includes(".")) {
    return convertIntegerToIndianWords(rawValue);
  }

  const [wholePart, decimalPart] = rawValue.split(".");
  const wholeWords = convertIntegerToIndianWords(wholePart);
  const decimalWords = decimalPart
    .split("")
    .map((digit) => SMALL_NUMBER_WORDS[Number(digit)] || digit)
    .join(" ");
  return `${wholeWords} point ${decimalWords}`.trim();
}

function verbalizeFractionToken(match, numerator, denominator) {
  const top = convertDecimalNumberToWords(numerator);
  const bottom = convertDecimalNumberToWords(denominator);
  if (!top || !bottom) {
    return match;
  }

  return `${top} by ${bottom}`;
}

function expandMeasuredUnitsForSpeech(text = "") {
  let spokenText = String(text || "");

  SPOKEN_MEASUREMENT_UNITS.forEach(({ short, singular, plural }) => {
    const quantityPattern = new RegExp(`(\\d+(?:,\\d+)*(?:\\.\\d+)?)\\s*${short}\\b`, "gi");
    spokenText = spokenText.replace(quantityPattern, (match, valueText) => {
      const numericValue = Number(String(valueText || "").replace(/,/g, ""));
      const unitLabel = Number.isFinite(numericValue) && Math.abs(numericValue) === 1 ? singular : plural;
      return `${valueText} ${unitLabel}`;
    });
  });

  return spokenText;
}

function expandMetricUnitTokensForSpeech(text = "") {
  let spokenText = String(text || "");
  const metricTokenMatches = spokenText.match(/\b(?:km|hm|dam|m|dm|cm|mm)\b/gi) || [];
  const shouldExpandStandaloneUnits = (
    metricTokenMatches.length >= 2
    || /\b(metric|convert|unit|ladder|step)\b/i.test(spokenText)
    || /[\u2192=<>]/.test(spokenText)
  );

  if (!shouldExpandStandaloneUnits) {
    return spokenText;
  }

  SPOKEN_MEASUREMENT_UNITS
    .filter(({ short }) => /^(km|hm|dam|m|dm|cm|mm)$/i.test(short))
    .forEach(({ short, singular }) => {
      const unitPattern = new RegExp(`\\b${short}\\b`, "gi");
      spokenText = spokenText.replace(unitPattern, singular);
    });

  return spokenText;
}

function convertOrdinalSuffixToWords(valueText = "", suffix = "") {
  const numericValue = Number(String(valueText || "").replace(/,/g, ""));
  if (!Number.isFinite(numericValue)) {
    return `${valueText}${suffix}`;
  }

  if (ORDINAL_WORD_MAP[numericValue]) {
    return ORDINAL_WORD_MAP[numericValue];
  }

  const baseWords = convertDecimalNumberToWords(valueText);
  if (/y$/i.test(baseWords)) {
    return baseWords.replace(/y$/i, "ieth");
  }

  return `${baseWords}th`;
}

function normalizeNarrationSourceText(text = "") {
  return String(text || "")
    .replace(/\bRs\.?\s*(?=\d)/gi, "rupees ")
    .replace(/\bINR\s*(?=\d)/gi, "rupees ")
    .replace(/₹\s*/g, "rupees ")
    .replace(/\bNo\.?\s*(\d+)/gi, "number $1")
    .replace(/\bQ(?:uestion)?\.?\s*(\d+)/gi, "question $1")
    .replace(/\bAns\.?\b/gi, "answer")
    .replace(/\bEx\.?\b/gi, "exercise")
    .replace(/\bStd\.?\b/gi, "standard")
    .replace(/\bPg(?:age)?\.?\s*(\d+)/gi, "page $1")
    .replace(/\bQ\.?\s*No\.?\b/gi, "question number ")
    .replace(/\b(\d+)(st|nd|rd|th)\b/gi, (match, valueText, suffix) => convertOrdinalSuffixToWords(valueText, suffix))
    .replace(/(?<=\d)\s*[xX*]\s*(?=\d)/g, " multiplied by ")
    .replace(/(?<=\d)\s*\/\s*(?=\d)/g, " / ")
    .replace(/(?<=\d)\s*-\s*(?=\d)/g, " minus ")
    .replace(/(?<=\d)\s*\+\s*(?=\d)/g, " plus ")
    .replace(/(?<=\d)\s*=\s*(?=\d)/g, " equals ")
    .replace(/\btable of\s+(\d+)/gi, (match, valueText) => `table of ${valueText}`)
    .replace(/\s+/g, " ")
    .trim();
}

function expandTeachingTermsForSpeech(text = "") {
  let spokenText = normalizeNarrationSourceText(text);
  spokenText = expandMetricUnitTokensForSpeech(expandMeasuredUnitsForSpeech(spokenText));

  SPOKEN_TERM_REPLACEMENTS.forEach(({ pattern, replacement }) => {
    spokenText = spokenText.replace(pattern, replacement);
  });

  return spokenText
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function verbalizeMathForSpeech(text) {
  return expandTeachingTermsForSpeech(text)
    .replace(/(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/g, verbalizeFractionToken)
    .replace(/(\d+(?:\.\d+)?)\s*:\s*(\d+(?:\.\d+)?)/g, "$1 ratio $2")
    .replace(/\*/g, " multiplied by ")
    .replace(/(\d+(?:,\d+)*(?:\.\d+)?)/g, (match) => convertDecimalNumberToWords(match))
    .replace(/×/g, " multiplied by ")
    .replace(/÷/g, " divided by ")
    .replace(/\//g, " divided by ")
    .replace(/\+/g, " plus ")
    .replace(/(?<!\d)-(?=\d)/g, " minus ")
    .replace(/(?<=\d)\s*-\s*(?=\d)/g, " minus ")
    .replace(/\s+-\s+/g, " minus ")
    .replace(/=/g, " equals ")
    .replace(/≤/g, " less than or equal to ")
    .replace(/≥/g, " greater than or equal to ")
    .replace(/≠/g, " not equal to ")
    .replace(/</g, " less than ")
    .replace(/>/g, " greater than ")
    .replace(/\^/g, " to the power of ")
    .replace(/%/g, " percent ")
    .replace(/\s+/g, " ")
    .trim();
}

function translateStandaloneMathText(text) {
  const compact = String(text || "").trim();
  if (!compact) {
    return "";
  }

  const fractionMatch = compact.match(/^(-?\d+(?:\.\d+)?)\s*\/\s*(-?\d+(?:\.\d+)?)$/);
  if (fractionMatch) {
    return verbalizeFractionToken(compact, fractionMatch[1], fractionMatch[2]);
  }

  if (/^-?\d+(?:,\d+)*(?:\.\d+)?$/.test(compact)) {
    return convertDecimalNumberToWords(compact);
  }

  return compact;
}

function buildDisplayedLines(text) {
  return splitIntoLines(text);
}

function buildNarrationText(text) {
  return splitIntoLines(text)
    .map((line) => {
      const trimmed = line.replace(/^\s*#{1,3}\s+/, "").replace(/\s+/g, " ").trim();
      if (!trimmed) {
        return "";
      }

      const spokenLine = verbalizeMathForSpeech(trimmed);
      return /[.!?]$/.test(spokenLine) ? spokenLine : `${spokenLine}.`;
    })
    .filter(Boolean)
    .join(" ");
}

function buildNarrationRequestPayload(text) {
  return buildNarrationRequestPayloadFromNarrationText(buildNarrationText(text));
}

function buildNarrationRequestPayloadFromNarrationText(narrationText = "") {
  return {
    text: String(narrationText || "").trim(),
    voiceProfile: {
      ...ANJALI_TTS_PROFILE,
      ...NARRATION_STYLE_CONFIG
    },
    generationOptions: ANJALI_GENERATION_OPTIONS,
    narrationStylePrompt: NARRATION_STYLE_PROMPT
  };
}

function splitNarrationTextIntoChunks(narrationText, maxChunkLength = NARRATION_CHUNK_MAX_LENGTH) {
  const safeNarrationText = String(narrationText || "").trim();
  if (!safeNarrationText) {
    return [];
  }

  if (safeNarrationText.length <= maxChunkLength) {
    return [safeNarrationText];
  }

  const sentenceParts = safeNarrationText.split(/(?<=[.!?;:])\s+/).filter(Boolean);
  const chunks = [];
  let currentChunk = "";

  const pushCurrentChunk = () => {
    if (currentChunk.trim()) {
      chunks.push(currentChunk.trim());
    }
    currentChunk = "";
  };

  sentenceParts.forEach((sentence) => {
    const safeSentence = sentence.trim();
    if (!safeSentence) {
      return;
    }

    if (safeSentence.length > maxChunkLength) {
      pushCurrentChunk();
      const words = safeSentence.split(/\s+/).filter(Boolean);
      let segment = "";

      words.forEach((word) => {
        const candidate = segment ? `${segment} ${word}` : word;
        if (candidate.length > maxChunkLength && segment) {
          chunks.push(`${segment.trim()},`);
          segment = word;
        } else {
          segment = candidate;
        }
      });

      if (segment.trim()) {
        chunks.push(segment.trim());
      }
      return;
    }

    const candidate = currentChunk ? `${currentChunk} ${safeSentence}` : safeSentence;
    if (candidate.length > maxChunkLength && currentChunk) {
      pushCurrentChunk();
      currentChunk = safeSentence;
    } else {
      currentChunk = candidate;
    }
  });

  pushCurrentChunk();
  return chunks.length ? chunks : [safeNarrationText];
}

function splitNarrationIntoChunks(text, maxChunkLength = NARRATION_CHUNK_MAX_LENGTH) {
  return splitNarrationTextIntoChunks(buildNarrationText(text), maxChunkLength);
}

function getNarrationChunkConfig(voice) {
  if (voice === "anjali") {
    return {
      maxChunkLength: ANJALI_NARRATION_CHUNK_MAX_LENGTH,
      threshold: ANJALI_NARRATION_CHUNK_THRESHOLD
    };
  }

  return {
    maxChunkLength: NARRATION_CHUNK_MAX_LENGTH,
    threshold: NARRATION_CHUNK_THRESHOLD
  };
}

const DEFAULT_NARRATION_REQUEST_TIMEOUT_MS = 45000;
const LONG_NARRATION_REQUEST_BASE_TIMEOUT_MS = 60000;
const LONG_NARRATION_REQUEST_PER_WORD_TIMEOUT_MS = 35;
const LONG_NARRATION_REQUEST_MAX_TIMEOUT_MS = 600000;
const ANJALI_CLONE_HEALTH_TIMEOUT_MS = 15000;
const ANJALI_CLONE_HEALTH_GRACE_MS = 45000;
const revealWeightCache = new Map();
const speechSyncProfileCache = new Map();

function getLongNarrationRequestTimeoutMs(text) {
  const narrationText = buildNarrationText(text);
  const wordCount = splitIntoWords(narrationText).length;
  return clamp(
    LONG_NARRATION_REQUEST_BASE_TIMEOUT_MS + (wordCount * LONG_NARRATION_REQUEST_PER_WORD_TIMEOUT_MS),
    LONG_NARRATION_REQUEST_BASE_TIMEOUT_MS,
    LONG_NARRATION_REQUEST_MAX_TIMEOUT_MS
  );
}

function getExpectedNarrationDurationMsForText(text = "") {
  const narrationText = buildNarrationText(text);
  if (!narrationText) {
    return 0;
  }

  return Math.max(0, Math.round(getSpeechSyncProfile(narrationText).totalDurationMs || 0));
}

function isNarrationDurationTooShortForText(text = "", durationMs = 0, voice = "anjali") {
  if (voice !== "anjali") {
    return false;
  }

  const narrationText = String(text || "").trim();
  const safeDurationMs = Math.max(0, Math.round(Number(durationMs) || 0));
  const wordCount = splitIntoWords(narrationText).length;
  if (!narrationText || wordCount < 14 || safeDurationMs <= 0) {
    return false;
  }

  const expectedDurationMs = Math.max(0, Math.round(getSpeechSyncProfile(narrationText).totalDurationMs || 0));
  if (expectedDurationMs <= 0) {
    return false;
  }

  return safeDurationMs < Math.max(3200, Math.round(expectedDurationMs * 0.55));
}

function splitNarrationChunkForRetry(narrationText = "") {
  const safeText = String(narrationText || "").trim();
  if (!safeText) {
    return [];
  }

  const retryChunks = splitNarrationTextIntoChunks(
    safeText,
    Math.max(90, Math.min(160, Math.floor(safeText.length * 0.5)))
  );
  if (retryChunks.length > 1) {
    return retryChunks;
  }

  const words = safeText.split(/\s+/).filter(Boolean);
  if (words.length < 2) {
    return [safeText];
  }

  const midpoint = Math.ceil(words.length / 2);
  return [
    words.slice(0, midpoint).join(" "),
    words.slice(midpoint).join(" ")
  ].filter(Boolean);
}

function estimatePauseMsFromText(text = "") {
  const safeText = String(text || "");
  const commaCount = (safeText.match(/,/g) || []).length;
  const softPauseCount = (safeText.match(/[;:]/g) || []).length;
  const sentencePauseCount = (safeText.match(/[.!?]/g) || []).length;
  const lineBreakCount = (safeText.match(/\n+/g) || []).length;
  return (
    (commaCount * STRICT_INTER_WORD_PAUSE_MS)
    + (softPauseCount * STRICT_INTER_WORD_PAUSE_MS)
    + (sentencePauseCount * STRICT_SENTENCE_PAUSE_MS)
    + (lineBreakCount * STRICT_SENTENCE_PAUSE_MS)
  );
}

function getRevealTokenWeight(token, previousToken = "", nextToken = "") {
  if (token === "\n") {
    return 3.4;
  }

  if (/\s/.test(token)) {
    return 0.18;
  }

  if (token === "," ) {
    return 2.1;
  }

  if (token === ";" || token === ":") {
    return 2.5;
  }

  if (token === "." || token === "!" || token === "?") {
    if (nextToken === token) {
      return 1.2;
    }
    return 3.2;
  }

  if (token === "-" || token === "–" || token === "—") {
    return 1.3;
  }

  if ((token === "\"" || token === "'") && /[.!?,;:]/.test(previousToken || "")) {
    return 0.45;
  }

  return 1;
}

function getRevealWeightProfile(text = "") {
  const cacheKey = String(text || "");
  const cachedProfile = revealWeightCache.get(cacheKey);
  if (cachedProfile) {
    return cachedProfile;
  }

  const tokens = splitIntoTokens(cacheKey);
  const cumulativeWeights = [];
  let totalWeight = 0;

  tokens.forEach((token, index) => {
    const previousToken = index > 0 ? tokens[index - 1] : "";
    const nextToken = index < tokens.length - 1 ? tokens[index + 1] : "";
    totalWeight += getRevealTokenWeight(token, previousToken, nextToken);
    cumulativeWeights.push(totalWeight);
  });

  const profile = {
    tokens,
    cumulativeWeights,
    totalWeight
  };

  revealWeightCache.set(cacheKey, profile);
  if (revealWeightCache.size > 80) {
    const oldestKey = revealWeightCache.keys().next().value;
    revealWeightCache.delete(oldestKey);
  }

  return profile;
}

function getVisibleTokenCountForProgress(text = "", progress = 0) {
  const safeProgress = clamp(progress, 0, 1);
  const profile = getRevealWeightProfile(text);
  if (!profile.tokens.length || safeProgress <= 0) {
    return 0;
  }

  if (safeProgress >= 1 || profile.totalWeight <= 0) {
    return profile.tokens.length;
  }

  const targetWeight = profile.totalWeight * safeProgress;
  let low = 0;
  let high = profile.cumulativeWeights.length - 1;

  while (low < high) {
    const middle = Math.floor((low + high) / 2);
    if (profile.cumulativeWeights[middle] >= targetWeight) {
      high = middle;
    } else {
      low = middle + 1;
    }
  }

  return clamp(low + 1, 0, profile.tokens.length);
}

function getVisibleTextForProgress(text = "", progress = 0, options = {}) {
  const safeText = String(text || "");
  if (!safeText) {
    return "";
  }

  const linear = options.linear === true;
  const profile = getRevealWeightProfile(safeText);
  const visibleCount = linear
    ? clamp(Math.round(profile.tokens.length * clamp(progress, 0, 1)), 0, profile.tokens.length)
    : getVisibleTokenCountForProgress(safeText, progress);
  return profile.tokens.slice(0, visibleCount).join("");
}

function getVisibleChunkText(chunkText = "", speechProgress = 0) {
  const safeChunkText = String(chunkText || "");
  if (!safeChunkText) {
    return "";
  }

  if (/^\r?\n+$/.test(safeChunkText) || /^[ \t]+$/.test(safeChunkText) || /^[,.;:!?()[\]{}]+$/.test(safeChunkText)) {
    return safeChunkText;
  }

  const commitThreshold = getSpeechSyncCommitThreshold(safeChunkText);
  if (commitThreshold < 1) {
    return clamp(speechProgress, 0, 1) >= commitThreshold ? safeChunkText : "";
  }

  const delayedProgress = clamp(
    (clamp(speechProgress, 0, 1) - SPEECH_SYNC_REVEAL_START)
      / Math.max(0.01, SPEECH_SYNC_REVEAL_END - SPEECH_SYNC_REVEAL_START),
    0,
    1
  );

  return getVisibleTextForProgress(safeChunkText, delayedProgress);
}

function getSpeechSyncTokenSpeechMs(chunkText = "") {
  const safeChunk = String(chunkText || "");
  const spokenCore = verbalizeMathForSpeech(safeChunk)
    .trim()
    .replace(/^[^A-Za-z0-9]+/, "")
    .replace(/[^A-Za-z0-9]+$/, "");
  if (!spokenCore) {
    return STRICT_INTER_WORD_PAUSE_MS;
  }

  const headingBoost = /^\s*#{1,3}\s+/i.test(safeChunk) || /^[A-Z][A-Za-z0-9 ,()/-]{0,48}:?\s*$/.test(spokenCore)
    ? 1.18
    : 1;
  const mathsBoost = /[=+\-xX*/÷×<>√^%]/.test(safeChunk) ? 1.12 : 1;
  const numberBoost = /\d/.test(safeChunk) ? 1.08 : 1;
  const emphasisBoost = /(squared|cubed|root|equals|centimeter|kilometer|meter|decimal|fraction)/i.test(spokenCore)
    ? 1.1
    : 1;
  const totalBoost = headingBoost * mathsBoost * numberBoost * emphasisBoost;

  return Math.max(360, Math.round(spokenCore.length * 145 * totalBoost));
}

function getSpeechSyncTokenPauseMs(chunkText = "") {
  const safeChunk = String(chunkText || "");
  if (!safeChunk.trim()) {
    return 0;
  }

  if (/^\s*#{1,3}\s+/i.test(safeChunk)) {
    return STRICT_HEADING_PAUSE_MS;
  }

  if (/\n\s*\n/.test(safeChunk)) {
    return STRICT_HEADING_PAUSE_MS;
  }

  if (/\n/.test(safeChunk) || /[.!?]["')\]]*\s*$/i.test(safeChunk)) {
    return STRICT_SENTENCE_PAUSE_MS;
  }

  if (/[,:;]["')\]]*\s*$/i.test(safeChunk)) {
    return STRICT_SOFT_SENTENCE_PAUSE_MS;
  }

  return STRICT_INTER_WORD_PAUSE_MS;
}

function getSpeechSyncCommitThreshold(chunkText = "") {
  const safeChunk = String(chunkText || "");
  const spokenCore = verbalizeMathForSpeech(safeChunk)
    .trim()
    .replace(/^[^A-Za-z0-9]+/, "")
    .replace(/[^A-Za-z0-9]+$/, "");
  if (!spokenCore) {
    return SPEECH_SYNC_WORD_COMMIT_MAX;
  }

  const characterCount = spokenCore.replace(/\s+/g, "").length;
  const punctuationBoost = /[,:;.!?]["')\]]*\s*$/i.test(safeChunk) ? 0.08 : 0;
  const mathsBoost = /[=+\-xX*/÷×<>√^%]/.test(safeChunk) ? 0.05 : 0;
  const lengthBoost = clamp((characterCount - 6) * 0.018, 0, 0.16);
  return clamp(
    SPEECH_SYNC_WORD_COMMIT_MIN + punctuationBoost + mathsBoost + lengthBoost,
    SPEECH_SYNC_WORD_COMMIT_MIN,
    SPEECH_SYNC_WORD_COMMIT_MAX
  );
}

function tokenizeSpeechSyncDisplayText(text = "") {
  const safeText = String(text || "");
  const tokenPattern = /(\r?\n+|[ \t]+|\d+(?:,\d+)*(?:\.\d+)?(?:\/\d+(?:,\d+)*(?:\.\d+)?)?|[A-Za-z]+(?:['’-][A-Za-z]+)*|<=|>=|==|!=|[=+\-×÷*/<>≤≥≠^%:;,.!?()[\]{}]|.)/g;
  const tokens = [];
  let match = tokenPattern.exec(safeText);

  while (match) {
    tokens.push({
      text: match[0],
      startIndex: match.index,
      endIndex: match.index + match[0].length
    });
    match = tokenPattern.exec(safeText);
  }

  return tokens;
}

function getSpeechSyncLineContext(lineText = "") {
  const safeLine = String(lineText || "");
  const trimmed = safeLine.trim();
  if (!trimmed) {
    return {
      isHeading: false,
      isTeachingCue: false,
      isMathHeavy: false,
      isBlank: true
    };
  }

  return {
    isHeading: /^\s*#{1,3}\s+/.test(safeLine)
      || (
        trimmed.length <= 58
        && /^[A-Z][A-Za-z0-9 ,&()/-]*:?$/.test(trimmed)
        && !/[=+\-×÷*/<>≤≥≠^%]/.test(trimmed)
      ),
    isTeachingCue: /^(example|step|answer|rule|quiz|question|exercise|practice|solve|convert|compare)\b/i.test(trimmed),
    isMathHeavy: /[=+\-×÷*/<>≤≥≠^%]/.test(safeLine)
      || (/\d/.test(safeLine) && /\b(cm|mm|km|hm|dam|m|dm|kg|gm|ml|decimal|fraction|table|percent)\b/i.test(safeLine)),
    isBlank: false
  };
}

function getSpeechSyncUnitSpokenText(displayText = "") {
  const safeText = String(displayText || "");
  if (!safeText.trim() || /^[,.;:!?()[\]{}]+$/.test(safeText)) {
    return "";
  }

  return verbalizeMathForSpeech(safeText)
    .replace(/\s+/g, " ")
    .trim();
}

function estimateSyllableWeight(word) {
  const safeWord = String(word || "").toLowerCase().replace(/[^a-z]/g, "");
  if (!safeWord) return 1;
  const syllableWord = safeWord.replace(/(?:[^laeiouy]|ed|e)$/, '').replace(/^y/, '');
  const syllables = syllableWord.match(/[aeiouy]{1,2}/g);
  return syllables ? Math.max(1, syllables.length) : 1;
}

function getSpeechSyncUnitSpeechMs(unit) {
  if (!unit?.spokenText) {
    return 0;
  }

  const words = splitIntoWords(unit.spokenText);
  const wordCount = words.length;
  const syllableCount = words.reduce((sum, word) => sum + estimateSyllableWeight(word), 0);
  const characterCount = unit.spokenText.replace(/\s+/g, "").length;
  const contextBoost = [
    unit.lineContext?.isHeading ? 1.18 : 1,
    unit.lineContext?.isTeachingCue ? 1.1 : 1,
    unit.lineContext?.isMathHeavy ? 1.08 : 1,
    /\d/.test(unit.displayText) ? 1.06 : 1,
    /[=+\-×÷*/<>≤≥≠^%]/.test(unit.displayText) ? 1.12 : 1
  ].reduce((product, value) => product * value, 1);

  const baseSpeechMs = (wordCount * 80) + (syllableCount * 120) + (characterCount * 15);
  return Math.max(180, Math.round(baseSpeechMs * contextBoost));
}

function getSpeechSyncUnitPauseMs(unit, nextUnit = null) {
  const displayText = String(unit?.displayText || "");
  if (!displayText) {
    return 0;
  }

  if (/^\r?\n+$/.test(displayText)) {
    if ((unit?.lineContext?.isHeading || unit?.lineContext?.isTeachingCue) || displayText.length > 1) {
      return STRICT_HEADING_PAUSE_MS;
    }
    return STRICT_SENTENCE_PAUSE_MS;
  }

  if (/^[ \t]+$/.test(displayText)) {
    return Math.round(STRICT_INTER_WORD_PAUSE_MS * 0.3);
  }

  if (/^[.!?]+$/.test(displayText)) {
    return STRICT_SENTENCE_PAUSE_MS;
  }

  if (/^[:;]+$/.test(displayText)) {
    return STRICT_SOFT_SENTENCE_PAUSE_MS;
  }

  if (/^,+$/.test(displayText)) {
    return Math.round(STRICT_INTER_WORD_PAUSE_MS * 0.9);
  }

  if (!nextUnit || /^\r?\n+$/.test(nextUnit.displayText || "")) {
    return unit?.lineContext?.isHeading ? STRICT_HEADING_PAUSE_MS : Math.round(STRICT_INTER_WORD_PAUSE_MS * 0.4);
  }

  return 0;
}

function analyzeSpeechSyncUnits(text = "") {
  const safeText = String(text || "");
  const lineContexts = safeText.split(/\r?\n/).map((line) => getSpeechSyncLineContext(line));
  let lineIndex = 0;

  return tokenizeSpeechSyncDisplayText(safeText).map((token) => {
    const lineContext = lineContexts[Math.min(lineIndex, Math.max(0, lineContexts.length - 1))] || getSpeechSyncLineContext("");
    const unit = {
      displayText: token.text,
      startIndex: token.startIndex,
      endIndex: token.endIndex,
      lineContext,
      spokenText: getSpeechSyncUnitSpokenText(token.text)
    };

    if (/^\r?\n+$/.test(token.text)) {
      lineIndex += (token.text.match(/\n/g) || []).length;
    }

    return unit;
  });
}

function getSpeechSyncProfile(text = "", targetDurationMs = 0) {
  const safeText = String(text || "");
  const safeTargetDurationMs = Math.max(0, Math.round(Number(targetDurationMs) || 0));
  const cacheKey = `${safeText}::${safeTargetDurationMs}`;
  const cachedProfile = speechSyncProfileCache.get(cacheKey);
  if (cachedProfile) {
    return cachedProfile;
  }

  const units = analyzeSpeechSyncUnits(safeText);

  if (!units.length) {
    const emptyProfile = {
      units: [],
      totalDurationMs: Math.max(6000, safeTargetDurationMs || 6000)
    };
    speechSyncProfileCache.set(cacheKey, emptyProfile);
    return emptyProfile;
  }

  const estimatedUnits = units.map((unit, index) => ({
    ...unit,
    speechMs: getSpeechSyncUnitSpeechMs(unit),
    pauseMs: 0
  }));

  estimatedUnits.forEach((unit, index) => {
    unit.pauseMs = getSpeechSyncUnitPauseMs(unit, estimatedUnits[index + 1] || null);
  });

  const baseDurationMs = estimatedUnits.reduce((sum, unit) => sum + unit.speechMs + unit.pauseMs, 0);
  const scaledDurationMs = safeTargetDurationMs > 0 ? safeTargetDurationMs : baseDurationMs;
  const scale = baseDurationMs > 0 ? (scaledDurationMs / baseDurationMs) : 1;
  let cursorMs = 0;

  let normalizedUnits = estimatedUnits.map((unit, index) => {
    const scaledSpeechMs = unit.spokenText
      ? Math.max(140, Math.round(unit.speechMs * scale))
      : 0;
    const scaledPauseMs = Math.max(
      index === estimatedUnits.length - 1 ? 0 : 0,
      Math.round(unit.pauseMs * scale)
    );
    const nextUnit = {
      ...unit,
      speechStartMs: cursorMs,
      speechEndMs: cursorMs + scaledSpeechMs,
      pauseEndMs: cursorMs + scaledSpeechMs + scaledPauseMs
    };
    cursorMs = nextUnit.pauseEndMs;
    return nextUnit;
  });

  const normalizedTotalDurationMs = normalizedUnits[normalizedUnits.length - 1]?.pauseEndMs || scaledDurationMs;
  if (safeTargetDurationMs > 0 && normalizedUnits.length && normalizedTotalDurationMs > 0) {
    let lastPauseEndMs = 0;
    normalizedUnits = normalizedUnits.map((unit, index) => {
      const scaledSpeechStartMs = Math.round((unit.speechStartMs / normalizedTotalDurationMs) * safeTargetDurationMs);
      const scaledSpeechEndMs = Math.round((unit.speechEndMs / normalizedTotalDurationMs) * safeTargetDurationMs);
      const scaledPauseEndMs = index === normalizedUnits.length - 1
        ? safeTargetDurationMs
        : Math.round((unit.pauseEndMs / normalizedTotalDurationMs) * safeTargetDurationMs);

      const speechStartMs = clamp(scaledSpeechStartMs, lastPauseEndMs, safeTargetDurationMs);
      const speechEndMs = clamp(Math.max(speechStartMs, scaledSpeechEndMs), speechStartMs, safeTargetDurationMs);
      const pauseEndMs = clamp(Math.max(speechEndMs, scaledPauseEndMs), speechEndMs, safeTargetDurationMs);
      lastPauseEndMs = pauseEndMs;

      return {
        ...unit,
        speechStartMs,
        speechEndMs,
        pauseEndMs
      };
    });
  }

  const profile = {
    units: normalizedUnits,
    totalDurationMs: safeTargetDurationMs > 0
      ? safeTargetDurationMs
      : Math.max(scaledDurationMs, normalizedUnits[normalizedUnits.length - 1]?.pauseEndMs || scaledDurationMs)
  };

  speechSyncProfileCache.set(cacheKey, profile);
  if (speechSyncProfileCache.size > 80) {
    const oldestKey = speechSyncProfileCache.keys().next().value;
    speechSyncProfileCache.delete(oldestKey);
  }

  return profile;
}

function scaleSpeechSyncProfile(profile, targetDurationMs = 0) {
  const safeTargetDurationMs = Math.max(0, Math.round(Number(targetDurationMs) || 0));
  if (!profile || !Array.isArray(profile.units) || !profile.units.length || !safeTargetDurationMs || safeTargetDurationMs === profile.totalDurationMs) {
    return profile;
  }

  const baseDurationMs = Math.max(1, Math.round(Number(profile.totalDurationMs) || 1));
  let lastPauseEndMs = 0;
  const scaledUnits = profile.units.map((unit, index) => {
    const scaledSpeechStartMs = Math.round((unit.speechStartMs / baseDurationMs) * safeTargetDurationMs);
    const scaledSpeechEndMs = Math.round((unit.speechEndMs / baseDurationMs) * safeTargetDurationMs);
    const scaledPauseEndMs = index === profile.units.length - 1
      ? safeTargetDurationMs
      : Math.round((unit.pauseEndMs / baseDurationMs) * safeTargetDurationMs);
    const speechStartMs = clamp(scaledSpeechStartMs, lastPauseEndMs, safeTargetDurationMs);
    const speechEndMs = clamp(Math.max(speechStartMs, scaledSpeechEndMs), speechStartMs, safeTargetDurationMs);
    const pauseEndMs = clamp(Math.max(speechEndMs, scaledPauseEndMs), speechEndMs, safeTargetDurationMs);
    lastPauseEndMs = pauseEndMs;
    return {
      ...unit,
      speechStartMs,
      speechEndMs,
      pauseEndMs
    };
  });

  return {
    ...profile,
    units: scaledUnits,
    totalDurationMs: safeTargetDurationMs
  };
}

function buildSpeechSyncProfileFromChunkDurations(text = "", narrationChunks = [], chunkDurationsMs = []) {
  const safeText = String(text || "");
  const safeChunks = Array.isArray(narrationChunks)
    ? narrationChunks.map((chunk) => String(chunk || "").trim()).filter(Boolean)
    : [];
  const joinGapMs = Math.max(0, Math.round(Number(NARRATION_CHUNK_JOIN_GAP_MS) || 0));
  const safeDurations = Array.isArray(chunkDurationsMs)
    ? chunkDurationsMs.map((value, index, source) => {
      const baseDurationMs = Math.max(1, Math.round(Number(value) || 0));
      return baseDurationMs + (index < (source.length - 1) ? joinGapMs : 0);
    }).filter((value) => value > 0)
    : [];

  if (!safeText || !safeChunks.length || safeChunks.length !== safeDurations.length) {
    return null;
  }

  const estimatedProfile = getSpeechSyncProfile(safeText, 0);
  const estimatedUnits = Array.isArray(estimatedProfile.units) ? estimatedProfile.units : [];
  if (!estimatedUnits.length) {
    return null;
  }

  const chunkCharacterTargets = safeChunks.map((chunk) => Math.max(1, chunk.replace(/\s+/g, "").length));
  const cumulativeTargets = [];
  chunkCharacterTargets.reduce((sum, value, index) => {
    const total = sum + value;
    cumulativeTargets[index] = total;
    return total;
  }, 0);

  let spokenCharacterCursor = 0;
  let activeChunkIndex = 0;
  const unitsByChunk = safeDurations.map(() => []);

  estimatedUnits.forEach((unit) => {
    const spokenLength = unit.spokenText ? Math.max(1, unit.spokenText.replace(/\s+/g, "").length) : 0;
    const midpoint = spokenCharacterCursor + (spokenLength * 0.5);
    while (
      activeChunkIndex < (cumulativeTargets.length - 1)
      && midpoint > cumulativeTargets[activeChunkIndex]
    ) {
      activeChunkIndex += 1;
    }

    unitsByChunk[activeChunkIndex].push(unit);
    spokenCharacterCursor += spokenLength;
  });

  let globalCursorMs = 0;
  const normalizedUnits = [];

  safeDurations.forEach((chunkDurationMs, chunkIndex) => {
    const chunkUnits = unitsByChunk[chunkIndex] || [];
    if (!chunkUnits.length) {
      globalCursorMs += chunkDurationMs;
      return;
    }

    const baseChunkDurationMs = chunkUnits.reduce((sum, unit) => {
      const speechMs = Math.max(0, Number(unit.speechMs) || 0);
      const pauseMs = Math.max(0, Number(unit.pauseMs) || 0);
      return sum + speechMs + pauseMs;
    }, 0);
    const scale = baseChunkDurationMs > 0 ? (chunkDurationMs / baseChunkDurationMs) : 1;
    let localCursorMs = 0;

    const localUnits = chunkUnits.map((unit) => {
      const speechMs = unit.spokenText
        ? Math.max(40, Math.round((Number(unit.speechMs) || 0) * scale))
        : 0;
      const pauseMs = Math.max(0, Math.round((Number(unit.pauseMs) || 0) * scale));
      const nextUnit = {
        ...unit,
        speechStartMs: localCursorMs,
        speechEndMs: localCursorMs + speechMs,
        pauseEndMs: localCursorMs + speechMs + pauseMs
      };
      localCursorMs = nextUnit.pauseEndMs;
      return nextUnit;
    });

    const normalizedChunkUnits = scaleSpeechSyncProfile({
      units: localUnits,
      totalDurationMs: localUnits[localUnits.length - 1]?.pauseEndMs || chunkDurationMs
    }, chunkDurationMs)?.units || localUnits;

    normalizedChunkUnits.forEach((unit) => {
      normalizedUnits.push({
        ...unit,
        speechStartMs: globalCursorMs + unit.speechStartMs,
        speechEndMs: globalCursorMs + unit.speechEndMs,
        pauseEndMs: globalCursorMs + unit.pauseEndMs
      });
    });

    globalCursorMs += chunkDurationMs;
  });

  if (!normalizedUnits.length) {
    return null;
  }

  return {
    units: normalizedUnits,
    totalDurationMs: Math.max(1, globalCursorMs)
  };
}

function getResolvedSpeechSyncProfile(text = "", targetDurationMs = 0, options = {}) {
  const safeText = String(text || "");
  const safeTargetDurationMs = Math.max(0, Math.round(Number(targetDurationMs) || 0));
  const narrationProfile = options.syncProfileData || state.narration?.syncProfile;
  if (
    narrationProfile
    && narrationProfile.text === safeText
    && narrationProfile.profile
    && Array.isArray(narrationProfile.profile.units)
    && narrationProfile.profile.units.length
  ) {
    return safeTargetDurationMs > 0
      ? scaleSpeechSyncProfile(narrationProfile.profile, safeTargetDurationMs)
      : narrationProfile.profile;
  }

  return getSpeechSyncProfile(safeText, safeTargetDurationMs);
}

function getSpeechSyncFrame(text = "", elapsedMs = 0, targetDurationMs = 0, options = {}) {
  const safeText = String(text || "");
  if (!safeText) {
    return {
      displayedText: "",
      mouthActive: false,
      speechElapsedMs: 0
    };
  }

  const profile = getResolvedSpeechSyncProfile(safeText, targetDurationMs, options);
  const safeElapsedMs = clamp(Number(elapsedMs) || 0, 0, profile.totalDurationMs);
  let displayedText = "";
  let mouthActive = false;
  let speechElapsedMs = 0;

  for (const unit of profile.units) {
    if (safeElapsedMs >= unit.pauseEndMs) {
      displayedText = safeText.slice(0, unit.endIndex);
      continue;
    }

    if (!unit.spokenText) {
      displayedText = safeText.slice(0, unit.endIndex);
      mouthActive = false;
      speechElapsedMs = 0;
      break;
    }

    if (safeElapsedMs >= unit.speechStartMs && safeElapsedMs <= unit.speechEndMs) {
      const speechProgress = clamp(
        (safeElapsedMs - unit.speechStartMs) / Math.max(1, unit.speechEndMs - unit.speechStartMs),
        0,
        1
      );
      const visibleUnitText = getVisibleChunkText(unit.displayText, speechProgress);
      displayedText = `${safeText.slice(0, unit.startIndex)}${visibleUnitText}`;
      mouthActive = true;
      speechElapsedMs = safeElapsedMs - unit.speechStartMs;
      break;
    }

    if (safeElapsedMs >= unit.speechEndMs && safeElapsedMs < unit.pauseEndMs) {
      displayedText = safeText.slice(0, unit.endIndex);
      break;
    }

    if (safeElapsedMs < unit.speechStartMs) {
      break;
    }
  }

  if (safeElapsedMs >= profile.totalDurationMs) {
    displayedText = safeText;
    mouthActive = false;
    speechElapsedMs = 0;
  }

  return {
    displayedText,
    mouthActive,
    speechElapsedMs
  };
}

function getSpeechRecognitionConstructor() {
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

function canUseSpeechToText() {
  return Boolean(getSpeechRecognitionConstructor());
}

function canUseTextToSpeech() {
  return "speechSynthesis" in window;
}

function mergeSpeechText(baseText, spokenText) {
  const cleanBase = baseText.trimEnd();
  const cleanSpoken = spokenText.trim();

  if (!cleanBase) {
    return cleanSpoken;
  }

  if (!cleanSpoken) {
    return cleanBase;
  }

  const separator = /[\n.!?]$/.test(cleanBase) ? "\n" : " ";
  return `${cleanBase}${separator}${cleanSpoken}`;
}

function setMathsTranslatorStatus(message) {
  const result = applyStatusMessage(mathsTranslatorStatus, message);
  if (result.isError) {
    showRuntimeDisplayError(result.text);
  }
}

function setPlaceValueToolStatus(message) {
  const result = applyStatusMessage(placeValueToolStatus, message);
  if (result.isError) {
    showRuntimeDisplayError(result.text);
  }
}

function setMathsTranslateLoading(isLoading, message = "Translating into pure maths...") {
  state.mathsTranslator.translating = Boolean(isLoading);

  if (mathsTranslateProgress) {
    mathsTranslateProgress.classList.toggle("hidden", !isLoading);
  }

  if (mathsTranslateProgressBar) {
    mathsTranslateProgressBar.style.width = isLoading ? "100%" : "0%";
  }

  if (mathsTranslateProgressLabel) {
    mathsTranslateProgressLabel.textContent = message;
  }
}

function updateMathsTranslationPreview(text) {
  if (mathsTranslationPreview) {
    mathsTranslationPreview.textContent = text?.trim() || "Pure maths translation will appear here.";
  }
}

function normalizeMathSpacing(text) {
  return String(text || "")
    .replace(/\s*([=+\-×÷<>≤≥≠^():/])\s*/g, " $1 ")
    .replace(/\s+/g, " ")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .replace(/\s+([,.;:!?])/g, "$1")
    .trim();
}

function parseNumberWordPhrase(phrase) {
  const rawTokens = String(phrase || "")
    .toLowerCase()
    .replace(/-/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  if (!rawTokens.length) {
    return null;
  }

  if (rawTokens.includes("and") && !rawTokens.includes("hundred") && !rawTokens.includes("thousand")) {
    return null;
  }

  const tokens = rawTokens.filter((token) => token !== "and");
  if (!tokens.length) {
    return null;
  }

  let total = 0;
  let current = 0;
  let matched = false;

  for (const token of tokens) {
    if (Object.prototype.hasOwnProperty.call(NUMBER_WORD_VALUES, token)) {
      current += NUMBER_WORD_VALUES[token];
      matched = true;
      continue;
    }

    if (token === "hundred") {
      current = Math.max(1, current) * 100;
      matched = true;
      continue;
    }

    if (token === "thousand") {
      total += Math.max(1, current) * 1000;
      current = 0;
      matched = true;
      continue;
    }

    return null;
  }

  if (!matched) {
    return null;
  }

  return String(total + current);
}

function replaceNumberWords(text) {
  const pattern = /\b(?:zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|thousand)(?:[\s-]+(?:and[\s-]+)?(?:zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|thousand))*\b/gi;

  return String(text || "").replace(pattern, (match) => {
    const parsed = parseNumberWordPhrase(match);
    return parsed ?? match;
  });
}

function translateMathStatement(text) {
  const standaloneTranslation = translateStandaloneMathText(text);
  if (standaloneTranslation !== String(text || "").trim()) {
    return standaloneTranslation;
  }

  let result = replaceNumberWords(text)
    .replace(/[?]/g, "")
    .replace(/\bwhat is\b/gi, "")
    .replace(/\bcalculate\b/gi, "")
    .replace(/\bsolve\b/gi, "")
    .replace(/\bwork out\b/gi, "")
    .replace(/\bshow me\b/gi, "")
    .replace(/\bplease\b/gi, "")
    .replace(/\bthe answer to\b/gi, "")
    .replace(/\bthe\b/gi, " ");

  const pairTransforms = [
    { pattern: /\bsum of\s+(.+?)\s+and\s+(.+)$/i, build: (left, right) => `${left} + ${right}` },
    { pattern: /\bdifference between\s+(.+?)\s+and\s+(.+)$/i, build: (left, right) => `${left} - ${right}` },
    { pattern: /\bproduct of\s+(.+?)\s+and\s+(.+)$/i, build: (left, right) => `${left} × ${right}` },
    { pattern: /\bquotient of\s+(.+?)\s+and\s+(.+)$/i, build: (left, right) => `${left} ÷ ${right}` },
    { pattern: /\bratio of\s+(.+?)\s+to\s+(.+)$/i, build: (left, right) => `${left} : ${right}` }
  ];

  for (const transform of pairTransforms) {
    const match = result.trim().match(transform.pattern);
    if (match) {
      result = transform.build(
        normalizeMathSpacing(replaceNumberWords(match[1])),
        normalizeMathSpacing(replaceNumberWords(match[2]))
      );
      return normalizeMathSpacing(result);
    }
  }

  result = result
    .replace(/\badded to\b/gi, " + ")
    .replace(/\bplus\b/gi, " + ")
    .replace(/\bincreased by\b/gi, " + ")
    .replace(/\bmore than\b/gi, " + ")
    .replace(/\bsubtract\b/gi, " - ")
    .replace(/\bsubtracted from\b/gi, " - ")
    .replace(/\bminus\b/gi, " - ")
    .replace(/\btake away\b/gi, " - ")
    .replace(/\bdecreased by\b/gi, " - ")
    .replace(/\bmultiply(?:ing|ied)? by\b/gi, " × ")
    .replace(/\btimes\b/gi, " × ")
    .replace(/\binto\b/gi, " × ")
    .replace(/\bdouble of\b/gi, "2 × ")
    .replace(/\btriple of\b/gi, "3 × ")
    .replace(/\bdivided by\b/gi, " ÷ ")
    .replace(/\bover\b/gi, " ÷ ")
    .replace(/\bquotient\b/gi, " ÷ ")
    .replace(/\bgreater than or equal to\b/gi, " ≥ ")
    .replace(/\bless than or equal to\b/gi, " ≤ ")
    .replace(/\bnot equal to\b/gi, " ≠ ")
    .replace(/\bgreater than\b/gi, " > ")
    .replace(/\bless than\b/gi, " < ")
    .replace(/\bis equal to\b/gi, " = ")
    .replace(/\bequals\b/gi, " = ")
    .replace(/\bequal to\b/gi, " = ")
    .replace(/\bpercent\b/gi, "%")
    .replace(/\bto the power of\b/gi, " ^ ")
    .replace(/\bsquared\b/gi, "^2")
    .replace(/\bcubed\b/gi, "^3");

  result = result
    .replace(/\bhalf of\s+(.+)$/i, "$1 ÷ 2")
    .replace(/\bdouble\s+(.+)$/i, "2 × $1")
    .replace(/\btriple\s+(.+)$/i, "3 × $1")
    .replace(/\b([A-Za-z]+)\s+has\s+(\d+)\s+sides\b/gi, "$1 = $2 sides")
    .replace(/\b([A-Za-z]+)\s+has\s+(\d+)\s+corners\b/gi, "$1 = $2 corners")
    .replace(/\b([A-Za-z0-9]+)\s+is\s+([<>≤≥≠])\s+([A-Za-z0-9]+)\b/gi, "$1 $2 $3")
    .replace(/\b([A-Za-z0-9]+)\s+is\s+greater than\s+([A-Za-z0-9]+)\b/gi, "$1 > $2")
    .replace(/\b([A-Za-z0-9]+)\s+is\s+less than\s+([A-Za-z0-9]+)\b/gi, "$1 < $2")
    .replace(/\b([A-Za-z0-9]+)\s+is\s+([A-Za-z0-9]+)\b/gi, "$1 = $2");

  return normalizeMathSpacing(result);
}

function translateMathLine(line) {
  const rawLine = String(line || "");
  const headingMatch = rawLine.match(/^(\s*#{1,3}\s+)(.*)$/);
  const prefix = headingMatch ? headingMatch[1] : "";
  const body = (headingMatch ? headingMatch[2] : rawLine).trim();
  if (!body) {
    return "";
  }

  return `${prefix}${translateMathStatement(body)}`.trimEnd();
}

function translateToPureMaths(text) {
  return String(text || "")
    .split(/\r?\n/)
    .map((line) => translateMathLine(line))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function syncMathsTranslation(options = {}) {
  const sourceText = mathsSourceInput?.value.trim() || (options.useLessonInputSource ? lessonInput.value.trim() : "") || "";
  const applyToLesson = options.applyToLesson !== false;
  const shouldTranslate = options.force === true || Boolean(state.mathsTranslator.auto);

  if (!sourceText) {
    state.mathsTranslator.lastSource = "";
    state.mathsTranslator.lastTranslated = "";
    setMathsTranslateLoading(false, "Translation complete.");
    updateMathsTranslationPreview("");
    if (options.fromUserAction) {
      setMathsTranslatorStatus("Maths translator is ready. Paste plain text and the lesson box will receive the translated maths version.");
    }
    return "";
  }

  const translated = shouldTranslate ? translateToPureMaths(sourceText) : sourceText;
  state.mathsTranslator.lastSource = sourceText;
  state.mathsTranslator.lastTranslated = translated;
  setMathsTranslateLoading(false, "Translation complete.");
  updateMathsTranslationPreview(translated);

  if (applyToLesson && translated && lessonInput.value !== translated) {
    lessonInput.value = translated;
    handleLessonInputChange();
  }

  setMathsTranslatorStatus(shouldTranslate
    ? "Source text translated into pure maths and synced to the lesson box."
    : "Auto translate is off. Use Translate To Pure Maths when you want to sync the result.");

  return translated;
}

function scheduleMathsTranslation(options = {}) {
  if (state.mathsTranslator.timerId) {
    window.clearTimeout(state.mathsTranslator.timerId);
  }

  const sourceText = mathsSourceInput?.value.trim() || lessonInput.value.trim() || "";
  if (!sourceText) {
    syncMathsTranslation(options);
    return;
  }

  const requestId = state.mathsTranslator.requestId + 1;
  state.mathsTranslator.requestId = requestId;
  setMathsTranslateLoading(true, "Translating into pure maths...");
  setMathsTranslatorStatus("Translating your content into pure maths...");

  state.mathsTranslator.timerId = window.setTimeout(() => {
    window.requestAnimationFrame(() => {
      if (requestId !== state.mathsTranslator.requestId) {
        return;
      }

      state.mathsTranslator.timerId = 0;
      syncMathsTranslation(options);
    });
  }, options.delayMs ?? 180);
}

function scheduleMathsPreviewOnly(sourceText, options = {}) {
  if (state.mathsTranslator.previewTimerId) {
    window.clearTimeout(state.mathsTranslator.previewTimerId);
  }

  const safeText = String(sourceText || "").trim();
  if (!safeText) {
    updateMathsTranslationPreview("");
    setMathsTranslateLoading(false, "Preview ready.");
    return;
  }

  setMathsTranslateLoading(true, options.loadingLabel || "Preparing maths preview...");
  state.mathsTranslator.previewTimerId = window.setTimeout(() => {
    state.mathsTranslator.previewTimerId = 0;
    window.requestAnimationFrame(() => {
      const previewText = translateToPureMaths(safeText);
      setMathsTranslateLoading(false, "Preview ready.");
      updateMathsTranslationPreview(previewText);
      if (options.statusMessage) {
        setMathsTranslatorStatus(options.statusMessage);
      }
    });
  }, options.delayMs ?? 160);
}

function scheduleLessonInputChange(delayMs = 140) {
  if (state.lessonInputTimerId) {
    window.clearTimeout(state.lessonInputTimerId);
  }

  state.lessonInputTimerId = window.setTimeout(() => {
    state.lessonInputTimerId = 0;
    window.requestAnimationFrame(() => {
      handleLessonInputChange();
    });
  }, delayMs);
}

function clearNarrationWarmupTimer() {
  if (state.narrationWarmup.timerId) {
    window.clearTimeout(state.narrationWarmup.timerId);
    state.narrationWarmup.timerId = 0;
  }
}

function shouldWarmupNarration(text, voice) {
  return false;
}

function scheduleNarrationWarmup(delayMs = 700) {
  clearNarrationWarmupTimer();

  const text = state.text.trim();
  const voice = state.preferredNarrationVoice || "anjali";
  if (!shouldWarmupNarration(text, voice)) {
    return;
  }

  if (
    state.narration.url
    && state.narration.textSource === text
    && state.narration.voice === voice
    && state.narration.blob
  ) {
    return;
  }

  const requestId = state.narrationWarmup.requestId + 1;
  state.narrationWarmup.requestId = requestId;
  state.narrationWarmup.text = text;
  state.narrationWarmup.voice = voice;
  state.narrationWarmup.timerId = window.setTimeout(async () => {
    state.narrationWarmup.timerId = 0;
    if (requestId !== state.narrationWarmup.requestId || !shouldWarmupNarration(text, voice)) {
      return;
    }

    state.narrationWarmup.active = true;
    try {
      let syncProfile = null;
      const blob = await requestNarrationBlob(text, voice, {
        timeoutMs: getLongNarrationRequestTimeoutMs(text),
        onSyncProfile: (profile) => {
          syncProfile = profile;
        }
      });
      if (
        requestId !== state.narrationWarmup.requestId
        || state.text.trim() !== text
        || state.preferredNarrationVoice !== voice
      ) {
        return;
      }

      const fileName = `generated-${voice}-narration.wav`;
      const label = `Generated ${getNarrationVoiceLabel(voice).toLowerCase()} narration`;
      await setNarrationFromBlob(blob, fileName, label, text, voice, { silent: true, syncProfile });
    } catch (error) {
      console.error(error);
    } finally {
      if (requestId === state.narrationWarmup.requestId) {
        state.narrationWarmup.active = false;
      }
    }
  }, delayMs);
}

function getEffectiveLessonText() {
  return lessonInput.value.trim();
}

const INTERNAL_HELPER_TEXT_SIGNATURES = [
  {
    key: "presentation-template-helper",
    label: "the Presentation Template helper copy",
    fragments: [
      "presentation template",
      "classic stage stays as the default until you choose another template",
      "pick a screen look before you open the presentation",
      "current classic blue teaching board remains active"
    ]
  }
];

function normalizeLessonValidationText(text = "") {
  return String(text || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function detectInternalHelperLessonText(text = "") {
  const normalizedText = normalizeLessonValidationText(text);
  if (!normalizedText) {
    return null;
  }

  return INTERNAL_HELPER_TEXT_SIGNATURES.find((signature) => {
    const matchCount = signature.fragments.reduce((count, fragment) => {
      return count + (normalizedText.includes(fragment) ? 1 : 0);
    }, 0);
    return matchCount >= 2;
  }) || null;
}

function getLessonTextIssue(text = "") {
  const safeText = String(text || "").trim();
  if (!safeText) {
    return {
      kind: "empty",
      message: "Please enter content first."
    };
  }

  const helperMatch = detectInternalHelperLessonText(safeText);
  if (helperMatch) {
    return {
      kind: helperMatch.key,
      message: `The lesson box contains ${helperMatch.label}, not your lesson. Clear that helper text and paste only the real lesson before you continue.`
    };
  }

  return null;
}

function ensureLessonTextIsReady(text = "", options = {}) {
  const issue = getLessonTextIssue(text);
  if (!issue) {
    return true;
  }

  if (options.focusInput !== false && lessonInput) {
    lessonInput.focus();
  }
  setStatus(issue.message, { error: issue.kind !== "empty" });
  return false;
}

function commitLatestLessonText() {
  if (state.lessonInputTimerId) {
    window.clearTimeout(state.lessonInputTimerId);
    state.lessonInputTimerId = 0;
  }

  if (isPdfPresentationMode()) {
    return state.text.trim();
  }

  const text = getEffectiveLessonText();
  applyLessonRenderStateFromText(text, {
    displayedText: state.speaking ? state.displayedText : text,
    previewPageIndex: stagePanel.classList.contains("hidden") ? 0 : state.previewPageIndex,
    renderedPageCount: state.renderedPageCount
  });

  return text;
}

function cloneTextStyle(style) {
  return {
    color: style?.color || "#ffffff",
    bold: Boolean(style?.bold),
    italic: Boolean(style?.italic),
    underline: Boolean(style?.underline),
    caseMode: style?.caseMode || "original"
  };
}

function getBaseTextStyle() {
  return cloneTextStyle(state.displayStyle);
}

function looksLikeAutoHeadingLine(line = "", index = 0, totalLines = 0) {
  const safeLine = String(line || "").trim();
  if (!safeLine) {
    return false;
  }

  if (/^#{1,3}\s+/.test(safeLine)) {
    return true;
  }

  if (/^\s*(?:[-*]|\u2022)\s+/.test(safeLine)) {
    return false;
  }

  if (safeLine.length > 72) {
    return false;
  }

  const words = safeLine.split(/\s+/).filter(Boolean);
  if (words.length > 8) {
    return false;
  }

  if (/:\s*$/.test(safeLine)) {
    return true;
  }

  if (/[.!?]\s*$/.test(safeLine)) {
    return false;
  }

  const plainText = safeLine.replace(/[^A-Za-z\s]/g, " ").trim();
  const plainWords = plainText.split(/\s+/).filter(Boolean);
  const isAllCaps = plainWords.length > 0 && plainWords.every((word) => word === word.toUpperCase());
  const isTitleCase = plainWords.length > 0 && plainWords.every((word) => /^[A-Z][a-z]+$/.test(word));

  if (isAllCaps || isTitleCase) {
    return true;
  }

  return index === 0 && totalLines > 1 && plainWords.length > 0 && plainWords.length <= 7;
}

function getResolvedTextStyle(style, baseStyle = getBaseTextStyle()) {
  return {
    ...baseStyle,
    ...(style || {})
  };
}

function textStyleMatches(leftStyle, rightStyle) {
  return leftStyle.color === rightStyle.color
    && leftStyle.bold === rightStyle.bold
    && leftStyle.italic === rightStyle.italic
    && leftStyle.underline === rightStyle.underline;
}

function updateToggleButtons(toggleMap) {
  toggleMap.forEach(({ button, active }) => {
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

function findKeywordStyleRule(phrase) {
  return state.keywordStyles.find((rule) => rule.phrase === phrase) || null;
}

function getSelectedPhraseLabel(phrase) {
  if (!phrase) {
    return "None";
  }

  return phrase.length > 72 ? `${phrase.slice(0, 69)}...` : phrase;
}

function updateSelectedTextStyleUi() {
  const hasSelection = Boolean(state.selectedPhrase);
  selectionStyleCard.classList.remove("hidden");

  if (!hasSelection) {
    selectedKeywordLabel.textContent = "None";
    selectedTextColorSelect.value = state.selectionStyle.color;
    selectedTextColorSelect.disabled = true;
    selectedBoldToggleBtn.disabled = true;
    selectedItalicToggleBtn.disabled = true;
    selectedUnderlineToggleBtn.disabled = true;
    applySelectedStyleBtn.disabled = true;
    clearSelectedStyleBtn.disabled = true;
    updateToggleButtons([
      { button: selectedBoldToggleBtn, active: state.selectionStyle.bold },
      { button: selectedItalicToggleBtn, active: state.selectionStyle.italic },
      { button: selectedUnderlineToggleBtn, active: state.selectionStyle.underline }
    ]);
    setSelectionStyleStatus("Select a word or phrase in the lesson text, or use # at the start of a line to make that line a heading.");
    return;
  }

  const activeStyle = cloneTextStyle(state.selectionStyle);
  const existingRule = findKeywordStyleRule(state.selectedPhrase);

  selectedKeywordLabel.textContent = getSelectedPhraseLabel(state.selectedPhrase);
  selectedTextColorSelect.value = activeStyle.color;
  selectedTextColorSelect.disabled = false;
  selectedBoldToggleBtn.disabled = false;
  selectedItalicToggleBtn.disabled = false;
  selectedUnderlineToggleBtn.disabled = false;
  applySelectedStyleBtn.disabled = false;
  clearSelectedStyleBtn.disabled = !existingRule;

  updateToggleButtons([
    { button: selectedBoldToggleBtn, active: activeStyle.bold },
    { button: selectedItalicToggleBtn, active: activeStyle.italic },
    { button: selectedUnderlineToggleBtn, active: activeStyle.underline }
  ]);

  if (existingRule) {
    setSelectionStyleStatus(`A special style is saved for "${getSelectedPhraseLabel(state.selectedPhrase)}".`);
  } else {
    setSelectionStyleStatus("Choose the look for the selected text, then click Apply To Selected Text.");
  }
}

function updateTextStyleUi() {
  updateToggleButtons([
    { button: boldToggleBtn, active: state.displayStyle.bold },
    { button: italicToggleBtn, active: state.displayStyle.italic },
    { button: underlineToggleBtn, active: state.displayStyle.underline },
    { button: stageBoldBtn, active: state.displayStyle.bold },
    { button: stageItalicBtn, active: state.displayStyle.italic },
    { button: stageUnderlineBtn, active: state.displayStyle.underline }
  ]);

  updateToggleButtons([
    { button: caseOriginalBtn, active: state.displayStyle.caseMode === "original" },
    { button: caseLowerBtn, active: state.displayStyle.caseMode === "lower" },
    { button: caseTitleBtn, active: state.displayStyle.caseMode === "title" },
    { button: caseUpperBtn, active: state.displayStyle.caseMode === "upper" }
  ]);

  textColorSelect.value = state.displayStyle.color;
  updateSelectedTextStyleUi();

  if (!stagePanel.classList.contains("hidden")) {
    drawScene(state.mouthOpen);
  }
}

function updateDisplayStyle(nextStyle) {
  state.displayStyle = {
    ...state.displayStyle,
    ...nextStyle
  };

  if (state.selectedPhrase && !findKeywordStyleRule(state.selectedPhrase)) {
    state.selectionStyle = getBaseTextStyle();
  }

  updateTextStyleUi();
}

function updateSelectionStyle(nextStyle) {
  state.selectionStyle = {
    ...state.selectionStyle,
    ...nextStyle
  };

  if (state.selectedPhrase) {
    const existingRuleIndex = state.keywordStyles.findIndex((rule) => rule.phrase === state.selectedPhrase);
    const nextRule = {
      phrase: state.selectedPhrase,
      style: cloneTextStyle(state.selectionStyle)
    };

    if (existingRuleIndex >= 0) {
      state.keywordStyles[existingRuleIndex] = nextRule;
    } else {
      state.keywordStyles.push(nextRule);
    }
  }

  updateSelectedTextStyleUi();

  if (!stagePanel.classList.contains("hidden")) {
    drawScene(state.mouthOpen);
  }
}

function getContentFont(size, style = state.displayStyle) {
  const resolvedStyle = getResolvedTextStyle(style);
  const fontStyle = resolvedStyle.italic ? "italic" : "normal";
  const fontWeight = resolvedStyle.bold ? "800" : "600";
  return `${fontStyle} ${fontWeight} ${size}px "Baloo 2", "Comic Sans MS", "Nunito"`;
}

function toTitleCase(text) {
  return text.toLowerCase().replace(/\b([a-z])/g, (match) => match.toUpperCase());
}

function applyDisplayCase(text, caseMode = state.displayStyle.caseMode) {
  if (!text) {
    return text;
  }

  switch (caseMode) {
    case "lower":
      return text.toLowerCase();
    case "title":
      return toTitleCase(text);
    case "upper":
      return text.toUpperCase();
    default:
      return text;
  }
}

function normalizeSelectedText(text) {
  return text.replace(/\s+/g, " ").trim();
}

function refreshSelectedPhraseFromInput() {
  const start = lessonInput.selectionStart ?? 0;
  const end = lessonInput.selectionEnd ?? 0;
  const selectedText = normalizeSelectedText(lessonInput.value.slice(start, end));

  if (selectedText === state.selectedPhrase) {
    updateSelectedTextStyleUi();
    return;
  }

  state.selectedPhrase = selectedText;
  state.selectionStyle = selectedText && findKeywordStyleRule(selectedText)
    ? cloneTextStyle(findKeywordStyleRule(selectedText).style)
    : getBaseTextStyle();

  updateSelectedTextStyleUi();
}

function applySelectedTextStyle() {
  if (!state.selectedPhrase) {
    setSelectionStyleStatus("Select a word or phrase first.");
    return;
  }

  const nextRule = {
    phrase: state.selectedPhrase,
    style: cloneTextStyle(state.selectionStyle)
  };

  const existingRuleIndex = state.keywordStyles.findIndex((rule) => rule.phrase === state.selectedPhrase);
  if (existingRuleIndex >= 0) {
    state.keywordStyles[existingRuleIndex] = nextRule;
  } else {
    state.keywordStyles.push(nextRule);
  }

  updateSelectedTextStyleUi();
  setSelectionStyleStatus(`Style applied to "${getSelectedPhraseLabel(state.selectedPhrase)}". Matching text on the slide will use this look.`);

  if (!stagePanel.classList.contains("hidden")) {
    drawScene(state.mouthOpen);
  }
}

function clearSelectedTextStyle() {
  if (!state.selectedPhrase) {
    setSelectionStyleStatus("Select a word or phrase first.");
    return;
  }

  state.keywordStyles = state.keywordStyles.filter((rule) => rule.phrase !== state.selectedPhrase);
  state.selectionStyle = getBaseTextStyle();
  updateSelectedTextStyleUi();
  setSelectionStyleStatus(`Special styling cleared for "${getSelectedPhraseLabel(state.selectedPhrase)}".`);

  if (!stagePanel.classList.contains("hidden")) {
    drawScene(state.mouthOpen);
  }
}

function handleLessonInputChange() {
  const nextText = lessonInput.value.trim();
  const lessonIssue = getLessonTextIssue(nextText);

  if (!isPdfPresentationMode()) {
    applyLessonRenderStateFromText(nextText, {
      displayedText: state.speaking ? state.displayedText : nextText,
      previewPageIndex: stagePanel.classList.contains("hidden") ? 0 : state.previewPageIndex,
      renderedPageCount: state.renderedPageCount
    });
  }

  if (!state.speaking && !state.exportingVideo && !isPdfPresentationMode()) {
    updatePlaybackProgressUi(0, false);
  }

  syncExtractedPdfLessonImages({ skipDraw: true });

  updateSpeechToolsUi();
  refreshSelectedPhraseFromInput();

  if (lessonIssue && lessonIssue.kind !== "empty" && !state.speaking && !state.exportingVideo) {
    setStatus(lessonIssue.message, { error: true });
  }

  if (!scenePromptInput.value.trim()) {
    const previewScene = analyzeScenePrompt(nextText);
    state.scene = {
      ...state.scene,
      ...previewScene,
      vfx: sceneVfxSelect.value === "auto" ? previewScene.vfx : sceneVfxSelect.value,
      exportQuality: getSelectedExportQuality()
    };
    updateScenePreview();
  }

  if (!stagePanel.classList.contains("hidden") && !isPdfPresentationMode() && !state.speaking) {
    drawScene(state.mouthOpen);
    setStatus(nextText
      ? "Screen updated automatically. Click Play Slide when you want narration to start."
      : "Type maths content and the screen will update automatically.");
  }

  if (nextText) {
    scheduleNarrationWarmup();
  } else {
    clearNarrationWarmupTimer();
  }
}

function applyMathsLessonTemplate(text, helperMessage) {
  const content = String(text || "").trim();
  if (!content) {
    return;
  }

  stopDictation(false);
  stopInputPreview(false);
  if (mathsSourceInput) {
    mathsSourceInput.value = content;
  }
  syncMathsTranslation({ applyToLesson: true, force: true, fromUserAction: true });
  lessonInput.focus();
  lessonInput.setSelectionRange(lessonInput.value.length, lessonInput.value.length);
  setMathsHelperStatus(helperMessage);
  setSpeechToolsStatus("Maths starter content was loaded into the lesson box.");
  setStatus("Maths Teacher content is ready to preview, present, or export.");
}

function initializeMathsTeacherAssets() {
  if (anjaliSampleAudio) {
    anjaliSampleAudio.src = resolveProjectAssetUrl(ANJALI_SAMPLE_AUDIO_FILE);
  }

  if (mathsAutoTranslateToggle) {
    mathsAutoTranslateToggle.checked = true;
  }
  state.mathsTranslator.auto = true;
  setMathsTranslateLoading(false, "Translation complete.");
  updateMathsTranslationPreview("");
  setMathsTranslatorStatus("Maths translator is ready. Paste plain text and the lesson box will receive the translated maths version.");
  setMathsHelperStatus("Maths practice is ready. Load starter lessons, boxed tables, mixed sums, listen to the sample, or use the sample as short narration.");
}

async function useBundledAnjaliSampleAsNarration() {
  const assetUrl = resolveProjectAssetUrl(ANJALI_SAMPLE_AUDIO_FILE);

  try {
    const audioElement = await createLoadedAudio(assetUrl);
    const durationMs = Number.isFinite(audioElement.duration)
      ? Math.max(1000, Math.ceil(audioElement.duration * 1000))
      : getDefaultNarrationDurationMs();

    resetNarrationState();
    state.narration = {
      url: assetUrl,
      fileName: ANJALI_SAMPLE_AUDIO_FILE,
      durationMs,
      source: "Anjali narration",
      blob: null,
      textSource: state.text || lessonInput.value.trim(),
      voice: "anjali"
    };

    updateNarrationUi();
    setRecordingUi(false);
    setAudioStatus(`Anjali narration: ${ANJALI_SAMPLE_AUDIO_FILE}`);
    state.preferredNarrationVoice = "anjali";
    updatePreferredVoiceUi();
    setMathsHelperStatus("Anjali's narration is now loaded in the narration area. This works best for short intros or short teaching clips.");
    setNarrationGenStatus("Anjali narration is loaded into the app.");
    setStatus("Anjali narration is ready. Play uses this audio, and download will include it.");
  } catch (error) {
    console.error(error);
    setMathsHelperStatus("The sample player is ready, but automatic loading failed here. If needed, use the narration upload and choose voice-preview-anjali.mp3 manually.");
    setStatus(error.message || "The Anjali sample could not be loaded automatically.");
  }
}

function updatePreferredVoiceUi() {
  state.preferredNarrationVoice = "anjali";
  if (slideVoiceSelect) {
    slideVoiceSelect.value = "anjali";
    slideVoiceSelect.disabled = true;
  }
}

function getNarrationVoiceLabel(voice) {
  return voice === "anjali" ? "Anjali" : "Anjali";
}

function setPreviewVoiceChooserVisible(isVisible) {
  previewVoiceChooser.classList.toggle("hidden", !isVisible);
}

function updateSpeechToolsUi() {
  const canPreviewText = Boolean(lessonInput.value.trim()) && !state.inputPreviewing && !state.dictation.active;
  dictateBtn.disabled = state.dictation.active || !canUseSpeechToText();
  stopDictateBtn.disabled = !state.dictation.active;
  previewTextBtn.disabled = !canPreviewText;
  stopPreviewBtn.disabled = !state.inputPreviewing;
  if (previewAnjaliBtn) {
    previewAnjaliBtn.disabled = !canPreviewText;
  }
  if (loadAnjaliNarrationBtn) {
    loadAnjaliNarrationBtn.disabled = !lessonInput.value.trim() || state.generatingNarration;
    loadAnjaliNarrationBtn.textContent = state.generatingNarration
      ? "Generating Anjali..."
      : "Generate Anjali Narration";
    loadAnjaliNarrationBtn.setAttribute("aria-busy", state.generatingNarration ? "true" : "false");
  }
  if (downloadAnjaliBtn) {
    downloadAnjaliBtn.disabled = !lessonInput.value.trim() || state.generatingNarration;
    downloadAnjaliBtn.textContent = state.generatingNarration
      ? "Preparing Download..."
      : "Download Anjali Narration";
    downloadAnjaliBtn.setAttribute("aria-busy", state.generatingNarration ? "true" : "false");
  }
  transcribeAudioInput.disabled = state.transcribing;
  submitTranscribeBtn.disabled = !state.transcribeSelectedFile || state.transcribing;

  if (!canPreviewText) {
    setPreviewVoiceChooserVisible(false);
  }
}

function resetTranscribeProgress() {
  transcribeProgress.classList.add("hidden");
  transcribeProgress.setAttribute("aria-valuenow", "0");
  transcribeProgressBar.style.width = "0%";
  transcribeProgressLabel.textContent = "0% complete";
  resetTaskProgressUi();
}

function setTranscribeProgress(percent, message = "") {
  const safePercent = clamp(Math.round(percent), 0, 100);
  transcribeProgress.classList.remove("hidden");
  transcribeProgress.setAttribute("aria-valuenow", String(safePercent));
  transcribeProgressBar.style.width = `${safePercent}%`;
  updateTaskProgressUi(safePercent / 100, true, {
    label: message || "Transcribing audio"
  });
  transcribeProgressLabel.textContent = message
    ? `${safePercent}% - ${message}`
    : `${safePercent}% complete`;
}

function setPdfStatus(message) {
  const result = applyStatusMessage(pdfStatus, message);
  if (result.isError) {
    showRuntimeDisplayError(result.text);
  }
}

function resetPdfProgress() {
  pdfProgress.classList.add("hidden");
  pdfProgress.setAttribute("aria-valuenow", "0");
  pdfProgressBar.style.width = "0%";
  pdfProgressLabel.textContent = "0% complete";
  resetTaskProgressUi();
}

function setPdfProgress(percent, message = "") {
  const safePercent = clamp(Math.round(percent), 0, 100);
  pdfProgress.classList.remove("hidden");
  pdfProgress.setAttribute("aria-valuenow", String(safePercent));
  pdfProgressBar.style.width = `${safePercent}%`;
  updateTaskProgressUi(safePercent / 100, true, {
    label: message || "Loading PDF"
  });
  pdfProgressLabel.textContent = message
    ? `${safePercent}% - ${message}`
    : `${safePercent}% complete`;
}

function getPdfFileSignature(file) {
  if (!file) {
    return "";
  }

  return `${file.name}::${file.size}::${file.lastModified}`;
}

function formatDurationMs(durationMs = 0) {
  const safeValue = Math.max(0, Math.round(durationMs / 1000));
  const minutes = Math.floor(safeValue / 60);
  const seconds = safeValue % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function getPdfSelectedPageIndexes() {
  if (!state.pdf.pages.length) {
    return [];
  }

  return Array.from(new Set(state.pdf.selectedPageIndexes))
    .filter((index) => Number.isInteger(index) && index >= 0 && index < state.pdf.pages.length)
    .sort((left, right) => left - right);
}

function getPdfSelectedPages() {
  return getPdfSelectedPageIndexes()
    .map((index) => state.pdf.pages[index])
    .filter(Boolean);
}

function getPdfContextLayoutArea(hasImages = false) {
  const metrics = getPresentationTemplateMetrics();
  const leftInset = Number.isFinite(metrics.contentLeftInset) ? metrics.contentLeftInset : metrics.contentSideInset;
  const topInset = metrics.contentTopInset;
  const pinnedStripArea = hasImages ? getPinnedPdfImageStripArea() : null;
  const rightInset = hasImages && pinnedStripArea
    ? Math.max(Number.isFinite(metrics.contentRightInset) ? metrics.contentRightInset : metrics.contentSideInset, pinnedStripArea.width + STAGE_IMAGE_WORKSPACE_PADDING_PX + STAGE_PDF_IMAGE_STRIP_GAP_PX)
    : (Number.isFinite(metrics.contentRightInset) ? metrics.contentRightInset : metrics.contentSideInset);
  const bottomInset = metrics.contentBottomInset;

  return {
    x: leftInset,
    y: topInset,
    width: Math.max(360, canvas.width - leftInset - rightInset),
    height: Math.max(320, canvas.height - topInset - bottomInset)
  };
}

function getPdfContextPagesKey() {
  const selectedIndexes = getPdfSelectedPageIndexes().join(",");
  const manualPdfSourceSignature = Array.from(new Set(
    state.images
      .filter((item) => item?.sourceTag === "pdf-clipboard" && Number.isFinite(Number(item?.sourcePageNumber)))
      .map((item) => Math.max(0, Math.round(Number(item.sourcePageNumber) || 0)))
      .filter(Boolean)
  ))
    .sort((left, right) => left - right)
    .join(",");

  return [
    selectedIndexes,
    canvas.width,
    canvas.height,
    state.fontScale,
    normalizePresentationTemplate(state.presentationTemplate),
    manualPdfSourceSignature
  ].join("|");
}

function getLayoutPageText(rows = []) {
  return rows
    .filter((row) => !row?.spacer)
    .map((row) => (row.segments || []).map((segment) => segment.text).join(""))
    .join("\n")
    .trim();
}

function buildPdfContextPages() {
  const selectedPages = getPdfSelectedPages();
  const contextPages = [];
  const manualPdfSourcePages = new Set(
    state.images
      .filter((item) => item?.sourceTag === "pdf-clipboard" && Number.isFinite(Number(item?.sourcePageNumber)))
      .map((item) => Math.max(0, Math.round(Number(item.sourcePageNumber) || 0)))
      .filter(Boolean)
  );
  let textCursor = 0;

  selectedPages.forEach((page, selectionIndex) => {
    const pageText = `${page?.text || ""}`.trim();
    const sourcePageNumber = Math.max(0, Math.round(Number(page?.pageNumber) || (selectionIndex + 1)));
    const exampleImages = Array.isArray(page?.exampleImages) ? page.exampleImages : [];
    const hasImages = Boolean(exampleImages.length || manualPdfSourcePages.has(sourcePageNumber));
    const contentArea = getPdfContextLayoutArea(hasImages);
    const layout = getContentLayoutWithMetrics(
      buildDisplayedLines(pageText),
      contentArea.width,
      contentArea.height,
      !pageText,
      {
        wordCount: page?.wordCount || splitIntoWords(pageText).length,
        hasImages
      }
    );
    const parts = paginateLayout(layout, contentArea.height);
    const totalParts = Math.max(1, parts.length);

    parts.forEach((part, partIndex) => {
      const partText = getLayoutPageText(part.rows);
      contextPages.push({
        id: `pdf-context-${sourcePageNumber}-${partIndex + 1}`,
        pageNumber: sourcePageNumber,
        sourcePageNumber,
        originalPageIndex: Number.isInteger(page?.index) ? page.index : selectionIndex,
        selectionIndex,
        partIndex,
        totalParts,
        isContinuation: partIndex > 0,
        text: partText,
        sourcePageText: pageText,
        pageTextStartIndex: textCursor,
        pageTextEndIndex: textCursor + pageText.length,
        wordCount: splitIntoWords(partText).length,
        hasImages: hasImages && partIndex === 0,
        exampleImages,
        rows: part.rows || [],
        fontSize: part.fontSize || layout.fontSize,
        rowHeight: part.rowHeight || layout.rowHeight,
        totalHeight: part.totalHeight || 0,
        page
      });
    });

    textCursor += pageText.length;
    if (selectionIndex < selectedPages.length - 1) {
      textCursor += 2;
    }
  });

  state.pdf.contextPages = contextPages;
  state.pdf.contextPagesKey = getPdfContextPagesKey();
  return contextPages;
}

function getPdfContextPages() {
  if (!getPdfSelectedPageCount()) {
    state.pdf.contextPages = [];
    state.pdf.contextPagesKey = "";
    return [];
  }

  const nextKey = getPdfContextPagesKey();
  if (state.pdf.contextPagesKey !== nextKey || !Array.isArray(state.pdf.contextPages) || !state.pdf.contextPages.length) {
    return buildPdfContextPages();
  }

  return state.pdf.contextPages;
}

function getPdfPresentationPages(renderMode = getPdfRenderMode()) {
  return renderMode === "exact" ? getPdfSelectedPages() : getPdfContextPages();
}

function getPdfPresentationPageIndexForSourcePageNumber(sourcePageNumber = 0) {
  const safePageNumber = Math.max(0, Math.round(Number(sourcePageNumber) || 0));
  if (!safePageNumber) {
    return -1;
  }

  return getPdfPresentationPages().findIndex((page) => Number(page?.sourcePageNumber || page?.pageNumber) === safePageNumber);
}

function getPdfSelectionIndexForSourcePageNumber(sourcePageNumber = 0) {
  const safePageNumber = Math.max(0, Math.round(Number(sourcePageNumber) || 0));
  if (!safePageNumber) {
    return -1;
  }

  return getPdfSelectedPages().findIndex((page) => Number(page?.pageNumber) === safePageNumber);
}

function getPdfAutoExampleImagesForPage(pageIndex = state.previewPageIndex) {
  if (!isPdfPresentationMode() || getPdfRenderMode() !== "context") {
    return [];
  }

  const contextPages = getPdfContextPages();
  const safePageIndex = clamp(pageIndex, 0, Math.max(0, contextPages.length - 1));
  const page = contextPages[safePageIndex] || null;
  if (!page || !Array.isArray(page.exampleImages) || !page.exampleImages.length) {
    return [];
  }

  const hasManualPdfImages = getImageEntriesForPage(safePageIndex).some(({ item }) => isPinnedPdfExampleImage(item));
  if (hasManualPdfImages) {
    return [];
  }

  return page.exampleImages.filter((image) => image?.image);
}

function getPdfSelectedPageCount() {
  return getPdfSelectedPages().length;
}

function getPdfPresentationPageCount(renderMode = getPdfRenderMode()) {
  return getPdfPresentationPages(renderMode).length;
}

function hasActivePdfSelection() {
  return Boolean(state.pdf.pages.length && getPdfSelectedPageCount());
}

function shouldPreferPdfScreenFromInput() {
  return false;
}

function getPdfPresentationText() {
  return getPdfSelectedPages()
    .map((page) => page.text.trim())
    .filter(Boolean)
    .join("\n\n");
}

function getPdfRenderMode() {
  return state.pdf?.renderMode === "exact" ? "exact" : "context";
}

function setPdfRenderMode(renderMode = "context") {
  state.pdf.renderMode = renderMode === "exact" ? "exact" : "context";
  state.pdf.autoImageSyncKey = "";
}

function invalidatePdfPresentationRequest() {
  state.pdf.requestId = Math.max(0, Math.round(Number(state.pdf.requestId) || 0)) + 1;
  return state.pdf.requestId;
}

function createLessonRenderStateSnapshot() {
  return {
    presentationMode: state.presentationMode,
    text: state.text,
    lines: [...state.lines],
    words: [...state.words],
    tokens: [...state.tokens],
    displayedText: state.displayedText,
    previewPageIndex: state.previewPageIndex,
    renderedPageCount: state.renderedPageCount,
    contentScrollOffset: state.contentScrollOffset
  };
}

function applyLessonRenderStateFromText(text, options = {}) {
  const safeText = typeof text === "string" ? text : "";
  state.presentationMode = "lesson";
  state.text = safeText;
  state.lines = splitIntoLines(safeText);
  state.words = splitIntoWords(safeText);
  state.tokens = splitIntoTokens(safeText);
  state.displayedText = typeof options.displayedText === "string" ? options.displayedText : safeText;
  state.previewPageIndex = Math.max(0, Math.round(Number(options.previewPageIndex) || 0));
  state.renderedPageCount = Math.max(1, Math.round(Number(options.renderedPageCount) || 1));
  state.contentScrollOffset = 0;
}

function restoreLessonRenderStateSnapshot(snapshot) {
  if (!snapshot) {
    return;
  }

  state.presentationMode = snapshot.presentationMode;
  state.text = snapshot.text;
  state.lines = [...snapshot.lines];
  state.words = [...snapshot.words];
  state.tokens = [...snapshot.tokens];
  state.displayedText = snapshot.displayedText;
  state.previewPageIndex = snapshot.previewPageIndex;
  state.renderedPageCount = snapshot.renderedPageCount;
  state.contentScrollOffset = snapshot.contentScrollOffset;
}

function getPdfPlaybackRate() {
  const parsedRate = Number(state.pdf.playbackRate);
  return Number.isFinite(parsedRate) && parsedRate > 0
    ? clamp(parsedRate, 0.5, 1)
    : DEFAULT_STAGE_PLAYBACK_RATE;
}

function getLessonPlaybackRate() {
  const parsedRate = Number(state.lessonPlaybackRate);
  return Number.isFinite(parsedRate) && parsedRate > 0
    ? clamp(parsedRate, 0.5, 1)
    : DEFAULT_STAGE_PLAYBACK_RATE;
}

function getStagePlaybackRate() {
  return isPdfPresentationMode() ? getPdfPlaybackRate() : getLessonPlaybackRate();
}

function applyNaturalVoicePlayback(audioElement, playbackRate = getStagePlaybackRate()) {
  if (!audioElement) {
    return;
  }

  audioElement.playbackRate = playbackRate;
  audioElement.preservesPitch = true;
  audioElement.mozPreservesPitch = true;
  audioElement.webkitPreservesPitch = true;
}

function getSpeechSynthesisPlaybackRate(playbackRate = getStagePlaybackRate()) {
  return clamp(
    Math.round(clamp(Number(playbackRate) || DEFAULT_STAGE_PLAYBACK_RATE, 0.5, 2) * 100) / 100,
    0.5,
    1
  );
}

function getVoiceSpecificPreviewRate(voicePreference, playbackRate = getLessonPlaybackRate()) {
  const baseRate = getSpeechSynthesisPlaybackRate(playbackRate);
  if (voicePreference === "anjali") {
    return clamp(baseRate - 0.08, 0.5, 1.04);
  }

  if (voicePreference === "indian-female") {
    return clamp(baseRate - 0.2, 0.5, 1.16);
  }

  if (voicePreference === "female") {
    return clamp(baseRate - 0.14, 0.52, 1.2);
  }

  if (voicePreference === "fresh") {
    return clamp(baseRate - 0.06, 0.56, 1.24);
  }

  return baseRate;
}

function getSceneRenderIntervalMs() {
  const targetFps = state.exportingVideo ? EXPORT_SCENE_RENDER_FPS : LIVE_SCENE_RENDER_FPS;
  return 1000 / Math.max(1, targetFps);
}

function shouldRenderAnimatedSceneFrame(nowMs, options = {}) {
  if (!Number.isFinite(nowMs)) {
    return true;
  }

  if (options.force) {
    return true;
  }

  const elapsedMs = nowMs - (Number.isFinite(options.lastRenderAt) ? options.lastRenderAt : 0);
  if (elapsedMs >= getSceneRenderIntervalMs()) {
    return true;
  }

  return Math.abs(Number(options.mouthDelta) || 0) >= SCENE_RENDER_MOUTH_DELTA;
}

function estimatePdfPageDurationMs(page) {
  if (page?.wordCount) {
    return clamp((page.wordCount * 430) + estimatePauseMsFromText(page?.text || ""), 3200, 24000);
  }

  return clamp(5000 + estimatePauseMsFromText(page?.text || ""), 5000, 24000);
}

function buildPdfPresentationSchedule(totalDurationMs = 0) {
  const presentationPages = getPdfPresentationPages();
  if (!presentationPages.length) {
    return [];
  }

  const baseDurations = presentationPages.map((page) => estimatePdfPageDurationMs(page));
  const baseTotal = baseDurations.reduce((sum, value) => sum + value, 0);
  const targetTotal = totalDurationMs > 0 ? totalDurationMs : baseTotal;
  const scale = baseTotal > 0 ? targetTotal / baseTotal : 1;
  let currentStartMs = 0;

  return presentationPages.map((page, presentationIndex) => {
    const durationMs = Math.max(1500, Math.round(baseDurations[presentationIndex] * scale));
    const scheduleItem = {
      selectionIndex: presentationIndex,
      originalPageIndex: Number.isInteger(page?.originalPageIndex) ? page.originalPageIndex : page?.index,
      startMs: currentStartMs,
      endMs: currentStartMs + durationMs,
      durationMs,
      page
    };
    currentStartMs += durationMs;
    return scheduleItem;
  });
}

function getPdfScheduleTotalDuration(schedule = state.pdf.pageSchedule) {
  if (!schedule.length) {
    return 0;
  }

  return schedule[schedule.length - 1].endMs;
}

function getPdfSelectionIndexForTime(timeMs = state.pdf.currentTimeMs) {
  const schedule = state.pdf.pageSchedule.length
    ? state.pdf.pageSchedule
    : buildPdfPresentationSchedule(state.pdf.narration.durationMs || state.pdf.totalDurationMs);

  if (!schedule.length) {
    return 0;
  }

  const safeTime = clamp(timeMs, 0, getPdfScheduleTotalDuration(schedule));
  const activeItem = schedule.find((item) => safeTime < item.endMs) || schedule[schedule.length - 1];
  return activeItem?.selectionIndex || 0;
}

function syncPdfPreviewPageFromTime(timeMs = state.pdf.currentTimeMs) {
  const presentationPageCount = getPdfPresentationPageCount();
  if (!presentationPageCount) {
    state.previewPageIndex = 0;
    return;
  }

  state.previewPageIndex = clamp(getPdfSelectionIndexForTime(timeMs), 0, presentationPageCount - 1);
}

function rebuildPdfPresentationSchedule(options = {}) {
  const preserveTime = options.preserveTime !== false;
  state.pdf.pageSchedule = buildPdfPresentationSchedule(state.pdf.narration.durationMs || 0);
  state.pdf.totalDurationMs = getPdfScheduleTotalDuration(state.pdf.pageSchedule);
  state.pdf.currentTimeMs = preserveTime
    ? clamp(state.pdf.currentTimeMs, 0, state.pdf.totalDurationMs || 0)
    : 0;
  syncPdfPreviewPageFromTime(state.pdf.currentTimeMs);
}

function getPdfScheduleItemForSelectionIndex(selectionIndex) {
  rebuildPdfPresentationSchedule({ preserveTime: true });
  const safeSelectionIndex = clamp(
    Math.round(Number(selectionIndex) || 0),
    0,
    Math.max(0, state.pdf.pageSchedule.length - 1)
  );
  return state.pdf.pageSchedule[safeSelectionIndex] || null;
}

async function focusPdfSelectionPage(selectionIndex, options = {}) {
  const scheduleItem = getPdfScheduleItemForSelectionIndex(selectionIndex);
  if (!scheduleItem) {
    return;
  }

  const safeSelectionIndex = clamp(scheduleItem.selectionIndex, 0, Math.max(0, getPdfPresentationPageCount() - 1));
  state.previewPageIndex = safeSelectionIndex;

  if (isPdfPresentationMode()) {
    seekPdfPresentation(scheduleItem.startMs);

    if (options.startPlayback) {
      if (state.speaking) {
        return;
      }

      await playPdfPresentation();
      return;
    }

    state.pdf.paused = false;
    updateStageTimelineUi();
    updateStageModeUi();
    drawScene(state.mouthOpen);
    return;
  }

  state.pdf.currentTimeMs = scheduleItem.startMs;
}

function getPdfCurrentTimelinePosition(now = performance.now()) {
  if (state.pdf.audioDriven && state.activeAudio) {
    return clamp(Math.round((state.activeAudio.currentTime || 0) * 1000), 0, state.pdf.totalDurationMs || 0);
  }

  if (state.speaking && state.pdf.timelineStartedAt) {
    const elapsedMs = Math.max(0, now - state.pdf.timelineStartedAt);
    return clamp(
      Math.round(state.pdf.timelineStartOffsetMs + (elapsedMs * getPdfPlaybackRate())),
      0,
      state.pdf.totalDurationMs || 0
    );
  }

  return clamp(state.pdf.currentTimeMs, 0, state.pdf.totalDurationMs || 0);
}

function syncPdfPlaybackPosition(now = performance.now()) {
  state.pdf.currentTimeMs = getPdfCurrentTimelinePosition(now);
  syncPdfPreviewPageFromTime(state.pdf.currentTimeMs);
  return state.pdf.currentTimeMs;
}

function resetPdfNarrationState() {
  if (state.pdf.narration.url) {
    URL.revokeObjectURL(state.pdf.narration.url);
  }

  state.pdf.narration = {
    url: "",
    fileName: "",
    durationMs: 0,
    blob: null,
    textSource: "",
    voice: "",
    source: "",
    syncProfile: null
  };
}

function resetPdfPlaybackState(resetTime = true) {
  state.pdf.paused = false;
  state.pdf.audioDriven = false;
  state.pdf.timelineStartedAt = 0;
  state.pdf.timelineStartOffsetMs = 0;

  if (resetTime) {
    state.pdf.currentTimeMs = 0;
  }

  rebuildPdfPresentationSchedule({ preserveTime: true });
}

function getPdfPageSnippet(text) {
  const compactText = (text || "").replace(/\s+/g, " ").trim();
  if (!compactText) {
    return "No readable text was found on this page. The original PDF page image can still be presented.";
  }

  return compactText.length > 140
    ? `${compactText.slice(0, 137)}...`
    : compactText;
}

function updatePdfPageSelectionSummary() {
  if (!pdfPageSelectionSummary) {
    return;
  }

  if (!state.pdf.pages.length) {
    pdfPageSelectionSummary.textContent = "Select a PDF to choose which pages should appear on the screen.";
    return;
  }

  const selectedCount = getPdfSelectedPageCount();
  const estimatedSchedule = buildPdfPresentationSchedule(state.pdf.narration.durationMs || 0);
  const estimatedDuration = getPdfScheduleTotalDuration(estimatedSchedule);
  pdfPageSelectionSummary.textContent = selectedCount
    ? `${selectedCount} of ${state.pdf.pageCount} PDF page${state.pdf.pageCount === 1 ? "" : "s"} selected | estimated presentation length ${formatDurationMs(estimatedDuration)}. Use the stage speed control to play faster or slower.`
    : "No PDF pages selected yet. Tick at least one page to show or present it.";
}

function getCopyIconSvg() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
      <rect x="9" y="9" width="10" height="10" rx="2"></rect>
      <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
  `;
}

async function copyTextToClipboard(text) {
  const content = `${text || ""}`.trim();
  if (!content) {
    throw new Error("There is no readable text to copy for this PDF page.");
  }

  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(content);
    return;
  }

  const helperField = document.createElement("textarea");
  helperField.value = content;
  helperField.setAttribute("readonly", "readonly");
  helperField.style.position = "fixed";
  helperField.style.left = "-9999px";
  helperField.style.top = "0";
  document.body.appendChild(helperField);
  helperField.focus();
  helperField.select();

  const copied = document.execCommand("copy");
  document.body.removeChild(helperField);

  if (!copied) {
    throw new Error("Copy failed in this browser.");
  }
}

function buildPdfClipboardHtml(text, exampleImages = []) {
  const safeText = escapeHtml(text || "");
  const imageMarkup = exampleImages.map((image, index) => `
      <figure style="margin:0 0 12px 0;">
        <img
          src="${image.dataUrl}"
          alt="${escapeHtml(image.label || `Example image ${index + 1}`)}"
          data-maths-teacher-example-image="1"
          data-file-name="${escapeHtml(image.fileName || `pdf-page-example-${index + 1}.png`)}"
          data-anchor-text="${escapeHtml(image.anchorText || "")}"
          data-anchor-order="${Number.isFinite(Number(image.anchorOrder)) ? Number(image.anchorOrder) : index}"
          data-source-page-number="${Number.isFinite(Number(image.pageNumber)) ? Number(image.pageNumber) : 0}"
          style="display:block;max-width:100%;height:auto;border-radius:10px;border:1px solid #d7e4ee;"
        />
      </figure>
    `).join("");

  return `
    <div ${PDF_CLIPBOARD_MARKER_ATTRIBUTE}="1" style="font-family:Arial,sans-serif;color:#1f2933;">
      <pre data-maths-teacher-pdf-text="1" style="white-space:pre-wrap;margin:0 0 12px 0;font:inherit;">${safeText}</pre>
      ${imageMarkup}
    </div>
  `;
}

async function copyPdfPageContent(page, pageIndex) {
  const text = `${page?.text || ""}`.trim();
  const exampleImages = Array.isArray(page?.exampleImages) ? page.exampleImages : [];

  if (!text && !exampleImages.length) {
    throw new Error("There is no readable text or example image to copy for this PDF page.");
  }

  if (navigator.clipboard?.write && typeof window.ClipboardItem === "function") {
    try {
      const html = buildPdfClipboardHtml(text, exampleImages);
      const clipboardItem = new window.ClipboardItem({
        "text/plain": new Blob([text], { type: "text/plain" }),
        "text/html": new Blob([html], { type: "text/html" })
      });
      await navigator.clipboard.write([clipboardItem]);
      return {
        imageCount: exampleImages.length,
        pageNumber: pageIndex + 1
      };
    } catch (error) {
      console.error(error);
    }
  }

  await copyTextToClipboard(text);
  return {
    imageCount: 0,
    pageNumber: pageIndex + 1
  };
}

function renderPdfPreview() {
  pdfPreviewList.innerHTML = "";

  if (!state.pdf.pageTexts.length && !state.pdf.pages.length) {
    pdfPreviewList.classList.add("hidden");
    pdfMeta.textContent = "Upload a PDF to preview the extracted text before showing it on the slide.";
    return;
  }

  const wordCount = splitIntoWords(state.pdf.extractedText).length;
  const textSummary = wordCount
    ? `${wordCount} word${wordCount === 1 ? "" : "s"} loaded into the lesson box.`
    : "No readable PDF text was found, but the rendered page images are ready to present.";
  pdfMeta.textContent = `${state.pdf.fileName} | ${state.pdf.pageCount} PDF page${state.pdf.pageCount === 1 ? "" : "s"} | ${textSummary}`;

  state.pdf.pageTexts.forEach((pageText, index) => {
    const page = state.pdf.pages[index] || {};
    const exampleImages = Array.isArray(page.exampleImages) ? page.exampleImages : [];
    const card = document.createElement("article");
    card.className = "pdf-preview-item";

    const previewHead = document.createElement("div");
    previewHead.className = "pdf-preview-head";

    const pageLabel = document.createElement("p");
    pageLabel.className = "pdf-preview-page";
    pageLabel.textContent = `Page ${index + 1}`;

    const copyBtn = document.createElement("button");
    copyBtn.type = "button";
    copyBtn.className = "ghost-btn pdf-preview-copy-btn";
    copyBtn.title = `Copy PDF page ${index + 1} text${exampleImages.length ? " and example images" : ""}`;
    copyBtn.setAttribute("aria-label", `Copy PDF page ${index + 1} text${exampleImages.length ? " and example images" : ""}`);
    copyBtn.innerHTML = getCopyIconSvg();
    copyBtn.disabled = !pageText.trim() && !exampleImages.length;
    copyBtn.addEventListener("click", async () => {
      try {
        const copyResult = await copyPdfPageContent(page, index);
        setPdfStatus(
          copyResult.imageCount
            ? `Copied PDF page ${index + 1} text and ${copyResult.imageCount} maths/example image${copyResult.imageCount === 1 ? "" : "s"} only. Paste into the lesson box to place those images on the presentation screen.`
            : `Copied extracted text from PDF page ${index + 1}.`
        );
      } catch (error) {
        console.error(error);
        setPdfStatus(error.message || `Could not copy PDF page ${index + 1}.`);
      }
    });

    const previewText = document.createElement("p");
    previewText.className = "pdf-preview-text";
    previewText.textContent = pageText || "No readable text was found on this page.";

    previewHead.appendChild(pageLabel);
    previewHead.appendChild(copyBtn);
    card.appendChild(previewHead);
    card.appendChild(previewText);

    if (exampleImages.length) {
      const imageTitle = document.createElement("p");
      imageTitle.className = "pdf-preview-images-title";
      imageTitle.textContent = `Detected maths/example images only (${exampleImages.length})`;
      card.appendChild(imageTitle);

      const imageGrid = document.createElement("div");
      imageGrid.className = "pdf-preview-image-grid";

      exampleImages.forEach((image, imageIndex) => {
        const figure = document.createElement("figure");
        figure.className = "pdf-preview-image-card";

        const img = document.createElement("img");
        img.className = "pdf-preview-image";
        img.src = image.dataUrl;
        img.alt = image.label || `Example image ${imageIndex + 1} from PDF page ${index + 1}`;
        img.loading = "lazy";

        const caption = document.createElement("figcaption");
        caption.className = "pdf-preview-image-caption";
        caption.textContent = image.label || `Example image ${imageIndex + 1}`;

        figure.appendChild(img);
        figure.appendChild(caption);
        imageGrid.appendChild(figure);
      });

      card.appendChild(imageGrid);
    }

    pdfPreviewList.appendChild(card);
  });

  pdfPreviewList.classList.remove("hidden");
}

function renderPdfPageList() {
  pdfPageList.innerHTML = "";

  if (!state.pdf.pages.length) {
    pdfPageList.classList.add("hidden");
    updatePdfPageSelectionSummary();
    return;
  }

  const selectedIndexes = new Set(getPdfSelectedPageIndexes());

  state.pdf.pages.forEach((page) => {
    const card = document.createElement("article");
    card.className = `pdf-page-card${selectedIndexes.has(page.index) ? " is-selected" : ""}`;

    const togglePageSelection = (shouldSelect) => {
      const nextSelection = new Set(getPdfSelectedPageIndexes());
      if (shouldSelect) {
        nextSelection.add(page.index);
      } else {
        nextSelection.delete(page.index);
      }

      applyPdfPageSelection(Array.from(nextSelection));

      if (isPdfPresentationMode() && !getPdfSelectedPageCount()) {
        setStatus("No PDF pages are selected. Choose at least one page to keep presenting.");
      }
    };

    const focusPageSelection = async () => {
      const selectionIndex = getPdfSelectedPageIndexes().indexOf(page.index);
      if (selectionIndex >= 0) {
        await focusPdfSelectionPage(selectionIndex, {
          startPlayback: isPdfPresentationMode() && !stagePanel.classList.contains("hidden")
        });
      }
    };

    const setPageSelection = async (shouldSelect, options = {}) => {
      togglePageSelection(shouldSelect);
      if (shouldSelect && options.focusPage !== false) {
        await focusPageSelection();
      }
    };

    const checkboxLabel = document.createElement("label");
    checkboxLabel.className = "pdf-page-check";
    checkboxLabel.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (state.pdfLoading) {
        return;
      }

      const shouldSelect = !getPdfSelectedPageIndexes().includes(page.index);
      await setPageSelection(shouldSelect);
    });

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = selectedIndexes.has(page.index);
    checkbox.disabled = state.pdfLoading;
    checkbox.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (state.pdfLoading) {
        return;
      }

      const shouldSelect = !getPdfSelectedPageIndexes().includes(page.index);
      await setPageSelection(shouldSelect);
    });

    const checkboxText = document.createElement("span");
    checkboxText.textContent = `Present PDF page ${page.pageNumber}`;

    checkboxLabel.appendChild(checkbox);
    checkboxLabel.appendChild(checkboxText);

    const thumb = document.createElement("img");
    thumb.className = "pdf-page-thumb";
    thumb.src = page.thumbnailUrl;
    thumb.alt = `Preview of PDF page ${page.pageNumber}`;
    thumb.loading = "lazy";
    thumb.addEventListener("click", async (event) => {
      event.stopPropagation();
      if (!getPdfSelectedPageIndexes().includes(page.index)) {
        await setPageSelection(true, { focusPage: true });
        return;
      }

      await focusPageSelection();
    });

    const meta = document.createElement("div");
    meta.className = "pdf-page-meta";

    const title = document.createElement("p");
    title.className = "pdf-page-title";
    title.textContent = `PDF page ${page.pageNumber}`;

    const stats = document.createElement("p");
    stats.className = "pdf-page-stats";
    stats.textContent = `${page.wordCount || 0} word${page.wordCount === 1 ? "" : "s"} | ${formatDurationMs(estimatePdfPageDurationMs(page))} estimated${page.humanContentMasked ? " | human photos hidden" : ""}`;

    const snippet = document.createElement("p");
    snippet.className = "pdf-page-snippet";
    snippet.textContent = getPdfPageSnippet(page.text);

    meta.appendChild(title);
    meta.appendChild(stats);
    meta.appendChild(snippet);

    card.appendChild(checkboxLabel);
    card.appendChild(thumb);
    card.appendChild(meta);
    card.addEventListener("click", async () => {
      if (state.pdfLoading) {
        return;
      }

      const shouldSelect = !getPdfSelectedPageIndexes().includes(page.index);
      await setPageSelection(shouldSelect);
    });
    pdfPageList.appendChild(card);
  });

  pdfPageList.classList.remove("hidden");
  updatePdfPageSelectionSummary();
}

function updatePdfUi() {
  const hasSelectedFile = Boolean(state.pdfSelectedFile);
  const hasLoadedPdf = Boolean(state.pdf.pages.length);
  const hasSelection = Boolean(getPdfSelectedPageCount());
  const allSelected = hasLoadedPdf && getPdfSelectedPageCount() === state.pdf.pages.length;
  const isBusy = state.pdfLoading;

  pdfInput.disabled = isBusy;
  pdfShowBtn.disabled = isBusy || !hasLoadedPdf || !hasSelection;
  pdfPresentBtn.disabled = isBusy || !hasLoadedPdf || !hasSelection;
  pdfSelectAllBtn.disabled = isBusy || !hasLoadedPdf || allSelected;
  pdfClearSelectionBtn.disabled = isBusy || !hasLoadedPdf || !hasSelection;
  clearPdfBtn.disabled = isBusy || (!hasSelectedFile && !hasLoadedPdf);

  if (pdfShowBtn) {
    pdfShowBtn.textContent = "Show Screen";
  }

  if (pdfPresentBtn) {
    pdfPresentBtn.textContent = "Read And Present Context";
  }

  if (showScreenBtn) {
    showScreenBtn.textContent = "Show Screen";
  }
}

function clearPdfSelection(options = {}) {
  const keepLessonText = options.keepLessonText !== false;

  stopPlayback(false);
  invalidatePdfPresentationRequest();
  state.pdfSelectedFile = null;
  state.pdfLoading = false;
  state.presentationMode = "lesson";
  state.images = state.images.filter((item) => !isManagedAutoPdfImage(item));
  resetPdfNarrationState();
  state.pdf = {
    fileName: "",
    fileSignature: "",
    extractedText: "",
    pageTexts: [],
    pageCount: 0,
    pages: [],
    contextPages: [],
    contextPagesKey: "",
    autoImageSyncKey: "",
    lessonAutoImageSyncKey: "",
    selectedPageIndexes: [],
    renderMode: "context",
    currentTimeMs: 0,
    totalDurationMs: 0,
    playbackRate: Number(playbackSpeedSelect?.value || DEFAULT_STAGE_PLAYBACK_RATE),
    requestId: 0,
    pageSchedule: [],
    paused: false,
    audioDriven: false,
    timelineStartedAt: 0,
    timelineStartOffsetMs: 0,
    narration: {
      url: "",
      fileName: "",
      durationMs: 0,
      blob: null,
      textSource: "",
      voice: "",
      source: "",
      syncProfile: null
    }
  };

  pdfInput.value = "";
  resetPdfProgress();
  renderPdfPreview();
  renderPdfPageList();
  renderImagePreviews();
  setPdfStatus(
    keepLessonText
      ? "PDF cleared. The extracted lesson text stays in the content box until you change it."
      : "PDF cleared."
  );
  updatePdfUi();
}

function normalizePdfLine(text) {
  return text
    .replace(/\u0000/g, "")
    .replace(/[ \t\f\v]+/g, " ")
    .trim();
}

function buildPdfPageText(items = []) {
  if (!Array.isArray(items) || !items.length) {
    return "";
  }

  const lines = [];
  let currentLine = [];
  let lastY = null;
  let lastX = null;
  let lastHeight = 0;

  const flushLine = () => {
    const nextLine = normalizePdfLine(currentLine.join(""));
    if (nextLine) {
      lines.push(nextLine);
    }
    currentLine = [];
    lastX = null;
  };

  items.forEach((item) => {
    if (!item || typeof item.str !== "string") {
      return;
    }

    const rawText = item.str;
    const x = Number(item.transform?.[4] ?? 0);
    const y = Number(item.transform?.[5] ?? 0);
    const itemHeight = Math.max(
      12,
      Math.abs(Number(item.height || 0)),
      Math.abs(Number(item.transform?.[3] || 0)),
      lastHeight || 0
    );

    if (lastY !== null) {
      const lineJump = Math.abs(y - lastY);
      const newLineThreshold = Math.max(4, itemHeight * 0.55);

      if (lineJump > newLineThreshold) {
        const needsParagraphGap = lineJump > itemHeight * 1.7;
        flushLine();

        if (needsParagraphGap && lines.length && lines[lines.length - 1] !== "") {
          lines.push("");
        }
      } else if (currentLine.length && lastX !== null) {
        const gap = x - lastX;
        const needsSpace = gap > Math.max(5, itemHeight * 0.2)
          && !/\s$/.test(currentLine[currentLine.length - 1])
          && rawText
          && !/^[,.;:!?%)\]]/.test(rawText);

        if (needsSpace) {
          currentLine.push(" ");
        }
      }
    }

    if (rawText) {
      currentLine.push(rawText);
    }

    lastY = y;
    lastHeight = itemHeight;
    lastX = x + Number(item.width || 0);

    if (item.hasEOL) {
      flushLine();
    }
  });

  flushLine();
  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

function escapeHtml(text) {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildPdfLineObjects(items = [], sourcePageHeight = 0, renderScale = 1) {
  if (!Array.isArray(items) || !items.length) {
    return [];
  }

  const lines = [];
  let currentLine = [];
  let lastY = null;
  let lastX = null;
  let lastHeight = 0;

  const flushLine = () => {
    const text = normalizePdfLine(currentLine.map((item) => item.text).join(""));
    const visibleTokens = currentLine.filter((item) => item.width > 0 && item.height > 0);
    if (!text || !visibleTokens.length) {
      currentLine = [];
      lastX = null;
      return;
    }

    const left = Math.min(...visibleTokens.map((item) => item.x));
    const top = Math.min(...visibleTokens.map((item) => item.y));
    const right = Math.max(...visibleTokens.map((item) => item.x + item.width));
    const bottom = Math.max(...visibleTokens.map((item) => item.y + item.height));

    lines.push({
      text,
      x: left,
      y: top,
      width: Math.max(1, right - left),
      height: Math.max(1, bottom - top)
    });

    currentLine = [];
    lastX = null;
  };

  items.forEach((item) => {
    if (!item || typeof item.str !== "string") {
      return;
    }

    const rawText = item.str;
    const sourceX = Number(item.transform?.[4] ?? 0);
    const sourceY = Number(item.transform?.[5] ?? 0);
    const sourceHeight = Math.max(
      12,
      Math.abs(Number(item.height || 0)),
      Math.abs(Number(item.transform?.[3] || 0)),
      lastHeight || 0
    );
    const scaledHeight = sourceHeight * renderScale;
    const scaledY = Math.max(0, sourcePageHeight - sourceY - sourceHeight) * renderScale;
    const scaledX = sourceX * renderScale;
    const scaledWidth = Math.max(1, Number(item.width || 0) * renderScale);

    if (lastY !== null) {
      const lineJump = Math.abs(sourceY - lastY);
      const newLineThreshold = Math.max(4, sourceHeight * 0.55);

      if (lineJump > newLineThreshold) {
        flushLine();
      } else if (currentLine.length && lastX !== null) {
        const gap = sourceX - lastX;
        const needsSpace = gap > Math.max(5, sourceHeight * 0.2)
          && !/\s$/.test(currentLine[currentLine.length - 1].text)
          && rawText
          && !/^[,.;:!?%)\]]/.test(rawText);

        if (needsSpace) {
          currentLine.push({
            text: " ",
            x: scaledX,
            y: scaledY,
            width: 0,
            height: 0
          });
        }
      }
    }

    currentLine.push({
      text: rawText,
      x: scaledX,
      y: scaledY,
      width: scaledWidth,
      height: scaledHeight
    });

    lastY = sourceY;
    lastHeight = sourceHeight;
    lastX = sourceX + Number(item.width || 0);

    if (item.hasEOL) {
      flushLine();
    }
  });

  flushLine();
  return lines;
}

function isLikelyPdfExampleLine(text = "") {
  const line = normalizePdfLine(text).toLowerCase();
  if (!line) {
    return false;
  }

  if (/\b(example|exercise|question|quiz|solve|find|compare|convert|add|subtract|multiply|division|divide|table|sum|answer|expanded form|place value|fraction|decimal|metric)\b/.test(line)) {
    return true;
  }

  const digitCount = (line.match(/\d/g) || []).length;
  const operatorCount = (line.match(/[=+\-×÷*/<>%]/g) || []).length;
  const hasUnits = /\b(cm|mm|km|hm|dam|m|dm|kg|gm|ml|rupees|rs\.?)\b/.test(line);

  return (digitCount >= 2 && (operatorCount >= 1 || hasUnits))
    || (digitCount >= 3 && /\b(blank|ladder|step|steps)\b/.test(line));
}

function isLikelyPdfSectionHeading(text = "") {
  const line = normalizePdfLine(text);
  if (!line) {
    return false;
  }

  return line.length < 72
    && !/[=+\-×÷*/<>%]/.test(line)
    && /^(#|\b(chapter|lesson|topic|concept|summary|quick facts|practice|example)\b)/i.test(line);
}

function getRectIntersectionArea(left, right) {
  const overlapWidth = Math.max(0, Math.min(left.x + left.width, right.x + right.width) - Math.max(left.x, right.x));
  const overlapHeight = Math.max(0, Math.min(left.y + left.height, right.y + right.height) - Math.max(left.y, right.y));
  return overlapWidth * overlapHeight;
}

function expandPdfExampleBounds(bounds, pageWidth, pageHeight) {
  const minWidth = Math.min(pageWidth, PDF_EXAMPLE_IMAGE_MIN_WIDTH_PX);
  const minHeight = Math.min(pageHeight, PDF_EXAMPLE_IMAGE_MIN_HEIGHT_PX);
  const paddedWidth = Math.max(minWidth, bounds.width + 44);
  const paddedHeight = Math.max(minHeight, bounds.height + 36);
  const centerX = bounds.x + (bounds.width / 2);
  const centerY = bounds.y + (bounds.height / 2);

  const width = Math.min(pageWidth, paddedWidth);
  const height = Math.min(pageHeight, paddedHeight);
  const x = clamp(Math.round(centerX - (width / 2)), 0, Math.max(0, pageWidth - width));
  const y = clamp(Math.round(centerY - (height / 2)), 0, Math.max(0, pageHeight - height));

  return { x, y, width, height };
}

function extractPdfExampleImageAssets(items = [], presentationCanvas, sourcePageHeight = 0, renderScale = 1, maskRects = [], pageNumber = 1) {
  if (!presentationCanvas || !items.length) {
    return [];
  }

  const lines = buildPdfLineObjects(items, sourcePageHeight, renderScale);
  if (!lines.length) {
    return [];
  }

  const candidateBounds = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (!isLikelyPdfExampleLine(line.text)) {
      continue;
    }

    let bounds = {
      x: line.x,
      y: line.y,
      width: line.width,
      height: line.height
    };
    let endIndex = index;

    while (endIndex + 1 < lines.length && (endIndex - index) < 4) {
      const nextLine = lines[endIndex + 1];
      const previousLine = lines[endIndex];
      const gap = nextLine.y - (previousLine.y + previousLine.height);

      if (gap > Math.max(56, previousLine.height * 2.6)) {
        break;
      }

      if ((endIndex > index) && isLikelyPdfSectionHeading(nextLine.text)) {
        break;
      }

      const left = Math.min(bounds.x, nextLine.x);
      const top = Math.min(bounds.y, nextLine.y);
      const right = Math.max(bounds.x + bounds.width, nextLine.x + nextLine.width);
      const bottom = Math.max(bounds.y + bounds.height, nextLine.y + nextLine.height);
      bounds = {
        x: left,
        y: top,
        width: right - left,
        height: bottom - top
      };
      endIndex += 1;
    }

    const expandedBounds = expandPdfExampleBounds(
      bounds,
      presentationCanvas.width,
      presentationCanvas.height
    );

    const maskedOverlapRatio = maskRects.reduce((highestRatio, maskRect) => {
      const overlapArea = getRectIntersectionArea(expandedBounds, maskRect);
      return Math.max(highestRatio, overlapArea / Math.max(1, expandedBounds.width * expandedBounds.height));
    }, 0);

    if (maskedOverlapRatio > 0.16) {
      continue;
    }

    if ((expandedBounds.width / presentationCanvas.width) > 0.96 && (expandedBounds.height / presentationCanvas.height) > 0.88) {
      continue;
    }

    const overlapsExisting = candidateBounds.some((existingBounds) => {
      const overlapArea = getRectIntersectionArea(existingBounds, expandedBounds);
      const smallestArea = Math.min(
        existingBounds.width * existingBounds.height,
        expandedBounds.width * expandedBounds.height
      );
      return overlapArea / Math.max(1, smallestArea) > 0.56;
    });

    if (!overlapsExisting) {
      candidateBounds.push(expandedBounds);
    }

    if (candidateBounds.length >= PDF_EXAMPLE_IMAGE_MAX_PER_PAGE) {
      break;
    }
  }

  return candidateBounds.map((bounds, index) => {
    const cropCanvas = document.createElement("canvas");
    cropCanvas.width = Math.max(1, Math.round(bounds.width));
    cropCanvas.height = Math.max(1, Math.round(bounds.height));
    const cropContext = cropCanvas.getContext("2d", { alpha: false });
    applyHighQualityImageRendering(cropContext);
    cropContext.fillStyle = "#ffffff";
    cropContext.fillRect(0, 0, cropCanvas.width, cropCanvas.height);
    cropContext.drawImage(
      presentationCanvas,
      bounds.x,
      bounds.y,
      bounds.width,
      bounds.height,
      0,
      0,
      cropCanvas.width,
      cropCanvas.height
    );

    const anchorLines = lines
      .filter((line) => {
        const verticallyClose = (line.y + line.height) >= (bounds.y - 18)
          && line.y <= (bounds.y + bounds.height + 18);
        const horizontalOverlap = getRectIntersectionArea(bounds, {
          x: line.x,
          y: line.y,
          width: line.width,
          height: line.height
        });
        return verticallyClose && horizontalOverlap > 0;
      })
      .slice(0, 3);
    const anchorText = anchorLines
      .map((line) => normalizePdfLine(line.text))
      .filter(Boolean)
      .join(" ")
      .trim();

    return {
      id: `pdf-example-${pageNumber}-${index + 1}`,
      label: `Maths example image ${index + 1}`,
      fileName: `pdf-page-${pageNumber}-example-${index + 1}.png`,
      pageNumber,
      anchorText,
      anchorOrder: index,
      width: cropCanvas.width,
      height: cropCanvas.height,
      bounds,
      dataUrl: cropCanvas.toDataURL("image/png")
    };
  });
}

function preparePdfLibrary() {
  if (!window.pdfjsLib || !window.pdfjsWorker?.WorkerMessageHandler) {
    return null;
  }

  window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDF_JS_WORKER_FILE;

  if (!window.pdfjsLib.PDFWorker.prototype.__localFakeWorkerPatched) {
    // Force the main-thread fallback worker so PDF parsing also works from local file pages.
    window.pdfjsLib.PDFWorker.prototype._initialize = function patchedPdfWorkerInitialize() {
      this._setupFakeWorker();
    };
    window.pdfjsLib.PDFWorker.prototype.__localFakeWorkerPatched = true;
  }

  return window.pdfjsLib;
}

function ensurePdfLibraryLoaded() {
  const readyLibrary = preparePdfLibrary();
  if (readyLibrary) {
    return Promise.resolve(readyLibrary);
  }

  if (pdfLibraryPromise) {
    return pdfLibraryPromise;
  }

  const loadScript = (src) => new Promise((resolve, reject) => {
    const existing = Array.from(document.scripts).find((item) => item.src && item.src.endsWith(src));
    if (existing) {
      if ((src === PDF_JS_FILE && window.pdfjsLib) || (src === PDF_JS_WORKER_FILE && window.pdfjsWorker?.WorkerMessageHandler)) {
        resolve();
        return;
      }

      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error(`The PDF helper file ${src} could not be loaded.`)), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`The PDF helper file ${src} could not be loaded.`));
    document.body.appendChild(script);
  });

  pdfLibraryPromise = loadScript(PDF_JS_FILE)
    .then(() => {
      if (!window.pdfjsLib) {
        throw new Error("The PDF reader loaded, but it is not available in the page yet.");
      }

      return loadScript(PDF_JS_WORKER_FILE);
    })
    .then(() => {
      const preparedLibrary = preparePdfLibrary();
      if (!preparedLibrary) {
        throw new Error("The PDF worker loaded, but it is not available in the page yet.");
      }

      return preparedLibrary;
    })
    .catch((error) => {
    pdfLibraryPromise = null;
    throw error;
  });

  return pdfLibraryPromise;
}

function getPdfFaceDetector() {
  if (pdfFaceFilteringUnavailable || typeof window.FaceDetector !== "function") {
    return null;
  }

  if (pdfFaceDetector) {
    return pdfFaceDetector;
  }

  try {
    pdfFaceDetector = new window.FaceDetector({
      fastMode: true,
      maxDetectedFaces: 12
    });
    return pdfFaceDetector;
  } catch (error) {
    console.error(error);
    pdfFaceFilteringUnavailable = true;
    return null;
  }
}

function getPdfFaceMaskRect(faceBounds, canvasWidth, canvasHeight) {
  const bounds = faceBounds || {};
  const width = Math.max(PDF_FACE_MASK_MIN_SIZE, Number(bounds.width) || 0);
  const height = Math.max(PDF_FACE_MASK_MIN_SIZE, Number(bounds.height) || 0);
  const originX = Number(bounds.x) || 0;
  const originY = Number(bounds.y) || 0;
  const left = clamp(Math.floor(originX - (width * PDF_FACE_MASK_PADDING_X)), 0, canvasWidth);
  const top = clamp(Math.floor(originY - (height * PDF_FACE_MASK_PADDING_TOP)), 0, canvasHeight);
  const right = clamp(Math.ceil(originX + width + (width * PDF_FACE_MASK_PADDING_X)), left, canvasWidth);
  const bottom = clamp(Math.ceil(originY + height + (height * PDF_FACE_MASK_PADDING_BOTTOM)), top, canvasHeight);

  return {
    x: left,
    y: top,
    width: Math.max(0, right - left),
    height: Math.max(0, bottom - top)
  };
}

async function createFilteredPdfPageCanvas(sourceCanvas) {
  const detector = getPdfFaceDetector();
  if (!detector) {
    return {
      canvas: sourceCanvas,
      humanContentMasked: false,
      maskedFaceCount: 0,
      maskRects: []
    };
  }

  try {
    const faces = await detector.detect(sourceCanvas);
    if (!Array.isArray(faces) || !faces.length) {
      return {
        canvas: sourceCanvas,
        humanContentMasked: false,
        maskedFaceCount: 0,
        maskRects: []
      };
    }

    const filteredCanvas = document.createElement("canvas");
    filteredCanvas.width = sourceCanvas.width;
    filteredCanvas.height = sourceCanvas.height;
    const filteredContext = filteredCanvas.getContext("2d", { alpha: false });
    applyHighQualityImageRendering(filteredContext);
    filteredContext.fillStyle = "#ffffff";
    filteredContext.fillRect(0, 0, filteredCanvas.width, filteredCanvas.height);
    filteredContext.drawImage(sourceCanvas, 0, 0);

    const maskRects = [];

    faces.forEach((face) => {
      const maskRect = getPdfFaceMaskRect(face?.boundingBox, filteredCanvas.width, filteredCanvas.height);
      if (!maskRect.width || !maskRect.height) {
        return;
      }

      maskRects.push(maskRect);
      filteredContext.fillStyle = "#ffffff";
      filteredContext.fillRect(maskRect.x, maskRect.y, maskRect.width, maskRect.height);
    });

    return {
      canvas: filteredCanvas,
      humanContentMasked: true,
      maskedFaceCount: faces.length,
      maskRects
    };
  } catch (error) {
    console.error(error);
    pdfFaceFilteringUnavailable = true;
    return {
      canvas: sourceCanvas,
      humanContentMasked: false,
      maskedFaceCount: 0,
      maskRects: []
    };
  }
}

async function renderPdfPageAssets(pdfPage, pageNumber, textContent) {
  const sourceViewport = pdfPage.getViewport({ scale: 1 });
  const renderScale = Math.max(
    PDF_RENDER_SCALE_MIN,
    Math.min(
      PDF_RENDER_SCALE_MAX,
      Math.min(
        PDF_RENDER_TARGET_MAX_WIDTH_PX / sourceViewport.width,
        PDF_RENDER_TARGET_MAX_HEIGHT_PX / sourceViewport.height
      )
    )
  );
  const renderViewport = pdfPage.getViewport({ scale: renderScale });
  const renderCanvas = document.createElement("canvas");
  renderCanvas.width = Math.ceil(renderViewport.width);
  renderCanvas.height = Math.ceil(renderViewport.height);

  const renderContext = renderCanvas.getContext("2d", { alpha: false });
  applyHighQualityImageRendering(renderContext);
  renderContext.fillStyle = "#ffffff";
  renderContext.fillRect(0, 0, renderCanvas.width, renderCanvas.height);

  await pdfPage.render({
    canvasContext: renderContext,
    viewport: renderViewport,
    background: "rgba(255,255,255,1)"
  }).promise;

  const filteredPage = await createFilteredPdfPageCanvas(renderCanvas);
  const presentationCanvas = filteredPage.canvas || renderCanvas;

  const thumbCanvas = document.createElement("canvas");
  const thumbWidth = 220;
  const thumbHeight = Math.max(280, Math.round((presentationCanvas.height / presentationCanvas.width) * thumbWidth));
  thumbCanvas.width = thumbWidth;
  thumbCanvas.height = thumbHeight;
  const thumbContext = thumbCanvas.getContext("2d", { alpha: false });
  applyHighQualityImageRendering(thumbContext);
  thumbContext.fillStyle = "#eef6fb";
  thumbContext.fillRect(0, 0, thumbCanvas.width, thumbCanvas.height);
  thumbContext.drawImage(presentationCanvas, 0, 0, thumbCanvas.width, thumbCanvas.height);

  const pageText = buildPdfPageText(textContent.items);
  const wordCount = splitIntoWords(pageText).length;
  const exampleImages = extractPdfExampleImageAssets(
    textContent.items,
    presentationCanvas,
    sourceViewport.height,
    renderScale,
    filteredPage.maskRects || [],
    pageNumber
  );

  return {
    index: pageNumber - 1,
    pageNumber,
    text: pageText,
    wordCount,
    exampleImages,
    renderCanvas: presentationCanvas,
    thumbnailUrl: thumbCanvas.toDataURL("image/png"),
    width: presentationCanvas.width,
    height: presentationCanvas.height,
    humanContentMasked: filteredPage.humanContentMasked,
    maskedFaceCount: filteredPage.maskedFaceCount
  };
}

async function extractPdfContent(file) {
  const pdfjsLib = await ensurePdfLibraryLoaded();
  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjsLib.getDocument({
    data: new Uint8Array(arrayBuffer),
    disableWorker: true
  });
  const pdfDocument = await loadingTask.promise;
  const pageTexts = [];
  const pages = [];
  const totalPages = Math.max(1, pdfDocument.numPages || 1);

  for (let pageNumber = 1; pageNumber <= totalPages; pageNumber += 1) {
    const page = await pdfDocument.getPage(pageNumber);
    const textContent = await page.getTextContent();
    const renderedPage = await renderPdfPageAssets(page, pageNumber, textContent);
    const pageText = renderedPage.text;
    pageTexts.push(pageText);
    pages.push(renderedPage);
    setPdfProgress(18 + Math.round((pageNumber / totalPages) * 72), `Reading page ${pageNumber} of ${totalPages}`);
  }

  const extractedText = pageTexts
    .map((pageText) => pageText.trim())
    .filter(Boolean)
    .join("\n\n");

  return {
    extractedText,
    pageTexts,
    pageCount: totalPages,
    pages
  };
}

async function loadSelectedPdf(forceReload = false) {
  const file = state.pdfSelectedFile;
  if (!file) {
    setPdfStatus("Select a PDF file first.");
    updatePdfUi();
    return false;
  }

  const fileSignature = getPdfFileSignature(file);
  if (!forceReload && state.pdf.fileSignature === fileSignature && state.pdf.pages.length) {
    return true;
  }

  state.pdfLoading = true;
  setPdfProgress(6, "Preparing PDF");
  setPdfStatus(`Reading ${file.name}...`);
  updatePdfUi();

  try {
    const previousPdfText = state.pdf.extractedText.trim();
    const existingLessonText = lessonInput.value.trim();
    setPdfProgress(12, "Loading PDF reader");
    const payload = await extractPdfContent(file);
    resetPdfNarrationState();
  state.pdf = {
    fileName: file.name,
      fileSignature,
      extractedText: payload.extractedText,
      pageTexts: payload.pageTexts,
      pageCount: payload.pageCount,
      pages: payload.pages,
      contextPages: [],
      contextPagesKey: "",
      autoImageSyncKey: "",
      lessonAutoImageSyncKey: "",
      selectedPageIndexes: [],
      renderMode: "context",
      currentTimeMs: 0,
      totalDurationMs: 0,
      playbackRate: Number(playbackSpeedSelect?.value || DEFAULT_STAGE_PLAYBACK_RATE),
      requestId: 0,
      pageSchedule: [],
      paused: false,
      audioDriven: false,
      timelineStartedAt: 0,
      timelineStartOffsetMs: 0,
      narration: {
        url: "",
        fileName: "",
        durationMs: 0,
        blob: null,
        textSource: "",
        voice: "",
        source: "",
        syncProfile: null
      }
  };
  const shouldLoadExtractedTextIntoLesson = Boolean(payload.extractedText.trim()) && (
    !existingLessonText
    || normalizePdfSearchFragment(existingLessonText) === normalizePdfSearchFragment(previousPdfText)
  );
  if (shouldLoadExtractedTextIntoLesson && lessonInput.value !== payload.extractedText) {
    lessonInput.value = payload.extractedText;
    handleLessonInputChange();
  }
  state.images = state.images.filter((item) => !isManagedAutoPdfImage(item));
  state.pdf.pageSchedule = buildPdfPresentationSchedule();
    state.pdf.totalDurationMs = getPdfScheduleTotalDuration(state.pdf.pageSchedule);
    rebuildPdfPresentationSchedule({ preserveTime: false });

    renderPdfPreview();
    renderPdfPageList();
    preloadPdfExampleImages(payload.pages);
    syncExtractedPdfLessonImages({ skipDraw: true });
    setPdfProgress(100, "Ready");
    const maskedPageCount = payload.pages.filter((page) => page.humanContentMasked).length;
    const maskSummary = maskedPageCount
      ? ` Human photos were hidden on ${maskedPageCount} PDF page${maskedPageCount === 1 ? "" : "s"} when the browser could detect them, while maths and diagram visuals stay visible.`
      : "";
    setPdfStatus(
      payload.extractedText
        ? `Loaded ${file.name}. No pages are selected yet. Tick the pages you want, then show or present them.${maskSummary}`
        : `Loaded ${file.name}. No pages are selected yet, but the exact PDF page images are ready when you choose pages to show on screen.${maskSummary}`
      );
    setSpeechToolsStatus(
      payload.extractedText
        ? (shouldLoadExtractedTextIntoLesson
          ? "PDF text is in the lesson box now. Tick the PDF pages you want, and their example images will follow onto the matching lesson pages."
          : "PDF text is ready in the extracted PDF section. Copy a page into the content box only where you want it.")
        : "The PDF page images are ready. This file may be image-based, so reading may need OCR text from another source."
    );
    return true;
  } catch (error) {
    console.error(error);
    setPdfProgress(0, "Failed");
    setPdfStatus(error.message || "PDF extraction failed.");
    return false;
  } finally {
    state.pdfLoading = false;
    updatePdfUi();
    window.setTimeout(() => {
      if (!state.pdfLoading) {
        resetTaskProgressUi();
      }
    }, 900);
  }
}

async function handlePdfSelection(event) {
  const [file] = Array.from(event.target.files || []);
  if (!file) {
    if (!state.pdf.extractedText) {
      setPdfStatus("No PDF selected.");
    }
    updatePdfUi();
    return;
  }

  if (!(file.type || "").includes("pdf") && !/\.pdf$/i.test(file.name)) {
    state.pdfSelectedFile = null;
    pdfInput.value = "";
    setPdfStatus("Please choose a PDF file.");
    updatePdfUi();
    return;
  }

  state.pdfSelectedFile = file;
  invalidatePdfPresentationRequest();
  state.pdf = {
    fileName: "",
    fileSignature: "",
    extractedText: "",
    pageTexts: [],
    pageCount: 0,
    pages: [],
    contextPages: [],
    contextPagesKey: "",
    autoImageSyncKey: "",
    lessonAutoImageSyncKey: "",
    selectedPageIndexes: [],
    renderMode: "context",
    currentTimeMs: 0,
    totalDurationMs: 0,
    playbackRate: Number(playbackSpeedSelect?.value || DEFAULT_STAGE_PLAYBACK_RATE),
    requestId: 0,
    pageSchedule: [],
    paused: false,
    audioDriven: false,
    timelineStartedAt: 0,
    timelineStartOffsetMs: 0,
    narration: {
      url: "",
      fileName: "",
      durationMs: 0,
      blob: null,
      textSource: "",
      voice: "",
      source: "",
      syncProfile: null
    }
  };
  state.images = state.images.filter((item) => !isManagedAutoPdfImage(item));
  renderPdfPreview();
  renderPdfPageList();
  renderImagePreviews();
  resetPdfProgress();
  setPdfStatus(`Selected PDF: ${file.name}. Extracting text now...`);
  updatePdfUi();
  await loadSelectedPdf(true);
}

async function showPdfOnScreen() {
  invalidatePdfPresentationRequest();
  const ready = await loadSelectedPdf();
  if (!ready) {
    return;
  }

  showPdfScreen("context");
}

async function presentPdf() {
  const ready = await loadSelectedPdf();
  if (!ready) {
    return;
  }

  showPdfScreen("context");
  await playSlide();
}

function isPdfPresentationMode() {
  return state.presentationMode === "pdf" && state.pdf.pages.length > 0;
}

function getPdfCurrentStagePage() {
  const presentationPages = getPdfPresentationPages();
  if (!presentationPages.length) {
    return null;
  }

  return presentationPages[clamp(state.previewPageIndex, 0, presentationPages.length - 1)] || null;
}

function getContentLayoutWithMetrics(lines, maxWidth, maxHeight, usePlaceholder = true, options = {}) {
  const safeLines = lines.length ? lines : (usePlaceholder ? ["Your content will appear here."] : []);
  const wordCount = Math.max(0, Math.round(Number(options.wordCount) || 0));
  const hasImages = Boolean(options.hasImages);
  let fontSize = hasImages ? 26 : 30;

  if (wordCount > 520) {
    fontSize = hasImages ? 22 : 24;
  } else if (wordCount > 360) {
    fontSize = hasImages ? 23 : 25;
  } else if (wordCount > 220) {
    fontSize = hasImages ? 24 : 26;
  } else if (wordCount > 120) {
    fontSize = hasImages ? 25 : 28;
  }

  fontSize = clamp(Math.round(fontSize * state.fontScale), 16, 54);

  const buildLayout = (size) => {
    const rows = [];
    const rowHeight = Math.max(size + 4, Math.round(size * 1.2));
    const groupGap = Math.max(6, Math.round(size * 0.24));

    safeLines.forEach((line, index) => {
      const headingMatch = line.match(/^\s*#{1,3}\s+(.*)$/);
      const autoHeading = looksLikeAutoHeadingLine(line, index, safeLines.length);
      const sourceLine = headingMatch ? headingMatch[1] : line;
      const bulletMatch = sourceLine.match(/^\s*(?:[-*]|\u2022)\s+(.*)$/);
      const baseLineStyle = (headingMatch || autoHeading)
        ? {
          ...getBaseTextStyle(),
          color: normalizePresentationTemplate(state.presentationTemplate) === PRESENTATION_TEMPLATE_OUTCOMES ? "#000000" : "#facc15",
          bold: true,
          underline: true
        }
        : getBaseTextStyle();
      const lineText = (bulletMatch ? bulletMatch[1] : sourceLine).replace(/\s+/g, " ").trim() || sourceLine.trim();
      const styledRuns = getStyledTextRuns(lineText, baseLineStyle).map((run) => ({
        ...run,
        text: applyDisplayCase(run.text)
      }));
      const wrapped = wrapStyledRuns(ctx, styledRuns, maxWidth - (bulletMatch ? 28 : 0), size);

      wrapped.forEach((row, rowIndex) => {
        rows.push({ segments: row, bullet: Boolean(bulletMatch) && rowIndex === 0 });
      });

      if (index < safeLines.length - 1) {
        rows.push({ spacer: true, height: groupGap });
      }
    });

    const totalHeight = rows.reduce((sum, row) => sum + (row.spacer ? row.height : rowHeight), 0);
    return { rows, fontSize: size, rowHeight, totalHeight };
  };

  let layout = buildLayout(fontSize);
  while (layout.totalHeight > maxHeight && fontSize > 16) {
    fontSize = Math.max(16, fontSize - 2);
    layout = buildLayout(fontSize);
  }

  return layout;
}

function getPdfContextVisibleText(page, selectionIndex) {
  const fullText = page?.text || "";
  if (!fullText) {
    return {
      fullText: "",
      partText: "",
      layoutPage: null,
      mouthActive: false,
      speechElapsedMs: 0
    };
  }

  if (!state.speaking && !state.pdf.paused) {
    return fullText;
  }

  const syncProfileData = state.pdf?.narration?.syncProfile;
  const combinedPdfText = getPdfPresentationText();
  if (combinedPdfText && syncProfileData?.profile && syncProfileData?.text === combinedPdfText) {
    const visualLagMs = Math.max(0, Math.round((Number(SPEECH_SYNC_VISUAL_PROGRESS_LAG) || 0) * 1000));
    const syncFrame = getSpeechSyncFrame(
      combinedPdfText,
      Math.max(0, state.pdf.currentTimeMs - visualLagMs),
      state.pdf.narration.durationMs || state.pdf.totalDurationMs,
      { syncProfileData }
    );
    const pageTextStartIndex = Math.max(0, Math.round(Number(page?.pageTextStartIndex) || 0));
    const sourcePageText = String(page?.sourcePageText || "");
    const visiblePageText = syncFrame.displayedText.length <= pageTextStartIndex
      ? ""
      : syncFrame.displayedText.slice(pageTextStartIndex, pageTextStartIndex + sourcePageText.length);

    const contentArea = getStageContentArea(state.previewPageIndex, Boolean(page?.hasImages || getStageHasVisibleImagesForPage(state.previewPageIndex)));
    const visibleLayout = getContentLayoutWithMetrics(
      buildDisplayedLines(visiblePageText),
      contentArea.width,
      contentArea.height,
      !sourcePageText,
      {
        wordCount: splitIntoWords(visiblePageText).length || page?.wordCount || splitIntoWords(sourcePageText).length,
        hasImages: Boolean(page?.hasImages)
      }
    );
    const visibleParts = paginateLayout(visibleLayout, contentArea.height);
    const visiblePart = visibleParts[page?.partIndex || 0] || null;
    return {
      fullText: visiblePageText,
      partText: getLayoutPageText(visiblePart?.rows || []),
      layoutPage: visiblePart,
      mouthActive: syncFrame.mouthActive,
      speechElapsedMs: syncFrame.speechElapsedMs
    };
  }

  const scheduleItem = state.pdf.pageSchedule[selectionIndex] || null;
  if (!scheduleItem || scheduleItem.durationMs <= 0) {
    return {
      fullText,
      partText: fullText,
      layoutPage: null,
      mouthActive: false,
      speechElapsedMs: 0
    };
  }

  const pageProgress = clamp(
    (state.pdf.currentTimeMs - scheduleItem.startMs) / Math.max(1, scheduleItem.durationMs),
    0,
    1
  );

  const visibleText = getVisibleTextForProgress(fullText, pageProgress);
  return {
    fullText: visibleText,
    partText: visibleText,
    layoutPage: null,
    mouthActive: pageProgress > 0 && pageProgress < 1,
    speechElapsedMs: Math.max(0, state.pdf.currentTimeMs - scheduleItem.startMs)
  };
}

function getPdfPresentationFallbackLabel() {
  return getPdfRenderMode() === "exact"
    ? "the exact rendered PDF pages"
    : "the PDF context slide";
}

function applyPdfPageSelection(nextIndexes) {
  if (state.speaking && isPdfPresentationMode()) {
    stopPlayback(false);
  }

  invalidatePdfPresentationRequest();
  state.pdf.selectedPageIndexes = Array.from(new Set(nextIndexes))
    .filter((index) => Number.isInteger(index) && index >= 0 && index < state.pdf.pages.length)
    .sort((left, right) => left - right);
  state.pdf.contextPages = [];
  state.pdf.contextPagesKey = "";
  state.pdf.autoImageSyncKey = "";
  state.pdf.lessonAutoImageSyncKey = "";
  resetPdfNarrationState();
  resetPdfPlaybackState(true);
  renderPdfPageList();
  updatePdfUi();
  updateStageModeUi();

  syncExtractedPdfLessonImages({ skipDraw: true });

  if (getPdfRenderMode() === "context") {
    syncPdfContextStageImages({ skipDraw: true });
  }

  if (isPdfPresentationMode() && !stagePanel.classList.contains("hidden")) {
    drawScene(state.mouthOpen);
  }
}

function selectAllPdfPages() {
  applyPdfPageSelection(state.pdf.pages.map((page) => page.index));
}

function clearSelectedPdfPages() {
  applyPdfPageSelection([]);
}

function updateStageTimelineUi() {
  const pdfMode = isPdfPresentationMode();
  if (stageTimelineCard) {
    stageTimelineCard.classList.toggle("hidden", !pdfMode);
  }

  if (!pdfMode) {
    if (stageCurrentTime) {
      stageCurrentTime.textContent = "00:00";
    }
    if (stageDuration) {
      stageDuration.textContent = "00:00";
    }
    if (stageTimelineInput) {
      stageTimelineInput.value = "0";
      stageTimelineInput.max = "0";
      stageTimelineInput.disabled = true;
    }
    if (seekBackwardBtn) {
      seekBackwardBtn.disabled = true;
    }
    if (seekForwardBtn) {
      seekForwardBtn.disabled = true;
    }
    if (stageTimelineMeta) {
      stageTimelineMeta.textContent = "Timeline controls appear when a PDF presentation is on screen.";
    }
    return;
  }

  state.pdf.pageSchedule = buildPdfPresentationSchedule(state.pdf.narration.durationMs || state.pdf.totalDurationMs);
  state.pdf.totalDurationMs = getPdfScheduleTotalDuration(state.pdf.pageSchedule);
  state.pdf.currentTimeMs = clamp(state.pdf.currentTimeMs, 0, state.pdf.totalDurationMs || 0);
  syncPdfPreviewPageFromTime(state.pdf.currentTimeMs);

  const usingGeneratedAudio = Boolean(state.pdf.narration.url);
  const presentationPageCount = getPdfPresentationPageCount();
  if (stageTimelineMeta) {
    stageTimelineMeta.textContent = `${getPdfSelectedPageCount()} selected PDF page${getPdfSelectedPageCount() === 1 ? "" : "s"} | ${presentationPageCount} narration page${presentationPageCount === 1 ? "" : "s"} | ${usingGeneratedAudio ? "Generated narration ready" : "Using timed page playback"} | Speed ${getPdfPlaybackRate()}x`;
  }

  if (stageCurrentTime) {
    stageCurrentTime.textContent = formatDurationMs(state.pdf.currentTimeMs);
  }

  if (stageDuration) {
    stageDuration.textContent = formatDurationMs(state.pdf.totalDurationMs);
  }

  if (stageTimelineInput) {
    stageTimelineInput.max = String(Math.max(0, state.pdf.totalDurationMs));
    stageTimelineInput.value = String(clamp(state.pdf.currentTimeMs, 0, state.pdf.totalDurationMs || 0));
    stageTimelineInput.disabled = !state.pdf.totalDurationMs;
  }

  if (seekBackwardBtn) {
    seekBackwardBtn.disabled = !state.pdf.totalDurationMs;
  }

  if (seekForwardBtn) {
    seekForwardBtn.disabled = !state.pdf.totalDurationMs;
  }

  updatePlaybackProgressUi(
    state.pdf.totalDurationMs ? (state.pdf.currentTimeMs / state.pdf.totalDurationMs) : 0,
    state.speaking || state.pdf.paused || state.pdf.currentTimeMs > 0
  );
}

function updateStageModeUi() {
  const pdfMode = isPdfPresentationMode();

  if (stageModeBadge) {
    stageModeBadge.textContent = pdfMode ? "PDF" : "LESSON";
  }

  if (playBtn) {
    if (pdfMode) {
      const pdfPlayLabel = getPdfRenderMode() === "exact" ? "PDF" : "PDF Context";
      const playLabel = state.speaking
        ? `Playing ${pdfPlayLabel}`
        : (state.pdf.paused && state.pdf.currentTimeMs > 0 && state.pdf.currentTimeMs < state.pdf.totalDurationMs ? `Resume ${pdfPlayLabel}` : `Play ${pdfPlayLabel}`);
      setIconButtonState(playBtn, "&#9654;", playLabel);
    } else {
      setIconButtonState(playBtn, "&#9654;", "Play Slide");
    }
  }

  if (pauseStageBtn) {
    pauseStageBtn.classList.toggle("hidden", !pdfMode);
    pauseStageBtn.disabled = !pdfMode || !state.speaking;
    setIconButtonState(pauseStageBtn, "&#10074;&#10074;", pdfMode && state.speaking ? "Pause PDF presentation" : "Pause");
  }

  if (downloadBtn) {
    const downloadLabel = state.exportingVideo
      ? (pdfMode ? "Exporting PDF..." : "Exporting Video...")
      : (pdfMode ? (getPdfRenderMode() === "exact" ? "Export Exact PDF" : "Export PDF Context") : "Export Video");
    downloadBtn.textContent = downloadLabel;
    downloadBtn.setAttribute("aria-label", downloadLabel);
    downloadBtn.title = downloadLabel;
    downloadBtn.classList.toggle("is-exporting", state.exportingVideo || state.actionLocks?.export);
  }

  if (downloadPdfContextBtn) {
    downloadPdfContextBtn.classList.toggle("hidden", !pdfMode);
    downloadPdfContextBtn.textContent = getPdfRenderMode() === "exact"
      ? "Export PDF Context"
      : "Export Exact PDF";
    downloadPdfContextBtn.disabled = !pdfMode || !getPdfSelectedPageCount() || state.exportingVideo;
    downloadPdfContextBtn.classList.toggle("is-exporting", state.exportingVideo || state.actionLocks?.export);
  }

  updateStageMediaToolUi();

  if (stageImageUploadBtn) {
    stageImageUploadBtn.disabled = pdfMode;
  }

  if (stageBoldBtn) {
    stageBoldBtn.disabled = pdfMode;
  }

  if (stageItalicBtn) {
    stageItalicBtn.disabled = pdfMode;
  }

  if (stageUnderlineBtn) {
    stageUnderlineBtn.disabled = pdfMode;
  }

  if (playbackSpeedSelect && !Number.isNaN(Number(playbackSpeedSelect.value))) {
    playbackSpeedSelect.value = String(getStagePlaybackRate());
  }

  if (stagePlaybackSpeedSelect && !Number.isNaN(Number(stagePlaybackSpeedSelect.value))) {
    stagePlaybackSpeedSelect.value = String(getStagePlaybackRate());
  }

  updateStageTimelineUi();
}

function showPdfScreen(renderMode = "context") {
  if (!getPdfSelectedPageCount()) {
    setStatus("Select at least one PDF page before showing it on the screen.");
    updatePdfUi();
    return;
  }

  stopDictation(false);
  stopInputPreview(false);
  stopPlayback(false);
  invalidatePdfPresentationRequest();
  state.presentationMode = "pdf";
  setPdfRenderMode(renderMode);
  resetPdfPlaybackState(true);
  const presentationPageCount = getPdfPresentationPageCount();
  const preferredPreviewIndex = clamp(state.previewPageIndex, 0, Math.max(0, presentationPageCount - 1));
  state.previewPageIndex = preferredPreviewIndex;
  const previewSlot = state.pdf.pageSchedule[preferredPreviewIndex] || null;
  state.pdf.currentTimeMs = previewSlot ? previewSlot.startMs : 0;
  updatePlaybackProgressUi(
    state.pdf.totalDurationMs ? (state.pdf.currentTimeMs / state.pdf.totalDurationMs) : 0,
    false
  );
  inputPanel.classList.add("hidden");
  stagePanel.classList.remove("hidden");
  updateStageModeUi();
  updateStageViewUi();
  drawScene(0.12);
  ensureStageMediaLoop();
  setStatus(
    getPdfRenderMode() === "exact"
      ? `PDF screen is ready. ${getPdfSelectedPageCount()} selected page${getPdfSelectedPageCount() === 1 ? "" : "s"} will be presented exactly as rendered from the PDF file.`
      : `PDF context screen is ready. ${getPdfSelectedPageCount()} selected page${getPdfSelectedPageCount() === 1 ? "" : "s"} will show the extracted context on the blue teaching screen.`
  );
}

async function setPdfNarrationFromBlob(blob, fileName, sourceLabel, textSource = "", voice = "", options = {}) {
  const nextUrl = URL.createObjectURL(blob);

  try {
    const audioElement = await createLoadedAudio(nextUrl);
    const durationMs = Number.isFinite(audioElement.duration)
      ? Math.max(1000, Math.ceil(audioElement.duration * 1000))
      : getPdfScheduleTotalDuration(buildPdfPresentationSchedule());

    resetPdfNarrationState();
    const syncProfile = options.syncProfile
      ? scaleSpeechSyncProfile(options.syncProfile, durationMs)
      : null;
    state.pdf.narration = {
      url: nextUrl,
      fileName,
      durationMs,
      source: sourceLabel,
      blob,
      textSource,
      voice,
      syncProfile: syncProfile
        ? {
          text: textSource,
          profile: syncProfile
        }
        : null
    };

    rebuildPdfPresentationSchedule({ preserveTime: true });
    updatePdfPageSelectionSummary();
    updateStageTimelineUi();
  } catch (error) {
    URL.revokeObjectURL(nextUrl);
    throw error;
  }
}

async function ensurePdfNarrationReadyForPresentation(options = {}) {
  const pdfText = getPdfPresentationText();
  if (!pdfText) {
    throw new Error("No readable PDF text was found in the selected pages.");
  }

  const voice = "anjali";
  if (
    state.pdf.narration.url
    && state.pdf.narration.textSource === pdfText
    && state.pdf.narration.voice === voice
  ) {
    return;
  }

  const label = `Generated ${getNarrationVoiceLabel(voice).toLowerCase()} PDF narration`;
  const fileName = `generated-${voice}-pdf-narration.wav`;
  let syncProfile = null;
  const blob = await requestNarrationBlob(pdfText, voice, {
    ...options,
    timeoutMs: options.timeoutMs || getLongNarrationRequestTimeoutMs(pdfText),
    onSyncProfile: (profile) => {
      syncProfile = profile;
      if (typeof options.onSyncProfile === "function") {
        options.onSyncProfile(profile);
      }
    }
  });
  await setPdfNarrationFromBlob(blob, fileName, label, pdfText, voice, { syncProfile });
}

function forceExportVoiceToAnjali() {
  state.preferredNarrationVoice = EXPORT_NARRATION_VOICE;
  if (slideVoiceSelect) {
    slideVoiceSelect.value = EXPORT_NARRATION_VOICE;
  }
  updatePreferredVoiceUi();
}

async function ensureAnjaliNarrationReadyForExport(options = {}) {
  forceExportVoiceToAnjali();
  const exportText = commitLatestLessonText();
  const hasMatchingNarration = Boolean(
    state.narration.blob
    && state.narration.voice === EXPORT_NARRATION_VOICE
    && state.narration.textSource === exportText
  );

  if (hasMatchingNarration) {
    return state.narration.blob;
  }

  let syncProfile = null;
  const blob = await requestNarrationBlob(exportText, EXPORT_NARRATION_VOICE, {
    ...options,
    onSyncProfile: (profile) => {
      syncProfile = profile;
      if (typeof options.onSyncProfile === "function") {
        options.onSyncProfile(profile);
      }
    }
  });
  await setNarrationFromBlob(
    blob,
    `generated-${EXPORT_NARRATION_VOICE}-narration.wav`,
    "Generated anjali narration",
    exportText,
    EXPORT_NARRATION_VOICE,
    { syncProfile }
  );
  return blob;
}

async function ensureAnjaliPdfNarrationReadyForExport(options = {}) {
  const pdfText = getPdfPresentationText();
  if (!pdfText) {
    throw new Error("No readable PDF text was found in the selected pages.");
  }

  forceExportVoiceToAnjali();

  const hasMatchingNarration = Boolean(
    state.pdf.narration.blob
    && state.pdf.narration.voice === EXPORT_NARRATION_VOICE
    && state.pdf.narration.textSource === pdfText
  );
  if (hasMatchingNarration) {
    return state.pdf.narration.blob;
  }

  let syncProfile = null;
  const blob = await requestNarrationBlob(pdfText, EXPORT_NARRATION_VOICE, {
    ...options,
    timeoutMs: options.timeoutMs || getLongNarrationRequestTimeoutMs(pdfText),
    onSyncProfile: (profile) => {
      syncProfile = profile;
      if (typeof options.onSyncProfile === "function") {
        options.onSyncProfile(profile);
      }
    }
  });
  await setPdfNarrationFromBlob(
    blob,
    `generated-${EXPORT_NARRATION_VOICE}-pdf-narration.wav`,
    "Generated anjali PDF narration",
    pdfText,
    EXPORT_NARRATION_VOICE,
    { syncProfile }
  );
  return blob;
}

function startPdfPlaybackLoop(options = {}) {
  const audioElement = options.audioElement || null;
  const onComplete = typeof options.onComplete === "function" ? options.onComplete : null;
  const onError = typeof options.onError === "function" ? options.onError : null;
  let settled = false;
  let lastRenderedSelectionIndex = -1;
  let lastVisibleText = "";
  let lastRenderAt = 0;
  let lastRenderedMouth = state.mouthOpen;

  const handleComplete = () => {
    if (settled) {
      return;
    }

    settled = true;
    if (onComplete) {
      onComplete();
      return;
    }

    finishPlayback("PDF presentation complete.");
  };

  const handleError = (error) => {
    if (settled) {
      return;
    }

    settled = true;
    if (onError) {
      onError(error);
      return;
    }

    finishPlayback(error?.message || "PDF presentation playback failed.");
  };

  if (audioElement) {
    audioElement.addEventListener("error", () => {
      handleError(new Error("The PDF narration audio could not be played."));
    }, { once: true });
  }

  const tick = () => {
    if (settled || !state.speaking) {
      return;
    }

    const nowMs = performance.now();
    const currentTimeMs = syncPdfPlaybackPosition();
    const pdfProgress = state.pdf.totalDurationMs ? (currentTimeMs / state.pdf.totalDurationMs) : 0;
    updatePlaybackProgressUi(pdfProgress, true);

    if (state.exportingVideo) {
      updateTaskProgressUi(0.26 + (pdfProgress * 0.54), true, { mirrorStage: true });
    }

    const activeSelectionIndex = getPdfSelectionIndexForTime(currentTimeMs);
    const activePage = getPdfPresentationPages()[activeSelectionIndex] || null;
    const visibleState = getPdfRenderMode() === "context"
      ? getPdfContextVisibleText(activePage, activeSelectionIndex)
      : null;
    const visibleText = visibleState?.partText || "";
    const shouldRedrawContext = getPdfRenderMode() === "context"
      ? (visibleText !== lastVisibleText || activeSelectionIndex !== lastRenderedSelectionIndex)
      : activeSelectionIndex !== lastRenderedSelectionIndex;
    const nextMouth = visibleState?.mouthActive
      ? getFallbackMouth(visibleState.speechElapsedMs)
      : 0.12;
    const shouldDrawFrame = shouldRenderAnimatedSceneFrame(nowMs, {
      force: shouldRedrawContext,
      lastRenderAt,
      mouthDelta: nextMouth - lastRenderedMouth
    });
    state.mouthOpen = nextMouth;
    if (shouldDrawFrame) {
      lastRenderedSelectionIndex = activeSelectionIndex;
      lastVisibleText = visibleText;
      drawScene(state.mouthOpen);
      lastRenderAt = nowMs;
      lastRenderedMouth = state.mouthOpen;
    }

    if (currentTimeMs >= Math.max(0, state.pdf.totalDurationMs - 60) || audioElement?.ended) {
      state.pdf.currentTimeMs = state.pdf.totalDurationMs;
      syncPdfPreviewPageFromTime(state.pdf.currentTimeMs);
      drawScene(0.12);
      handleComplete();
      return;
    }

    state.animationFrame = requestAnimationFrame(tick);
  };

  state.animationFrame = requestAnimationFrame(tick);
}

async function startPdfNarrationPlayback(statusMessage) {
  const resumeTimeMs = clamp(state.pdf.currentTimeMs, 0, state.pdf.totalDurationMs || 0);
  stopPlayback(false);
  resetTaskProgressUi();
  state.pdf.currentTimeMs = resumeTimeMs;
  syncPdfPreviewPageFromTime(state.pdf.currentTimeMs);
  updatePlaybackProgressUi(
    state.pdf.totalDurationMs ? (state.pdf.currentTimeMs / state.pdf.totalDurationMs) : 0,
    true
  );

  const audioElement = await createLoadedAudio(state.pdf.narration.url);
  audioElement.currentTime = resumeTimeMs / 1000;
  applyNaturalVoicePlayback(audioElement, getPdfPlaybackRate());
  audioElement.muted = false;
  audioElement.volume = 1;
  state.activeAudio = audioElement;
  teardownAudioGraph();

  state.pdf.audioDriven = true;
  state.pdf.paused = false;
  state.pdf.timelineStartedAt = 0;
  state.pdf.timelineStartOffsetMs = resumeTimeMs;
  state.speaking = true;
  state.mouthOpen = 0.12;
  setStatus(statusMessage);
  updateStageModeUi();
  drawScene(0.12);

  await startBackgroundMusicPlayback().catch((error) => {
    console.error(error);
    return null;
  });
  await audioElement.play();

  const completionPromise = new Promise((resolve, reject) => {
    startPdfPlaybackLoop({
      audioElement,
      onComplete: resolve,
      onError: reject
    });
  });

  completionPromise
    .then(() => {
      finishPlayback("PDF presentation complete.");
    })
    .catch((error) => {
      console.error(error);
      finishPlayback(error?.message || "PDF narration playback failed.");
    });
}

function startTimedPdfPresentation(statusMessage) {
  const resumeTimeMs = clamp(state.pdf.currentTimeMs, 0, state.pdf.totalDurationMs || 0);
  stopPlayback(false);
  resetTaskProgressUi();
  state.pdf.currentTimeMs = resumeTimeMs;
  syncPdfPreviewPageFromTime(state.pdf.currentTimeMs);
  updatePlaybackProgressUi(
    state.pdf.totalDurationMs ? (state.pdf.currentTimeMs / state.pdf.totalDurationMs) : 0,
    true
  );
  state.pdf.audioDriven = false;
  state.pdf.paused = false;
  state.pdf.timelineStartedAt = performance.now();
  state.pdf.timelineStartOffsetMs = resumeTimeMs;
  state.speaking = true;
  state.mouthOpen = 0.12;
  setStatus(statusMessage);
  updateStageModeUi();
  drawScene(0.12);
  startBackgroundMusicPlayback().catch((error) => console.error(error));
  startPdfPlaybackLoop();
}

async function playPdfPresentation() {
  if (!getPdfSelectedPageCount()) {
    setStatus("Select at least one PDF page before playing the PDF presentation.");
    updatePdfUi();
    return;
  }

  if (state.speaking) {
    setStatus("The PDF presentation is already playing.");
    return;
  }

  if (stagePanel.classList.contains("hidden") || !isPdfPresentationMode()) {
    showPdfScreen(getPdfRenderMode());
    if (stagePanel.classList.contains("hidden")) {
      return;
    }
  }

  const requestId = invalidatePdfPresentationRequest();
  rebuildPdfPresentationSchedule({ preserveTime: true });

  if (state.pdf.currentTimeMs >= state.pdf.totalDurationMs && state.pdf.totalDurationMs) {
    state.pdf.currentTimeMs = 0;
    syncPdfPreviewPageFromTime(0);
  }

  if (state.pdf.paused && state.pdf.currentTimeMs > 0 && !state.pdf.narration.url) {
    startTimedPdfPresentation("PDF presentation resumed with the timeline controls.");
    return;
  }

  if (state.pdf.narration.url) {
    await startPdfNarrationPlayback("PDF presentation is playing with generated narration.");
    return;
  }

  const pdfText = getPdfPresentationText();
  if (!pdfText) {
    startTimedPdfPresentation(`No readable text was found in the selected PDF pages, so the app is presenting ${getPdfPresentationFallbackLabel()} with the timeline controls.`);
    return;
  }

  const narrationServerReady = await ensureAnjaliCloneServer();
  if (!narrationServerReady) {
    startTimedPdfPresentation(`The local Anjali voice server is offline, so the app is presenting ${getPdfPresentationFallbackLabel()} with the timeline controls.`);
    return;
  }

  try {
    setStatus("Preparing PDF narration...");
    updateTaskProgressUi(0.2, true, { mirrorStage: true });
    await ensurePdfNarrationReadyForPresentation();
    if (requestId !== state.pdf.requestId) {
      resetTaskProgressUi();
      return;
    }
    updateTaskProgressUi(0.88, true, { mirrorStage: true });
    resetTaskProgressUi();
    await startPdfNarrationPlayback("PDF presentation is playing with generated narration.");
  } catch (error) {
    console.error(error);
    resetTaskProgressUi();
    if (getPdfRenderMode() === "context" && pdfText) {
      setStatus(`PDF context narration could not be prepared: ${error.message || "unknown error"}.`);
      return;
    }

    startTimedPdfPresentation(`Generated PDF narration is unavailable right now, so the app is presenting ${getPdfPresentationFallbackLabel()} with the timeline controls.`);
  }
}

function pausePdfPresentation() {
  if (!isPdfPresentationMode()) {
    return;
  }

  if (!state.speaking) {
    if (state.pdf.paused) {
      setStatus(`PDF presentation is paused at ${formatDurationMs(state.pdf.currentTimeMs)}.`);
    }
    return;
  }

  syncPdfPlaybackPosition();
  cancelVisualLoop();
  stopActiveAudio();
  state.speechUtterance = null;
  state.speaking = false;
  state.mouthOpen = 0.12;
  state.pdf.paused = state.pdf.currentTimeMs < state.pdf.totalDurationMs;
  state.pdf.audioDriven = false;
  state.pdf.timelineStartedAt = 0;
  state.pdf.timelineStartOffsetMs = state.pdf.currentTimeMs;
  updatePlaybackProgressUi(
    state.pdf.totalDurationMs ? (state.pdf.currentTimeMs / state.pdf.totalDurationMs) : 0,
    true
  );
  updateStageTimelineUi();
  updateStageModeUi();
  drawScene(0.12);
  setStatus(`PDF presentation paused at ${formatDurationMs(state.pdf.currentTimeMs)}.`);
}

function seekPdfPresentation(nextTimeMs) {
  if (!isPdfPresentationMode()) {
    return;
  }

  rebuildPdfPresentationSchedule({ preserveTime: true });
  const safeTimeMs = clamp(Math.round(Number(nextTimeMs) || 0), 0, state.pdf.totalDurationMs || 0);
  state.pdf.currentTimeMs = safeTimeMs;
  syncPdfPreviewPageFromTime(state.pdf.currentTimeMs);
  updatePlaybackProgressUi(
    state.pdf.totalDurationMs ? (state.pdf.currentTimeMs / state.pdf.totalDurationMs) : 0,
    state.speaking || state.pdf.paused || state.pdf.currentTimeMs > 0
  );

  if (state.speaking) {
    if (state.activeAudio) {
      try {
        state.activeAudio.currentTime = safeTimeMs / 1000;
      } catch (error) {
        console.error(error);
      }
    } else {
      state.pdf.timelineStartedAt = performance.now();
      state.pdf.timelineStartOffsetMs = safeTimeMs;
    }
  } else {
    state.pdf.timelineStartedAt = 0;
    state.pdf.timelineStartOffsetMs = safeTimeMs;
  }

  updateStageTimelineUi();
  updateStageModeUi();
  drawScene(state.mouthOpen);

  if (state.speaking && safeTimeMs >= state.pdf.totalDurationMs && state.pdf.totalDurationMs) {
    finishPlayback("PDF presentation complete.");
  }
}

function jumpPdfPresentation(deltaMs) {
  if (!isPdfPresentationMode()) {
    return;
  }

  const anchorTimeMs = state.speaking ? syncPdfPlaybackPosition() : state.pdf.currentTimeMs;
  seekPdfPresentation(anchorTimeMs + deltaMs);
}

function handleStagePlaybackRateChange(nextRate) {
  const parsedRate = Number(nextRate);
  if (!Number.isFinite(parsedRate) || parsedRate <= 0) {
    return;
  }

  const safeRate = clamp(parsedRate, 0.5, 2);
  state.lessonPlaybackRate = safeRate;
  const currentTimeMs = isPdfPresentationMode() ? getPdfCurrentTimelinePosition() : state.pdf.currentTimeMs;
  state.pdf.playbackRate = safeRate;
  state.pdf.currentTimeMs = currentTimeMs;

  if (state.activeAudio) {
    applyNaturalVoicePlayback(state.activeAudio, getStagePlaybackRate());
  } else if (state.speaking) {
    state.pdf.timelineStartedAt = performance.now();
    state.pdf.timelineStartOffsetMs = currentTimeMs;
  }

  if (playbackSpeedSelect) {
    playbackSpeedSelect.value = String(safeRate);
  }

  if (stagePlaybackSpeedSelect) {
    stagePlaybackSpeedSelect.value = String(safeRate);
  }

  syncPdfPreviewPageFromTime(state.pdf.currentTimeMs);
  updatePdfPageSelectionSummary();
  updateStageTimelineUi();
  updateStageModeUi();

  if (!stagePanel.classList.contains("hidden")) {
    drawScene(state.mouthOpen);
  }

  if (isPdfPresentationMode()) {
    setStatus(`PDF playback speed set to ${getPdfPlaybackRate()}x. Voice pitch stays natural.`);
  } else {
    setStatus(`Playback speed set to ${getLessonPlaybackRate()}x. Voice pitch stays natural.`);
  }
}

function initializeDefaultPlaybackRate() {
  state.lessonPlaybackRate = DEFAULT_STAGE_PLAYBACK_RATE;
  state.pdf.playbackRate = DEFAULT_STAGE_PLAYBACK_RATE;

  if (playbackSpeedSelect) {
    playbackSpeedSelect.value = String(DEFAULT_STAGE_PLAYBACK_RATE);
  }

  if (stagePlaybackSpeedSelect) {
    stagePlaybackSpeedSelect.value = String(DEFAULT_STAGE_PLAYBACK_RATE);
  }
}

async function getPdfNarrationExportBlob() {
  if (state.pdf.narration.blob) {
    return state.pdf.narration.blob;
  }

  if (!state.pdf.narration.url) {
    throw new Error("No PDF narration audio is ready for export.");
  }

  const response = await fetch(state.pdf.narration.url);
  if (!response.ok) {
    throw new Error("The PDF narration audio could not be read for export.");
  }

  return response.blob();
}

function getProjectFolderPath() {
  if (window.location.protocol === "file:") {
    const decodedPath = decodeURIComponent(window.location.pathname);
    return decodedPath
      .replace(/^\/([A-Za-z]:\/)/, "$1")
      .replace(/\//g, "\\")
      .replace(/\\index\.html$/i, "");
  }

  return "C:\\Users\\patan\\Documents\\New project";
}

function getStartAllCommand() {
  const projectPath = getProjectFolderPath();
  return `cd "${projectPath}"; powershell -ExecutionPolicy Bypass -File ".\\start-all.ps1"`;
}

function areAllLocalServersReady() {
  return Boolean(
    state.narrationServerReady
    && state.anjaliCloneServerReady
    && state.transcribeServerReady
    && state.videoExportServerReady
  );
}

function getMissingLocalServerLabels() {
  const missing = [];

  if (!state.narrationServerReady) {
    missing.push("Narration 8424");
  }

  if (!state.anjaliCloneServerReady) {
    missing.push("Anjali 8426");
  }

  if (!state.transcribeServerReady) {
    missing.push("Transcription 8428");
  }

  if (!state.videoExportServerReady) {
    missing.push("Video export 8430");
  }

  return missing;
}

function getAnjaliCloneStoppedMessage() {
  return "Anjali clone server stopped. Click Start Servers or Check Servers, then wait for port 8426 to come back.";
}

function isAnjaliCloneStartupPending() {
  return Boolean(!state.anjaliCloneServerReady && (state.anjaliMonitor.warming || state.localServerStartup.active));
}

function isAnjaliGenerationActive() {
  return Number(state.anjaliMonitor.generationActiveCount || 0) > 0;
}

function beginAnjaliGenerationActivity() {
  state.anjaliMonitor.generationActiveCount = Math.max(0, Number(state.anjaliMonitor.generationActiveCount || 0)) + 1;
}

function endAnjaliGenerationActivity() {
  state.anjaliMonitor.generationActiveCount = Math.max(0, Number(state.anjaliMonitor.generationActiveCount || 0) - 1);
}

function handleAnjaliCloneServerTransition(isReady) {
  const previousReady = state.anjaliMonitor.lastKnownReady;
  state.anjaliMonitor.lastKnownReady = isReady;

  if (previousReady === isReady) {
    return;
  }

  if (!isReady) {
    if (state.localServerStartup.active) {
      setServerControlsStatus("Anjali clone server is starting on port 8426. XTTS warm-up can take a few minutes on this laptop.");
      return;
    }
    const message = getAnjaliCloneStoppedMessage();
    setServerControlsStatus(message);
    showRuntimeDisplayError(message, { updateStatus: true });
    return;
  }

  if (previousReady === false) {
    setServerControlsStatus("Anjali clone server is running again on port 8426.");
    if (/Anjali clone server stopped/i.test(state.runtimeErrorMessage || "")) {
      clearRuntimeDisplayError();
    }
  }
}

async function refreshLocalServerHealth() {
  await Promise.all([ensureNarrationServer(), ensureAnjaliCloneServer(), ensureTranscribeServer(), ensureVideoExportServer(), ensureOllamaServer()]);
  updateServerHealthUi();
  return areAllLocalServersReady();
}

async function waitForAllLocalServersReady(timeoutMs = 240000) {
  const startedAt = Date.now();

  while ((Date.now() - startedAt) < timeoutMs) {
    const allReady = await refreshLocalServerHealth();
    if (allReady) {
      return true;
    }

    const elapsedRatio = Math.min(1, (Date.now() - startedAt) / timeoutMs);
    const progress = 0.22 + (elapsedRatio * 0.7);
    const missing = getMissingLocalServerLabels();
    const waitingMessage = missing.length
      ? (missing.includes("Anjali 8426")
        ? `Starting local servers. XTTS can take 2-4 minutes to warm up. Waiting for ${missing.join(", ")}...`
        : `Starting local servers. Waiting for ${missing.join(", ")}...`)
      : "Starting local servers...";
    setServerControlsStatus(waitingMessage);
    updateTaskProgressUi(progress, true, { label: waitingMessage });
    await delay(1600);
  }

  return false;
}

function triggerStartServersProtocol() {
  const launcherUrl = "learningoutcomes://start-servers";

  try {
    const launcherFrame = document.createElement("iframe");
    launcherFrame.style.display = "none";
    launcherFrame.setAttribute("aria-hidden", "true");
    launcherFrame.src = launcherUrl;
    document.body.appendChild(launcherFrame);
    window.setTimeout(() => launcherFrame.remove(), 2500);
  } catch (error) {
    console.error(error);
  }

  const launcherLink = document.createElement("a");
  launcherLink.href = launcherUrl;
  launcherLink.style.display = "none";
  document.body.appendChild(launcherLink);
  launcherLink.click();
  launcherLink.remove();

  window.setTimeout(() => {
    try {
      window.location.href = launcherUrl;
    } catch (error) {
      console.error(error);
    }
  }, 120);
}

async function startServersFromPage() {
  setServerControlsStatus("Starting local servers. If Windows asks, allow Learning Outcomes Launcher to open.");
  updateTaskProgressUi(0.12, true);
  state.localServerStartup.active = true;
  state.localServerStartup.startedAt = Date.now();
  updateServerHealthUi();

  try {
    triggerStartServersProtocol();
  } catch (error) {
    console.error(error);
    state.localServerStartup.active = false;
    updateServerHealthUi();
    setServerControlsStatus("The click launcher could not be opened. Use Copy Start Command once if needed.");
    resetTaskProgressUi();
    return;
  }

  const allReady = await waitForAllLocalServersReady();
  state.localServerStartup.active = false;
  updateTaskProgressUi(1, true);

  if (allReady) {
    setServerControlsStatus("All local servers started from the page button.");
  } else {
    const missing = getMissingLocalServerLabels();
    const suffix = missing.length ? ` Still waiting for ${missing.join(", ")}.` : "";
    setServerControlsStatus(`The launcher started, but not every server became ready within 4 minutes.${suffix} If Anjali is still warming, wait a little longer and press Check Servers.`);
  }

  updateServerHealthUi();
  resetTaskProgressUi();
}

async function copyStartAllCommand() {
  const command = getStartAllCommand();

  try {
    await navigator.clipboard.writeText(command);
    setServerControlsStatus("Start command copied. Paste it into PowerShell to launch narration, Anjali clone, transcription, and video export.");
  } catch (error) {
    console.error(error);
    setServerControlsStatus(`Copy failed. Run this in PowerShell: ${command}`);
  }
}

function updateServerHealthUi() {
  narrationHealthStatus.textContent = state.narrationServerReady
    ? "Narration server: running on port 8424"
    : "Narration server: not running";

  if (anjaliCloneHealthStatus) {
    anjaliCloneHealthStatus.textContent = state.anjaliCloneServerReady
      ? "Anjali clone server: running on port 8426"
      : (isAnjaliCloneStartupPending()
        ? "Anjali clone server: starting on port 8426..."
        : "Anjali clone server: not running");
  }

  transcribeHealthStatus.textContent = state.transcribeServerReady
    ? "Transcription server: running on port 8428"
    : "Transcription server: not running";

  videoExportHealthStatus.textContent = state.videoExportServerReady
    ? "Video export server: running on port 8430"
    : "Video export server: not running";
    
  if (ollamaHealthStatus) {
    ollamaHealthStatus.textContent = state.ollamaServerReady
      ? "Local AI (Ollama): running on port 11434"
      : "Local AI (Ollama): not running";
  }
}

async function checkServerHealth() {
  setServerControlsStatus("Checking local servers...");
  updateTaskProgressUi(0.18, true, { label: "Checking local servers..." });
  await Promise.all([ensureNarrationServer(), ensureAnjaliCloneServer(), ensureTranscribeServer(), ensureVideoExportServer(), ensureOllamaServer()]);
  updateTaskProgressUi(0.82, true, { label: "Refreshing local server status..." });
  updateServerHealthUi();

  if (state.narrationServerReady && state.anjaliCloneServerReady && state.transcribeServerReady && state.videoExportServerReady) {
    setServerControlsStatus("All local servers are running.");
  } else if (state.narrationServerReady || state.anjaliCloneServerReady || state.transcribeServerReady || state.videoExportServerReady) {
    setServerControlsStatus("Some local servers are running. Start the missing one with Start Servers if needed.");
  } else {
    setServerControlsStatus("All local servers are down. Use Start Servers or the copied PowerShell command.");
  }

  updateTaskProgressUi(1, true);
  resetTaskProgressUi();
}

async function ensureOllamaServer() {
  try {
    const localUrlEl = document.getElementById("localLlmUrlInput");
    const baseUrl = (localUrlEl && localUrlEl.value) ? localUrlEl.value.trim().replace(/\/$/, "") : "http://127.0.0.1:11434";
    const response = await fetch(`${baseUrl}/`, { method: "GET" });
    state.ollamaServerReady = response.ok;
  } catch (error) {
    state.ollamaServerReady = false;
  }
}

async function ensureNarrationServer() {
  try {
    const response = await fetchWithTimeout(`${state.narrationServerUrl}/health`, { method: "GET" }, 2000);
    state.narrationServerReady = response.ok;
  } catch (error) {
    state.narrationServerReady = false;
  }

  if (!state.narrationServerReady) {
    setNarrationGenStatus("Anjali narration needs the local narration server on port 8424.");
  }

  updateServerHealthUi();

  return state.narrationServerReady;
}

async function ensureAnjaliCloneServer() {
  const now = Date.now();
  const recentlyHealthy = state.anjaliMonitor.lastHealthyAt > 0
    && (now - state.anjaliMonitor.lastHealthyAt) <= ANJALI_CLONE_HEALTH_GRACE_MS;

  if (isAnjaliGenerationActive()) {
    const keepReady = Boolean(
      state.anjaliCloneServerReady
      || recentlyHealthy
      || state.anjaliMonitor.modelLoaded
    );
    state.anjaliCloneServerReady = keepReady;
    state.anjaliMonitor.warming = false;
    updateServerHealthUi();
    return keepReady;
  }

  try {
    const response = await fetchWithTimeout(`${state.anjaliCloneServerUrl}/health`, {
      method: "GET",
      cache: "no-store"
    }, ANJALI_CLONE_HEALTH_TIMEOUT_MS);
    const payload = response.ok ? await response.clone().json().catch(() => null) : null;
    state.anjaliMonitor.modelLoaded = Boolean(payload?.modelLoaded);
    state.anjaliMonitor.warming = Boolean(response.ok && payload && payload.modelLoaded === false);
    state.anjaliMonitor.lastError = String(payload?.error || "").trim();
    state.anjaliCloneServerReady = Boolean(response.ok && (payload?.modelLoaded ?? true));
    if (state.anjaliCloneServerReady) {
      state.anjaliMonitor.lastHealthyAt = now;
      state.anjaliMonitor.transientFailureCount = 0;
    } else if (recentlyHealthy && !state.anjaliMonitor.warming) {
      state.anjaliCloneServerReady = true;
      state.anjaliMonitor.transientFailureCount = Math.max(1, Number(state.anjaliMonitor.transientFailureCount || 0) + 1);
    }
  } catch (error) {
    state.anjaliMonitor.modelLoaded = recentlyHealthy ? state.anjaliMonitor.modelLoaded : false;
    state.anjaliMonitor.warming = false;
    state.anjaliMonitor.lastError = String(error?.message || "").trim();
    state.anjaliMonitor.transientFailureCount = Math.max(1, Number(state.anjaliMonitor.transientFailureCount || 0) + 1);
    state.anjaliCloneServerReady = recentlyHealthy;
  }

  if (!state.anjaliCloneServerReady) {
    if (isAnjaliCloneStartupPending()) {
      setNarrationGenStatus("Anjali voice is starting on port 8426. Please wait while the voice model warms up.");
      setServerControlsStatus("Anjali voice server is starting. Please wait while the voice model finishes loading.");
    } else {
      setNarrationGenStatus("Anjali cloned narration needs the local Anjali clone server on port 8426. If it just started, give it a little time to warm up.");
    }
  }

  handleAnjaliCloneServerTransition(state.anjaliCloneServerReady);
  updateServerHealthUi();

  return state.anjaliCloneServerReady;
}

function startAnjaliCloneMonitor() {
  if (state.anjaliMonitor.timerId) {
    window.clearInterval(state.anjaliMonitor.timerId);
  }

  state.anjaliMonitor.timerId = window.setInterval(() => {
    if (document.hidden) {
      return;
    }

    if (isAnjaliGenerationActive()) {
      return;
    }

    void ensureAnjaliCloneServer();
  }, 15000);
}

async function ensureTranscribeServer() {
  try {
    const response = await fetchWithTimeout(`${state.transcribeServerUrl}/health`, { method: "GET" }, 2000);
    state.transcribeServerReady = response.ok;
  } catch (error) {
    state.transcribeServerReady = false;
  }

  if (!state.transcribeServerReady) {
    setTranscribeStatus("Audio-to-text needs the local transcription server on port 8428.");
  }

  updateServerHealthUi();

  return state.transcribeServerReady;
}

async function ensureVideoExportServer() {
  const now = Date.now();
  const recentlyHealthy = state.videoExportMonitor.lastHealthyAt > 0
    && (now - state.videoExportMonitor.lastHealthyAt) <= VIDEO_EXPORT_HEALTH_GRACE_MS;
  try {
    const response = await fetchWithTimeout(
      `${state.videoExportServerUrl}/health`,
      { method: "GET" },
      VIDEO_EXPORT_HEALTH_TIMEOUT_MS
    );
    state.videoExportServerReady = response.ok;
    if (state.videoExportServerReady) {
      state.videoExportMonitor.lastHealthyAt = now;
      state.videoExportMonitor.transientFailureCount = 0;
    } else if (recentlyHealthy) {
      state.videoExportServerReady = true;
      state.videoExportMonitor.transientFailureCount = Math.max(1, Number(state.videoExportMonitor.transientFailureCount || 0) + 1);
    }
  } catch (error) {
    state.videoExportServerReady = true;
    state.videoExportMonitor.transientFailureCount = Math.max(1, Number(state.videoExportMonitor.transientFailureCount || 0) + 1);
  }

  return state.videoExportServerReady;
}

async function combineNarrationBlobs(blobs = []) {
  const safeBlobs = blobs.filter((blob) => blob && blob.size);
  if (!safeBlobs.length) {
    throw new Error("Narration generation returned no audio data.");
  }

  if (safeBlobs.length === 1) {
    return safeBlobs[0];
  }

  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
  const OfflineAudioContextConstructor = window.OfflineAudioContext || window.webkitOfflineAudioContext;
  if (!AudioContextConstructor || !OfflineAudioContextConstructor) {
    throw new Error("Audio merging is not supported in this browser.");
  }

  const audioContext = new AudioContextConstructor();

  try {
    const decodedBuffers = [];
    for (const blob of safeBlobs) {
      const arrayBuffer = await blob.arrayBuffer();
      const decoded = await audioContext.decodeAudioData(arrayBuffer.slice(0));
      decodedBuffers.push(decoded);
    }

    const sampleRate = decodedBuffers.reduce((best, buffer) => Math.max(best, buffer.sampleRate || 24000), 24000);
    const channelCount = decodedBuffers.reduce((best, buffer) => Math.max(best, buffer.numberOfChannels || 1), 1);
    const joinGapSeconds = Math.max(0, NARRATION_CHUNK_JOIN_GAP_MS / 1000);
    const totalDuration = decodedBuffers.reduce((sum, buffer, index) => (
      sum + buffer.duration + (index < (decodedBuffers.length - 1) ? joinGapSeconds : 0)
    ), 0);
    const totalFrames = Math.max(1, Math.ceil(totalDuration * sampleRate) + 1);
    const offlineContext = new OfflineAudioContextConstructor(channelCount, totalFrames, sampleRate);
    let cursorTime = 0;
    const fadeSeconds = Math.max(0.008, NARRATION_CHUNK_FADE_MS / 1000);

    decodedBuffers.forEach((buffer, index) => {
      const source = offlineContext.createBufferSource();
      source.buffer = buffer;
      const gainNode = offlineContext.createGain();
      source.connect(gainNode);
      gainNode.connect(offlineContext.destination);

      const startTime = cursorTime;
      const endTime = startTime + buffer.duration;
      const effectiveFadeIn = Math.min(fadeSeconds, Math.max(0.004, buffer.duration * 0.18));
      const effectiveFadeOut = Math.min(fadeSeconds, Math.max(0.004, buffer.duration * 0.18));

      gainNode.gain.setValueAtTime(index === 0 ? 1 : 0.0001, startTime);
      if (index > 0) {
        gainNode.gain.linearRampToValueAtTime(1, Math.min(endTime, startTime + effectiveFadeIn));
      }

      gainNode.gain.setValueAtTime(1, Math.max(startTime, endTime - effectiveFadeOut));
      gainNode.gain.linearRampToValueAtTime(0.0001, endTime);

      source.start(cursorTime);
      cursorTime += buffer.duration + (index < (decodedBuffers.length - 1) ? joinGapSeconds : 0);
    });

    const renderedBuffer = await offlineContext.startRendering();
    return audioBufferToWavBlob(renderedBuffer);
  } finally {
    await audioContext.close();
  }
}

function audioBufferToWavBlob(audioBuffer) {
  const numberOfChannels = audioBuffer.numberOfChannels;
  const sampleRate = audioBuffer.sampleRate;
  const bitsPerSample = 16;
  const channelData = [];

  for (let channel = 0; channel < numberOfChannels; channel += 1) {
    channelData.push(audioBuffer.getChannelData(channel));
  }

  const blockAlign = numberOfChannels * bitsPerSample / 8;
  const byteRate = sampleRate * blockAlign;
  const dataLength = audioBuffer.length * blockAlign;
  const buffer = new ArrayBuffer(44 + dataLength);
  const view = new DataView(buffer);

  const writeString = (offset, value) => {
    for (let index = 0; index < value.length; index += 1) {
      view.setUint8(offset + index, value.charCodeAt(index));
    }
  };

  writeString(0, "RIFF");
  view.setUint32(4, 36 + dataLength, true);
  writeString(8, "WAVE");
  writeString(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numberOfChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitsPerSample, true);
  writeString(36, "data");
  view.setUint32(40, dataLength, true);

  let offset = 44;
  for (let sample = 0; sample < audioBuffer.length; sample += 1) {
    for (let channel = 0; channel < numberOfChannels; channel += 1) {
      const value = clamp(channelData[channel][sample], -1, 1);
      view.setInt16(offset, value < 0 ? value * 0x8000 : value * 0x7fff, true);
      offset += 2;
    }
  }

  return new Blob([buffer], { type: "audio/wav" });
}

function arrayBufferToBase64(arrayBuffer) {
  const bytes = new Uint8Array(arrayBuffer);
  let binary = "";

  for (let index = 0; index < bytes.length; index += 1) {
    binary += String.fromCharCode(bytes[index]);
  }

  return window.btoa(binary);
}

function base64ToBlob(base64, contentType = "application/octet-stream") {
  const binary = window.atob(base64);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return new Blob([bytes], { type: contentType });
}

async function blobToBase64(blob) {
  return arrayBufferToBase64(await blob.arrayBuffer());
}

function shouldUseChunkedMuxUpload(videoBlob, audioBlob, musicBlob) {
  const totalSize = Number(videoBlob?.size || 0) + Number(audioBlob?.size || 0) + Number(musicBlob?.size || 0);
  return totalSize >= MUX_CHUNK_UPLOAD_THRESHOLD_BYTES;
}

async function uploadBlobToMuxSession(sessionId, target, blob, onProgress = null) {
  const safeTarget = target === "music" ? "music" : (target === "audio" ? "audio" : "video");
  const safeBlob = blob instanceof Blob ? blob : new Blob();
  const totalBytes = Number(safeBlob.size || 0);

  if (!totalBytes) {
    return;
  }

  let uploadedBytes = 0;
  while (uploadedBytes < totalBytes) {
    const nextChunk = safeBlob.slice(uploadedBytes, uploadedBytes + MUX_CHUNK_UPLOAD_SIZE_BYTES);
    const response = await fetch(`${state.videoExportServerUrl}/api/mux-upload-chunk?sessionId=${encodeURIComponent(sessionId)}&target=${encodeURIComponent(safeTarget)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/octet-stream"
      },
      body: nextChunk
    });

    if (!response.ok) {
      const errorPayload = await response.json().catch(() => ({}));
      throw new Error(errorPayload.error || `Uploading the ${safeTarget} chunk failed.`);
    }

    uploadedBytes += nextChunk.size;
    if (typeof onProgress === "function") {
      onProgress(uploadedBytes, totalBytes);
    }
  }
}

async function muxVideoAndAudioChunked(videoBlob, audioBlob, musicBlob, options = {}) {
  const audioFileName = options.audioFileName || state.narration.fileName || "narration.wav";
  const audioSpeed = Number.isFinite(Number(options.audioSpeed)) ? Number(options.audioSpeed) : 1;
  const videoSpeed = Number.isFinite(Number(options.videoSpeed)) ? Number(options.videoSpeed) : 1;
  const explicitTargetDurationMs = Number(options.targetDurationMs) || 0;
  const musicVolume = state.music.enabled
    ? Math.min(STRICT_BACKGROUND_MUSIC_VOLUME, Number(state.music.volume) || STRICT_BACKGROUND_MUSIC_VOLUME)
    : 0;
  const exportQuality = getEffectiveExportQuality();
  const saveHandle = options.saveHandle || null;
  const measuredAudioDurationMs = audioBlob?.size
    ? await measureNarrationBlobDurationMs(audioBlob)
    : 0;
  const targetDurationMs = Math.max(
    explicitTargetDurationMs,
    measuredAudioDurationMs && audioSpeed > 0
      ? Math.round(measuredAudioDurationMs / audioSpeed)
      : 0
  );
  const uploadPlan = [
    { key: "video", blob: videoBlob },
    { key: "audio", blob: audioBlob }
  ];

  if (musicBlob?.size) {
    uploadPlan.push({ key: "music", blob: musicBlob });
  }

  const totalBytes = uploadPlan.reduce((sum, item) => sum + Number(item.blob?.size || 0), 0);
  const sessionResponse = await fetch(`${state.videoExportServerUrl}/api/mux-upload-session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      videoFileName: "canvas-export.webm",
      audioFileName,
      musicFileName: musicBlob?.size ? (state.music.fileName || "background-music.wav") : "",
      audioSpeed,
      videoSpeed,
      musicVolume,
      exportQuality,
      targetDurationMs,
      audioDuckingEnabled: Boolean(proDuckingEnabled && proDuckingEnabled.checked)
    })
  });

  if (!sessionResponse.ok) {
    const errorPayload = await sessionResponse.json().catch(() => ({}));
    throw new Error(errorPayload.error || "The local video export server could not start a chunked export session.");
  }

  const sessionPayload = await sessionResponse.json().catch(() => ({}));
  const sessionId = String(sessionPayload.sessionId || "");
  if (!sessionId) {
    throw new Error("The local video export server did not return a chunked export session id.");
  }

  let uploadedBytes = 0;
  for (const item of uploadPlan) {
    await uploadBlobToMuxSession(sessionId, item.key, item.blob, (itemUploadedBytes, itemTotalBytes) => {
      const overallUploadedBytes = uploadedBytes + itemUploadedBytes;
      const progress = totalBytes > 0 ? clamp(overallUploadedBytes / totalBytes, 0, 1) : 1;
      updateTaskProgressUi(0.9 + (progress * 0.08), true, {
        mirrorStage: true,
        label: "Uploading the rendered video to FFmpeg in chunks. Please wait..."
      });
    });
    uploadedBytes += Number(item.blob?.size || 0);
  }

  const completeResponse = await fetch(`${state.videoExportServerUrl}/api/mux-upload-complete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ sessionId })
  });

  if (!completeResponse.ok) {
    const errorPayload = await completeResponse.json().catch(() => ({}));
    throw new Error(errorPayload.error || "The local video export server could not finish the chunked export.");
  }

  if (saveHandle) {
    await streamResponseToFileHandle(completeResponse, saveHandle);
    return null;
  }

  return completeResponse.blob();
}

function buildMuxBinaryRequestBlob(videoBlob, audioBlob, musicBlob, metadata) {
  const encoder = new TextEncoder();
  const metadataBytes = encoder.encode(JSON.stringify(metadata));
  const magicBytes = encoder.encode(MUX_PACKAGE_MAGIC);
  const headerBytes = new Uint8Array(magicBytes.length + 16);
  headerBytes.set(magicBytes, 0);

  const headerView = new DataView(headerBytes.buffer);
  let offset = magicBytes.length;
  headerView.setUint32(offset, metadataBytes.length, true);
  offset += 4;
  headerView.setUint32(offset, Number(videoBlob.size || 0), true);
  offset += 4;
  headerView.setUint32(offset, Number(audioBlob.size || 0), true);
  offset += 4;
  headerView.setUint32(offset, Number(musicBlob?.size || 0), true);

  return new Blob(
    [headerBytes, metadataBytes, videoBlob, audioBlob, musicBlob || new Blob()],
    { type: "application/octet-stream" }
  );
}

async function decodeAudioFileToWav(file) {
  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextConstructor) {
    throw new Error("Audio decoding is not supported in this browser.");
  }

  const arrayBuffer = await file.arrayBuffer();
  const audioContext = new AudioContextConstructor();

  try {
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer.slice(0));
    return audioBufferToWavBlob(audioBuffer);
  } finally {
    await audioContext.close();
  }
}

function getScenePalette(theme) {
  switch (theme) {
    case "Ocean":
      return ["#0b7bb3", "#71d7ff", "#b5f0ff"];
    case "Space":
      return ["#2746b5", "#7a6cff", "#b8c2ff"];
    case "Nature":
      return ["#1e7d4f", "#76d88f", "#c8f5cb"];
    case "Festival":
      return ["#ff8a3d", "#ffcf5a", "#ff7ea7"];
    case "Technology":
      return ["#125c86", "#4dd2ff", "#b4f6ff"];
    case "Sports":
      return ["#ff7b2f", "#ffd25f", "#ff5d5d"];
    case "History":
      return ["#925834", "#d7ab6d", "#f3dfbe"];
    default:
      return ["#0e84ad", "#4eb6de", "#ffb548"];
  }
}

function analyzeScenePrompt(promptText) {
  const text = (promptText || "").toLowerCase();
  const has = (pattern) => pattern.test(text);

  let theme = "Classroom";
  let vfx = "sparkles";
  let musicMood = "bright";
  let description = "Bright classroom style with gentle sparkles.";

  if (has(/ocean|sea|water|river|rain|underwater|fish|beach/)) {
    theme = "Ocean";
    vfx = "bubbles";
    musicMood = "calm";
    description = "Fresh ocean learning style with floating bubbles.";
  } else if (has(/space|planet|solar|moon|star|galaxy|universe|rocket/)) {
    theme = "Space";
    vfx = "sparkles";
    musicMood = "dreamy";
    description = "Dreamy space scene with sparkles and glowing light.";
  } else if (has(/forest|tree|nature|garden|plant|flower|animal|earth/)) {
    theme = "Nature";
    vfx = "waves";
    musicMood = "calm";
    description = "Natural green classroom mood with soft flowing motion.";
  } else if (has(/festival|celebration|party|dance|fun|birthday|joy/)) {
    theme = "Festival";
    vfx = "confetti";
    musicMood = "energetic";
    description = "Festive colorful scene with confetti energy.";
  } else if (has(/technology|robot|computer|digital|coding|science|future/)) {
    theme = "Technology";
    vfx = "grid";
    musicMood = "bright";
    description = "Clean digital scene with a modern grid glow.";
  } else if (has(/sport|game|cricket|football|run|race|athlete|team/)) {
    theme = "Sports";
    vfx = "rays";
    musicMood = "energetic";
    description = "Action learning scene with motion rays and lift.";
  } else if (has(/history|ancient|freedom|war|king|queen|civilization/)) {
    theme = "History";
    vfx = "rays";
    musicMood = "dramatic";
    description = "Warm dramatic scene with heritage-style light rays.";
  }

  return {
    prompt: promptText.trim(),
    theme,
    vfx,
    musicMood,
    exportQuality: getSelectedExportQuality(),
    palette: getScenePalette(theme),
    description
  };
}

function getPromptArtLines(promptText) {
  const cleanText = (promptText || "").replace(/\s+/g, " ").trim();
  if (!cleanText) {
    return ["Learning", "Outcomes"];
  }

  const words = cleanText.split(" ").slice(0, 8);
  if (words.length <= 3) {
    return [words.join(" "), ""].filter(Boolean);
  }

  const midpoint = Math.ceil(words.length / 2);
  return [
    words.slice(0, midpoint).join(" "),
    words.slice(midpoint).join(" ")
  ].filter(Boolean);
}

function drawPromptArtDecorations(ctxRef, theme, palette, width, height) {
  ctxRef.save();

  if (theme === "Ocean") {
    for (let index = 0; index < 7; index += 1) {
      ctxRef.beginPath();
      ctxRef.lineWidth = 10 + index * 2;
      ctxRef.strokeStyle = `rgba(255,255,255,${0.12 - index * 0.012})`;
      for (let x = -20; x <= width + 20; x += 14) {
        const y = height - 180 - index * 32 + Math.sin((x / 90) + index) * 18;
        if (x === -20) {
          ctxRef.moveTo(x, y);
        } else {
          ctxRef.lineTo(x, y);
        }
      }
      ctxRef.stroke();
    }
  } else if (theme === "Space") {
    for (let index = 0; index < 40; index += 1) {
      const x = (index * 87) % width;
      const y = (index * 113) % height;
      const r = 2 + (index % 3);
      ctxRef.fillStyle = `rgba(255,255,255,${0.35 - (index % 4) * 0.05})`;
      ctxRef.beginPath();
      ctxRef.arc(x, y, r, 0, Math.PI * 2);
      ctxRef.fill();
    }
  } else if (theme === "Nature") {
    for (let index = 0; index < 9; index += 1) {
      ctxRef.fillStyle = `rgba(255,255,255,${0.08 + index * 0.01})`;
      ctxRef.beginPath();
      ctxRef.ellipse((index * 120) + 40, height - 120 - (index % 2) * 24, 70, 110, 0, 0, Math.PI * 2);
      ctxRef.fill();
    }
  } else if (theme === "Technology") {
    ctxRef.strokeStyle = "rgba(255,255,255,0.12)";
    ctxRef.lineWidth = 2;
    for (let x = 30; x <= width; x += 80) {
      ctxRef.beginPath();
      ctxRef.moveTo(x, 0);
      ctxRef.lineTo(x, height);
      ctxRef.stroke();
    }
    for (let y = 30; y <= height; y += 80) {
      ctxRef.beginPath();
      ctxRef.moveTo(0, y);
      ctxRef.lineTo(width, y);
      ctxRef.stroke();
    }
  } else if (theme === "Festival") {
    const colors = [palette[2], "#ffffff", palette[1], palette[0]];
    for (let index = 0; index < 24; index += 1) {
      ctxRef.save();
      ctxRef.translate((index * 73) % width, 80 + ((index * 41) % (height - 120)));
      ctxRef.rotate(index * 0.5);
      ctxRef.fillStyle = colors[index % colors.length];
      ctxRef.globalAlpha = 0.35;
      ctxRef.fillRect(-10, -4, 20, 8);
      ctxRef.restore();
    }
  } else {
    for (let index = 0; index < 12; index += 1) {
      ctxRef.fillStyle = `rgba(255,255,255,${0.08 + (index % 3) * 0.03})`;
      ctxRef.beginPath();
      ctxRef.arc((index * 95) % width, 90 + ((index * 57) % (height - 120)), 24 + (index % 3) * 12, 0, Math.PI * 2);
      ctxRef.fill();
    }
  }

  ctxRef.restore();
}

async function createPromptSceneArt(sceneState, promptText) {
  const artCanvas = document.createElement("canvas");
  artCanvas.width = 1024;
  artCanvas.height = 1024;
  const artCtx = artCanvas.getContext("2d");
  const palette = Array.isArray(sceneState.palette) && sceneState.palette.length >= 3
    ? sceneState.palette
    : ["#0e84ad", "#4eb6de", "#ffb548"];
  const lines = getPromptArtLines(promptText);

  const background = artCtx.createLinearGradient(0, 0, artCanvas.width, artCanvas.height);
  background.addColorStop(0, palette[0]);
  background.addColorStop(0.5, palette[1]);
  background.addColorStop(1, palette[2]);
  artCtx.fillStyle = background;
  artCtx.fillRect(0, 0, artCanvas.width, artCanvas.height);

  artCtx.fillStyle = "rgba(255,255,255,0.12)";
  artCtx.beginPath();
  artCtx.arc(180, 160, 220, 0, Math.PI * 2);
  artCtx.arc(830, 860, 260, 0, Math.PI * 2);
  artCtx.fill();

  drawPromptArtDecorations(artCtx, sceneState.theme, palette, artCanvas.width, artCanvas.height);

  artCtx.fillStyle = "rgba(255,255,255,0.92)";
  artCtx.beginPath();
  artCtx.moveTo(108, 168);
  artCtx.arcTo(916, 168, 916, 856, 36);
  artCtx.arcTo(916, 856, 108, 856, 36);
  artCtx.arcTo(108, 856, 108, 168, 36);
  artCtx.arcTo(108, 168, 916, 168, 36);
  artCtx.closePath();
  artCtx.fill();

  artCtx.fillStyle = palette[0];
  artCtx.font = '900 42px "Nunito"';
  artCtx.fillText(sceneState.theme.toUpperCase(), 160, 240);

  artCtx.fillStyle = "#10243a";
  artCtx.font = '800 88px "League Spartan"';
  let currentY = 380;
  lines.forEach((line) => {
    artCtx.fillText(line, 160, currentY, 700);
    currentY += 100;
  });

  artCtx.fillStyle = "#365f7b";
  artCtx.font = '700 34px "Nunito"';
  artCtx.fillText(sceneState.description, 160, 700, 680);

  artCtx.fillStyle = palette[2];
  artCtx.font = '800 28px "Nunito"';
  artCtx.fillText("Prompt-based scene art", 160, 790);

  const dataUrl = artCanvas.toDataURL("image/png");
  const image = await loadImageFromDataUrl(dataUrl);
  return {
    fileName: `generated-${sceneState.theme.toLowerCase()}-scene.png`,
    dataUrl,
    image,
    generatedFromPrompt: true
  };
}

function getMusicMoodConfig(mood) {
  switch (mood) {
    case "calm":
      return {
        tempo: 76,
        progression: [[60, 64, 67], [57, 60, 64], [53, 57, 60], [55, 59, 62]],
        bass: [36, 33, 29, 31],
        lead: [72, 74, 76, 79],
        padWave: "sine",
        leadWave: "triangle"
      };
    case "dreamy":
      return {
        tempo: 84,
        progression: [[62, 66, 69], [57, 61, 64], [59, 62, 66], [55, 59, 62]],
        bass: [38, 33, 35, 31],
        lead: [74, 78, 81, 83],
        padWave: "triangle",
        leadWave: "sine"
      };
    case "dramatic":
      return {
        tempo: 92,
        progression: [[57, 60, 64], [53, 57, 60], [60, 64, 67], [55, 59, 62]],
        bass: [33, 29, 36, 31],
        lead: [69, 72, 76, 77],
        padWave: "sawtooth",
        leadWave: "triangle"
      };
    case "energetic":
      return {
        tempo: 118,
        progression: [[64, 68, 71], [59, 63, 66], [61, 64, 68], [57, 61, 64]],
        bass: [40, 35, 37, 33],
        lead: [76, 80, 83, 85],
        padWave: "square",
        leadWave: "triangle"
      };
    default:
      return {
        tempo: 98,
        progression: [[60, 64, 67], [67, 71, 74], [57, 60, 64], [65, 69, 72]],
        bass: [36, 43, 33, 41],
        lead: [72, 76, 79, 81],
        padWave: "triangle",
        leadWave: "sine"
      };
  }
}

function midiToFrequency(midiNote) {
  return 440 * (2 ** ((midiNote - 69) / 12));
}

function scheduleOfflineTone(contextRef, destinationNode, {
  startTime,
  duration,
  frequency,
  type = "sine",
  gain = 0.1,
  attack = 0.02,
  release = 0.12,
  detune = 0
}) {
  const oscillator = contextRef.createOscillator();
  const gainNode = contextRef.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startTime);
  if (detune) {
    oscillator.detune.setValueAtTime(detune, startTime);
  }

  gainNode.gain.setValueAtTime(0.0001, startTime);
  gainNode.gain.linearRampToValueAtTime(gain, startTime + attack);
  gainNode.gain.setValueAtTime(gain, Math.max(startTime + attack, startTime + duration - release));
  gainNode.gain.linearRampToValueAtTime(0.0001, startTime + duration);

  oscillator.connect(gainNode);
  gainNode.connect(destinationNode);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.02);
}

async function generateProceduralMusicBlob(mood = "bright", durationSeconds = 12) {
  const OfflineAudioContextConstructor = window.OfflineAudioContext || window.webkitOfflineAudioContext;
  if (!OfflineAudioContextConstructor) {
    throw new Error("Music generation is not supported in this browser.");
  }

  const sampleRate = 44100;
  const totalFrames = Math.max(sampleRate * 4, Math.floor(sampleRate * durationSeconds));
  const offlineContext = new OfflineAudioContextConstructor(2, totalFrames, sampleRate);
  const masterGain = offlineContext.createGain();
  masterGain.gain.value = 0.7;
  masterGain.connect(offlineContext.destination);

  const config = getMusicMoodConfig(mood);
  const beat = 60 / config.tempo;
  const barLength = beat * 4;
  const bars = Math.max(2, Math.floor(durationSeconds / barLength));

  for (let barIndex = 0; barIndex < bars; barIndex += 1) {
    const startTime = barIndex * barLength;
    const chord = config.progression[barIndex % config.progression.length];
    const bassNote = config.bass[barIndex % config.bass.length];
    const leadNote = config.lead[barIndex % config.lead.length];

    chord.forEach((midiNote, noteIndex) => {
      scheduleOfflineTone(offlineContext, masterGain, {
        startTime,
        duration: Math.min(barLength, durationSeconds - startTime),
        frequency: midiToFrequency(midiNote),
        type: config.padWave,
        gain: 0.055,
        attack: 0.08,
        release: 0.3,
        detune: noteIndex === 1 ? -7 : noteIndex === 2 ? 7 : 0
      });
    });

    scheduleOfflineTone(offlineContext, masterGain, {
      startTime,
      duration: Math.min(barLength * 0.9, durationSeconds - startTime),
      frequency: midiToFrequency(bassNote),
      type: "sine",
      gain: 0.1,
      attack: 0.01,
      release: 0.18
    });

    for (let beatIndex = 0; beatIndex < 4; beatIndex += 1) {
      const pulseStart = startTime + (beat * beatIndex);
      if (pulseStart >= durationSeconds) {
        break;
      }

      scheduleOfflineTone(offlineContext, masterGain, {
        startTime: pulseStart,
        duration: Math.min(beat * 0.45, durationSeconds - pulseStart),
        frequency: midiToFrequency(leadNote + (beatIndex % 2 === 0 ? 0 : 2)),
        type: config.leadWave,
        gain: 0.05,
        attack: 0.01,
        release: 0.12
      });

      scheduleOfflineTone(offlineContext, masterGain, {
        startTime: pulseStart,
        duration: Math.min(0.12, durationSeconds - pulseStart),
        frequency: 95 - (beatIndex * 5),
        type: "triangle",
        gain: 0.025,
        attack: 0.001,
        release: 0.08
      });
    }
  }

  const renderedBuffer = await offlineContext.startRendering();
  return audioBufferToWavBlob(renderedBuffer);
}

function resetBackgroundMusicState() {
  if (sceneMusicPreview) {
    sceneMusicPreview.pause();
  }

  if (state.music.url) {
    URL.revokeObjectURL(state.music.url);
  }

  state.music = {
    url: "",
    fileName: "",
    blob: null,
    source: "",
    mood: "",
    durationMs: 0,
    volume: 0.2,
    enabled: false
  };
}

function updateBackgroundMusicUi() {
  if (state.music.url) {
    sceneMusicPreview.src = state.music.url;
    sceneMusicPreview.classList.remove("hidden");
    setSceneMusicStatus(`${state.music.source}: ${state.music.fileName}`);
  } else {
    sceneMusicPreview.pause();
    sceneMusicPreview.removeAttribute("src");
    sceneMusicPreview.load();
    sceneMusicPreview.classList.add("hidden");
    setSceneMusicStatus("No background music selected.");
  }
}

async function setBackgroundMusicFromBlob(blob, fileName, sourceLabel, mood = "") {
  const nextUrl = URL.createObjectURL(blob);

  try {
    const audioElement = await createLoadedAudio(nextUrl);
    const durationMs = Number.isFinite(audioElement.duration)
      ? Math.max(1000, Math.ceil(audioElement.duration * 1000))
      : 12000;

    resetBackgroundMusicState();
    state.music = {
      url: nextUrl,
      fileName,
      blob,
      source: sourceLabel,
      mood,
      durationMs,
      volume: 0.18,
      enabled: true
    };

    updateBackgroundMusicUi();
  } catch (error) {
    URL.revokeObjectURL(nextUrl);
    throw error;
  }
}

async function getBackgroundMusicExportBlob() {
  if (state.music.blob) {
    return state.music.blob;
  }

  if (!state.music.url) {
    return null;
  }

  const response = await fetch(state.music.url);
  if (!response.ok) {
    throw new Error("The background music could not be read for export.");
  }

  return response.blob();
}

function removeSceneGeneratedImagesFromState() {
  state.images = state.images.filter((item) => item.sourceTag !== "scene-generator");
}

function renderSceneImagePreviews() {
  sceneImagePreviewList.innerHTML = "";

  if (!state.sceneUploads.length) {
    sceneImagePreviewList.classList.add("hidden");
    return;
  }

  state.sceneUploads.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "image-preview-card";

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "image-remove-btn";
    removeBtn.setAttribute("aria-label", `Remove ${item.fileName}`);
    removeBtn.textContent = "X";
    removeBtn.addEventListener("click", () => {
      state.sceneUploads.splice(index, 1);
      renderSceneImagePreviews();
      updateScenePreview();
    });

    const img = document.createElement("img");
    img.src = item.dataUrl;
    img.alt = `Scene upload ${index + 1}`;

    const label = document.createElement("p");
    label.className = "image-preview-label";
    label.textContent = item.fileName;

    card.appendChild(removeBtn);
    card.appendChild(img);
    card.appendChild(label);
    sceneImagePreviewList.appendChild(card);
  });

  sceneImagePreviewList.classList.remove("hidden");
}

function applySceneUploadsToStage() {
  const manualImages = state.images.filter((item) => item.sourceTag !== "scene-generator");
  const remainingSlots = Math.max(0, MAX_IMAGE_UPLOADS - manualImages.length);
  const uploadsToApply = state.sceneUploads.slice(0, remainingSlots).map((item) => ({
    ...item,
    sourceTag: "scene-generator"
  }));

  const pageAssignedImages = assignPageIndexesToNewImages(manualImages, uploadsToApply, 0);
  state.images = applyDefaultImageLayouts([...manualImages, ...pageAssignedImages]);
  state.imageEditor.activeIndex = state.images.length ? state.images.length - 1 : -1;
  renderImagePreviews();
}

function getScenePreviewStyle(palette) {
  const safePalette = Array.isArray(palette) && palette.length >= 3
    ? palette
    : ["#0e84ad", "#4eb6de", "#ffb548"];

  return `linear-gradient(135deg, ${safePalette[0]}, ${safePalette[1]}, ${safePalette[2]})`;
}

function updateScenePreview() {
  const sceneState = state.scene;
  const musicIsActive = sceneMusicModeSelect.value !== "off" && state.music.enabled;
  scenePreviewStage.dataset.vfx = sceneState.vfx;
  scenePreviewStage.style.background = getScenePreviewStyle(sceneState.palette);
  scenePreviewLabel.textContent = sceneState.description;
  sceneThemeChip.textContent = `Theme: ${sceneState.theme}`;
  sceneVfxChip.textContent = `VFX: ${sceneState.vfx.charAt(0).toUpperCase()}${sceneState.vfx.slice(1)}`;
  sceneMusicChip.textContent = `Music: ${
    musicIsActive
      ? (state.music.mood || sceneState.musicMood || "Custom")
      : (sceneMusicModeSelect.value === "off"
        ? "Off"
        : (sceneState.musicMood.charAt(0).toUpperCase() + sceneState.musicMood.slice(1)))
  }`;
  sceneExportChip.textContent = `Export: ${getExportQualityLabel(normalizeExportQuality(sceneState.exportQuality))}`;

  if (state.sceneUploads.length) {
    scenePreviewImage.src = state.sceneUploads[0].dataUrl;
    scenePreviewImage.classList.remove("hidden");
    scenePreviewHint.textContent = `${state.sceneUploads.length} scene image${state.sceneUploads.length > 1 ? "s" : ""} ready to add to the slide gallery.`;
  } else {
    scenePreviewImage.classList.add("hidden");
    scenePreviewImage.removeAttribute("src");
    scenePreviewHint.textContent = musicIsActive
      ? "Background music is ready. Generate the scene to apply it to playback and export."
      : "This preview shows the style that will be applied to the blue screen before you open the slide.";
  }
}

async function handleSceneImageSelection(event) {
  const selectedFiles = Array.from(event.target.files || []);
  if (!selectedFiles.length) {
    return;
  }

  try {
    const loadedImages = await Promise.all(
      selectedFiles.map(async (file) => {
        const dataUrl = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = () => reject(new Error(`Could not read ${file.name}.`));
          reader.readAsDataURL(file);
        });

        const image = await loadImageFromDataUrl(dataUrl);
        return { fileName: file.name, dataUrl, image };
      })
    );

    state.sceneUploads = loadedImages;
    renderSceneImagePreviews();
    updateScenePreview();
    setSceneGeneratorStatus(`${loadedImages.length} scene image${loadedImages.length > 1 ? "s are" : " is"} ready. Generate the scene to place them on the slide.`);
  } catch (error) {
    console.error(error);
    setSceneGeneratorStatus(error.message || "Scene image upload failed.");
  } finally {
    event.target.value = "";
  }
}

async function handleSceneMusicSelection(event) {
  const [file] = Array.from(event.target.files || []);

  if (!file) {
    resetBackgroundMusicState();
    updateBackgroundMusicUi();
    updateScenePreview();
    return;
  }

  try {
    await setBackgroundMusicFromBlob(file, file.name, "Uploaded music", state.scene.musicMood);
    updateScenePreview();
    setSceneGeneratorStatus("Uploaded background music is ready.");
  } catch (error) {
    console.error(error);
    resetBackgroundMusicState();
    updateBackgroundMusicUi();
    setSceneGeneratorStatus(error.message || "Background music upload failed.");
  }
}

async function ensureScenePromptArt(sceneState, promptText) {
  if (state.sceneUploads.length) {
    return;
  }

  const generatedArt = await createPromptSceneArt(sceneState, promptText);
  state.sceneUploads = [generatedArt];
  renderSceneImagePreviews();
}

async function generateSceneSetup(options = {}) {
  const showScreenAfter = Boolean(options.showScreenAfter);
  const promptText = (scenePromptInput.value.trim() || lessonInput.value.trim());
  if (!promptText) {
    setSceneGeneratorStatus("Write a scene prompt or lesson content first.");
    return;
  }

  state.sceneGenerationActive = true;
  updateSceneGeneratorUi();
  setSceneGenerationProgress(8, "Analyzing prompt");

  try {
    if (!lessonInput.value.trim()) {
      lessonInput.value = promptText;
      handleLessonInputChange();
    }

    const detectedScene = analyzeScenePrompt(promptText);
    const selectedVfx = sceneVfxSelect.value === "auto" ? detectedScene.vfx : sceneVfxSelect.value;
    state.scene = {
      ...detectedScene,
      vfx: selectedVfx,
      exportQuality: getSelectedExportQuality()
    };

    exportQualitySelect.value = state.scene.exportQuality;
    setSceneGenerationProgress(24, "Building scene style");

    await ensureScenePromptArt(state.scene, promptText);
    setSceneGenerationProgress(52, "Generating prompt scene image");

    removeSceneGeneratedImagesFromState();
    applySceneUploadsToStage();
    setSceneGenerationProgress(68, "Placing scene image");

    if (sceneMusicModeSelect.value === "off") {
      resetBackgroundMusicState();
      updateBackgroundMusicUi();
    } else if (sceneMusicModeSelect.value === "upload") {
      if (!state.music.url) {
        throw new Error("Upload a background music file, or switch music mode to Auto Generate.");
      }
    } else {
      const estimatedDurationSeconds = clamp(
        Math.ceil((state.narration.durationMs || getDefaultNarrationDurationMs()) / 1000),
        12,
        36
      );

      setSceneGenerationProgress(78, "Generating background music");
      const musicBlob = await generateProceduralMusicBlob(state.scene.musicMood, estimatedDurationSeconds);
      await setBackgroundMusicFromBlob(
        musicBlob,
        `scene-${state.scene.musicMood}-music.wav`,
        "Generated music",
        state.scene.musicMood
      );
    }

    updateScenePreview();
    setSceneGenerationProgress(92, "Preparing preview and export");

    if (!stagePanel.classList.contains("hidden")) {
      drawScene(state.mouthOpen);
    }

    if (showScreenAfter) {
      showScreen();
    }

    setSceneGenerationProgress(100, showScreenAfter ? "Scene ready on screen" : "Scene ready");
    setSceneGeneratorStatus(
      `Scene ready: ${state.scene.theme} style, ${state.scene.vfx} background effect, ${state.scene.exportQuality === "4k" ? "4K" : "HD"} export.${state.music.enabled ? " Music is ready too." : ""}${showScreenAfter ? " The screen is open and ready for download." : ""}`
    );
    setStatus(showScreenAfter
      ? "Prompt scene is ready on screen. Play it or download the video."
      : "Scene generator finished. Open the screen, play the slide, or download when ready.");
  } catch (error) {
    console.error(error);
    setSceneGenerationProgress(100, "Generation stopped");
    setSceneGeneratorStatus(error.message || "Scene generation failed.");
  } finally {
    state.sceneGenerationActive = false;
    updateSceneGeneratorUi();
    window.setTimeout(() => {
      if (!state.sceneGenerationActive) {
        resetSceneGenerationProgress();
      }
    }, 1200);
  }
}

function clearSceneSetup() {
  state.sceneGenerationActive = false;
  state.sceneUploads = [];
  scenePromptInput.value = "";
  sceneImageInput.value = "";
  sceneMusicInput.value = "";
  sceneVfxSelect.value = "auto";
  sceneMusicModeSelect.value = "auto";
  exportQualitySelect.value = "2k";
  state.scene = analyzeScenePrompt("");
  removeSceneGeneratedImagesFromState();
  resetBackgroundMusicState();
  renderSceneImagePreviews();
  renderImagePreviews();
  updateBackgroundMusicUi();
  updateScenePreview();
  resetSceneGenerationProgress();
  updateSceneGeneratorUi();

  if (!stagePanel.classList.contains("hidden")) {
    drawScene(state.mouthOpen);
  }

  setSceneGeneratorStatus("Scene setup cleared. Add a new prompt, image, or music and generate again.");
}

function clearTypingInterval() {
  if (state.typingInterval) {
    clearInterval(state.typingInterval);
    state.typingInterval = null;
  }
}

function cancelVisualLoop() {
  if (state.animationFrame) {
    cancelAnimationFrame(state.animationFrame);
    state.animationFrame = null;
  }
}

function resetNarrationState() {
  audioPreview.pause();

  if (state.narration.url && state.narration.url.startsWith("blob:")) {
    URL.revokeObjectURL(state.narration.url);
  }

  state.narration = {
    url: "",
    fileName: "",
    durationMs: 0,
    source: "",
    blob: null,
    textSource: "",
    voice: "",
    syncProfile: null
  };
}

function updateNarrationUi() {
  if (state.narration.url) {
    audioPreview.src = state.narration.url;
    audioPreview.classList.remove("hidden");
    clearAudioBtn.disabled = false;
  } else {
    audioPreview.pause();
    audioPreview.removeAttribute("src");
    audioPreview.load();
    audioPreview.classList.add("hidden");
    clearAudioBtn.disabled = true;
  }
}

function setRecordingUi(isRecording) {
  recordBtn.disabled = isRecording;
  stopRecordBtn.disabled = !isRecording;
  audioInput.disabled = isRecording;
  clearAudioBtn.disabled = isRecording || !state.narration.url;
}

function stopDictation(updateStatus = true) {
  if (state.dictation.recognition && state.dictation.active) {
    state.dictation.recognition.stop();
  } else {
    state.dictation.active = false;
    state.dictation.recognition = null;
  }

  if (updateStatus) {
    setSpeechToolsStatus("Speech to text stopped.");
  }

  updateSpeechToolsUi();
}

function stopInputPreview(updateStatus = false) {
  setPreviewVoiceChooserVisible(false);

  if (!state.inputPreviewing && !updateStatus) {
    updateSpeechToolsUi();
    return;
  }

  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }

  if (state.previewAudio) {
    state.previewAudio.pause();
    state.previewAudio.removeAttribute("src");
    state.previewAudio.load();
    if (state.previewAudio.dataset?.runtimeAudio === "true") {
      state.previewAudio.remove();
    }
    state.previewAudio = null;
  }

  if (state.previewAudioUrl) {
    URL.revokeObjectURL(state.previewAudioUrl);
    state.previewAudioUrl = "";
  }

  state.inputPreviewing = false;
  updateSpeechToolsUi();

  if (updateStatus) {
    setSpeechToolsStatus("Text to speech stopped.");
  }
}

async function playServerBackedTextPreview(text, voicePreference) {
  const voiceLabel = getNarrationVoiceLabel(voicePreference);
  const previewBlob = await requestNarrationBlob(text, voicePreference, {
    timeoutMs: getLongNarrationRequestTimeoutMs(text)
  });
  const previewUrl = URL.createObjectURL(previewBlob);

  try {
    const audioElement = await createLoadedAudio(previewUrl);
    applyNaturalVoicePlayback(audioElement, getLessonPlaybackRate());

    state.inputPreviewing = true;
    state.previewAudio = audioElement;
    state.previewAudioUrl = previewUrl;
    setSpeechToolsStatus(`${voiceLabel} voice is reading the content.`);
    updateSpeechToolsUi();

    audioElement.addEventListener("ended", () => {
      stopInputPreview(false);
      setSpeechToolsStatus(`${voiceLabel} voice finished reading the content.`);
      updateSpeechToolsUi();
    }, { once: true });

    audioElement.addEventListener("error", () => {
      stopInputPreview(false);
      setSpeechToolsStatus(`${voiceLabel} voice preview was interrupted.`);
      updateSpeechToolsUi();
    }, { once: true });

    await audioElement.play();
  } catch (error) {
    URL.revokeObjectURL(previewUrl);
    throw error;
  }
}

async function playDirectAudioPreview(audioUrl, voiceLabel) {
  const audioElement = await createLoadedAudio(audioUrl);
  applyNaturalVoicePlayback(audioElement, getLessonPlaybackRate());

  state.inputPreviewing = true;
  state.previewAudio = audioElement;
  setSpeechToolsStatus(`${voiceLabel} voice is reading the content.`);
  updateSpeechToolsUi();

  audioElement.addEventListener("ended", () => {
    stopInputPreview(false);
    setSpeechToolsStatus(`${voiceLabel} voice finished reading the content.`);
    updateSpeechToolsUi();
  }, { once: true });

  audioElement.addEventListener("error", () => {
    stopInputPreview(false);
    setSpeechToolsStatus(`${voiceLabel} voice preview was interrupted.`);
    updateSpeechToolsUi();
  }, { once: true });

  await audioElement.play();
}

function getPreferredPreviewVoice(voicePreference) {
  const voices = window.speechSynthesis.getVoices();
  const malePattern = /male|david|mark|guy|daniel|alex|james|matthew|george|ryan|aaron/i;
  const femalePattern = /hazel|jenny|aria|samantha|eva|zira|susan|sonia|heera|female/i;
  const indianFemalePattern = /heera|sonia|swara|veena|ananya|priya|india|indian|en-in|hi-in/i;
  const freshPattern = /jenny|hazel|aria|eva|samantha|zira|sonia|heera|google us english/i;
  const targetPattern = voicePreference === "male"
    ? malePattern
    : (voicePreference === "fresh"
      ? freshPattern
      : ((voicePreference === "indian-female" || voicePreference === "anjali") ? indianFemalePattern : femalePattern));

  return voices.find((voice) => targetPattern.test(`${voice.name} ${voice.voiceURI} ${voice.lang}`))
    || ((voicePreference === "indian-female" || voicePreference === "anjali")
      ? voices.find((voice) => femalePattern.test(`${voice.name} ${voice.voiceURI} ${voice.lang}`))
      : null)
    || voices.find((voice) => /english|en-/i.test(`${voice.name} ${voice.voiceURI} ${voice.lang}`))
    || voices[0]
    || null;
}

async function requestNarrationBlobSingle(text, voice = state.preferredNarrationVoice || "anjali", options = {}) {
  const isAnjaliClone = voice === "anjali";
  const requestTimeoutMs = isAnjaliClone
    ? 0
    : (Number.isFinite(Number(options.timeoutMs)) && Number(options.timeoutMs) > 0
      ? Number(options.timeoutMs)
      : DEFAULT_NARRATION_REQUEST_TIMEOUT_MS);
  if (typeof options.onProgress === "function") {
    options.onProgress({
      label: isAnjaliClone ? "Checking Anjali voice server..." : "Checking narration server...",
      progress: 0.12
    });
  }
  const serverReady = isAnjaliClone ? await ensureAnjaliCloneServer() : await ensureNarrationServer();
  if (!serverReady) {
    throw new Error(isAnjaliClone ? "The local Anjali voice server is not running." : "The local narration server is not running.");
  }

  const narrationText = typeof options.prebuiltNarrationText === "string"
    ? String(options.prebuiltNarrationText || "").trim()
    : buildNarrationText(text);
  if (!narrationText) {
    throw new Error("No narration text was available.");
  }
  const narrationPayload = buildNarrationRequestPayloadFromNarrationText(narrationText);

  if (typeof options.onProgress === "function") {
    options.onProgress({
      label: isAnjaliClone ? "Sending text to Anjali voice server..." : "Sending text to narration server...",
      progress: 0.22
    });
  }

  const response = await fetchWithTimeout(
    isAnjaliClone
      ? `${state.anjaliCloneServerUrl}/api/narrate`
      : `${state.narrationServerUrl}/api/narrate?voice=${encodeURIComponent(voice)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        isAnjaliClone
          ? narrationPayload
          : { text: narrationText }
      )
    },
    requestTimeoutMs
  );

  if (!response.ok) {
    const errorPayload = await response.json().catch(() => null);
    throw new Error(errorPayload?.error || "Narration generation failed.");
  }

  const contentType = response.headers.get("Content-Type") || "audio/wav";
  if (typeof options.onProgress === "function") {
    options.onProgress({
      label: "Receiving generated audio...",
      progress: 0.84
    });
  }
  if (/application\/json/i.test(contentType)) {
    const payload = await response.json().catch(() => null);
    if (!payload?.audioBase64) {
      throw new Error("Narration generation returned no audio data.");
    }

    return base64ToBlob(payload.audioBase64, payload.contentType || "audio/wav");
  }

  const blob = await response.blob();
  if (!blob.size) {
    throw new Error("Narration generation returned an empty audio file.");
  }

  if (typeof options.onProgress === "function") {
    options.onProgress({
      label: "Finalizing narration audio...",
      progress: 0.94
    });
  }

  return blob.type === contentType ? blob : new Blob([blob], { type: contentType });
}

async function measureNarrationBlobDurationMs(blob) {
  if (!blob?.size) {
    return getDefaultNarrationDurationMs();
  }

  const objectUrl = URL.createObjectURL(blob);
  try {
    const audioElement = await createLoadedAudio(objectUrl);
    return Number.isFinite(audioElement.duration)
      ? Math.max(1000, Math.ceil(audioElement.duration * 1000))
      : getDefaultNarrationDurationMs();
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

async function generateNarrationChunkWithFallback(chunkText, voice, options = {}, depth = 0) {
  const safeChunkText = String(chunkText || "").trim();
  const blob = await requestNarrationBlobSingle(safeChunkText, voice, {
    ...options,
    prebuiltNarrationText: safeChunkText
  });
  const durationMs = await measureNarrationBlobDurationMs(blob);

  if (depth >= 4 || !isNarrationDurationTooShortForText(safeChunkText, durationMs, voice)) {
    return {
      chunks: [safeChunkText],
      blobs: [blob],
      durations: [durationMs]
    };
  }

  const retryChunks = splitNarrationChunkForRetry(safeChunkText);
  if (retryChunks.length <= 1) {
    return {
      chunks: [safeChunkText],
      blobs: [blob],
      durations: [durationMs]
    };
  }

  const results = [];
  for (const retryChunk of retryChunks) {
    results.push(await generateNarrationChunkWithFallback(retryChunk, voice, options, depth + 1));
  }

  return {
    chunks: results.flatMap((result) => result.chunks),
    blobs: results.flatMap((result) => result.blobs),
    durations: results.flatMap((result) => result.durations)
  };
}

async function requestNarrationBlob(text, voice = state.preferredNarrationVoice || "anjali", options = {}) {
  const narrationText = buildNarrationText(text);
  if (!narrationText) {
    throw new Error("No narration text was available.");
  }

  const chunkConfig = getNarrationChunkConfig(voice);
  const chunkedText = narrationText.length > chunkConfig.threshold
    ? splitNarrationTextIntoChunks(narrationText, chunkConfig.maxChunkLength)
    : [narrationText];

  const trackAnjaliGeneration = voice === "anjali";
  if (trackAnjaliGeneration) {
    beginAnjaliGenerationActivity();
  }

  try {
    if (chunkedText.length === 1) {
      const singleChunkResult = await generateNarrationChunkWithFallback(chunkedText[0], voice, options);
      const blob = await combineNarrationBlobs(singleChunkResult.blobs);
      const totalDurationMs = singleChunkResult.durations.reduce((sum, value) => sum + value, 0);
      const syncProfile = buildSpeechSyncProfileFromChunkDurations(text, singleChunkResult.chunks, singleChunkResult.durations);
      if (typeof options.onSyncProfile === "function" && syncProfile) {
        options.onSyncProfile(syncProfile);
      }
      return blob;
    }

    const totalChunks = chunkedText.length;
    const blobs = [];
    const chunkDurationsMs = [];
    const resolvedChunks = [];

    for (let index = 0; index < totalChunks; index += 1) {
      const chunk = chunkedText[index];
      const startedProgress = 0.18 + ((index / totalChunks) * 0.56);
      const completedProgress = 0.18 + (((index + 1) / totalChunks) * 0.56);
      if (typeof options.onProgress === "function") {
        options.onProgress({
          label: `Generating narration part ${index + 1} of ${totalChunks}...`,
          progress: startedProgress
        });
      }
      updateTaskProgressUi(
        startedProgress,
        true,
        {
          label: `Generating narration part ${index + 1} of ${totalChunks}`
        }
      );
      const chunkResult = await generateNarrationChunkWithFallback(chunk, voice, options);
      blobs.push(...chunkResult.blobs);
      chunkDurationsMs.push(...chunkResult.durations);
      resolvedChunks.push(...chunkResult.chunks);
      if (typeof options.onProgress === "function") {
        options.onProgress({
          label: `Finished narration part ${index + 1} of ${totalChunks}.`,
          progress: completedProgress
        });
      }
      updateTaskProgressUi(
        completedProgress,
        true,
        {
          label: `Finished narration part ${index + 1} of ${totalChunks}`
        }
      );
    }

    if (typeof options.onProgress === "function") {
      options.onProgress({
        label: "Joining narration parts together...",
        progress: 0.9
      });
    }

    const combinedBlob = await combineNarrationBlobs(blobs);
    const syncProfile = buildSpeechSyncProfileFromChunkDurations(text, resolvedChunks, chunkDurationsMs);
    if (typeof options.onSyncProfile === "function" && syncProfile) {
      options.onSyncProfile(syncProfile);
    }
    return combinedBlob;
  } finally {
    if (trackAnjaliGeneration) {
      endAnjaliGenerationActivity();
    }
  }
}

async function getNarrationExportBlob() {
  if (state.narration.blob) {
    return state.narration.blob;
  }

  if (!state.narration.url) {
    throw new Error("No narration audio is ready for export.");
  }

  const response = await fetch(state.narration.url);
  if (!response.ok) {
    throw new Error("The narration audio could not be read for export.");
  }

  return response.blob();
}

async function getIntroExportBlob() {
  const ready = await ensureDefaultIntroClip();
  if (!ready) {
    throw new Error("The intro clip is not ready for export.");
  }

  const response = await fetch(resolveProjectAssetUrl(state.introPlayback.url || DEFAULT_INTRO_VIDEO_FILE));
  if (!response.ok) {
    throw new Error("The intro clip audio could not be read for export.");
  }

  const introBlob = await response.blob();
  if (!introBlob.size) {
    throw new Error("The intro clip audio file was empty.");
  }

  if ((introBlob.type || "").toLowerCase().startsWith("audio/")) {
    return introBlob;
  }

  try {
    const introFile = new File(
      [introBlob],
      state.introPlayback.fileName || "intro-export-source.mp4",
      { type: introBlob.type || "video/mp4" }
    );
    return await decodeAudioFileToWav(introFile);
  } catch (error) {
    throw new Error(error?.message || "The intro clip audio could not be decoded for export.");
  }
}

async function renderPlaybackRateAdjustedAudioBlob(blob, playbackRate = 1) {
  const safeRate = Number.isFinite(Number(playbackRate)) && Number(playbackRate) > 0
    ? Number(playbackRate)
    : 1;
  if (!blob?.size || Math.abs(safeRate - 1) < 0.001) {
    return blob;
  }

  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
  const OfflineAudioContextConstructor = window.OfflineAudioContext || window.webkitOfflineAudioContext;
  if (!AudioContextConstructor || !OfflineAudioContextConstructor) {
    throw new Error("Audio speed adjustment is not supported in this browser.");
  }

  const audioContext = new AudioContextConstructor();

  try {
    const arrayBuffer = await blob.arrayBuffer();
    const decodedBuffer = await audioContext.decodeAudioData(arrayBuffer.slice(0));
    const sampleRate = Math.max(24000, decodedBuffer.sampleRate || 24000);
    const channelCount = Math.max(1, decodedBuffer.numberOfChannels || 1);
    const adjustedDuration = decodedBuffer.duration / safeRate;
    const totalFrames = Math.max(1, Math.ceil(adjustedDuration * sampleRate) + 1);
    const offlineContext = new OfflineAudioContextConstructor(channelCount, totalFrames, sampleRate);
    const source = offlineContext.createBufferSource();
    source.buffer = decodedBuffer;
    source.playbackRate.value = safeRate;
    source.connect(offlineContext.destination);
    source.start(0);
    const renderedBuffer = await offlineContext.startRendering();
    return audioBufferToWavBlob(renderedBuffer);
  } finally {
    await audioContext.close();
  }
}

function createSilentWavBlob(durationMs, sampleRate = 24000) {
  const safeDurationMs = Math.max(1000, Math.round(durationMs || 1000));
  const channelCount = 1;
  const bytesPerSample = 2;
  const blockAlign = channelCount * bytesPerSample;
  const byteRate = sampleRate * blockAlign;
  const frameCount = Math.max(1, Math.ceil((safeDurationMs / 1000) * sampleRate));
  const dataSize = frameCount * blockAlign;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  const writeAscii = (offset, value) => {
    for (let index = 0; index < value.length; index += 1) {
      view.setUint8(offset + index, value.charCodeAt(index));
    }
  };

  writeAscii(0, "RIFF");
  view.setUint32(4, 36 + dataSize, true);
  writeAscii(8, "WAVE");
  writeAscii(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, channelCount, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bytesPerSample * 8, true);
  writeAscii(36, "data");
  view.setUint32(40, dataSize, true);

  return new Blob([buffer], { type: "audio/wav" });
}

async function muxVideoAndAudio(videoBlob, audioBlob, options = {}) {
  const serverReady = await ensureVideoExportServer();
  if (!serverReady) {
    throw new Error("The local video export server is not running. Start it with start-all.ps1.");
  }

  const musicBlob = state.music.enabled ? await getBackgroundMusicExportBlob() : null;
  const audioFileName = options.audioFileName || state.narration.fileName || "narration.wav";
  const audioSpeed = Number.isFinite(Number(options.audioSpeed)) ? Number(options.audioSpeed) : 1;
  const videoSpeed = Number.isFinite(Number(options.videoSpeed)) ? Number(options.videoSpeed) : 1;
  const explicitTargetDurationMs = Number(options.targetDurationMs) || 0;
  const musicVolume = state.music.enabled
    ? Math.min(STRICT_BACKGROUND_MUSIC_VOLUME, Number(state.music.volume) || STRICT_BACKGROUND_MUSIC_VOLUME)
    : 0;
  const exportQuality = getEffectiveExportQuality();
  const saveHandle = options.saveHandle || null;
  const measuredAudioDurationMs = audioBlob?.size
    ? await measureNarrationBlobDurationMs(audioBlob)
    : 0;
  const targetDurationMs = Math.max(
    explicitTargetDurationMs,
    measuredAudioDurationMs && audioSpeed > 0
      ? Math.round(measuredAudioDurationMs / audioSpeed)
      : 0
  );
  if (shouldUseChunkedMuxUpload(videoBlob, audioBlob, musicBlob)) {
    return muxVideoAndAudioChunked(videoBlob, audioBlob, musicBlob, {
      audioFileName,
      audioSpeed,
      videoSpeed,
      targetDurationMs,
      saveHandle
    });
  }
  const requestBody = buildMuxBinaryRequestBlob(videoBlob, audioBlob, musicBlob, {
    videoFileName: "canvas-export.webm",
    audioFileName,
    musicFileName: musicBlob ? (state.music.fileName || "background-music.wav") : "",
    audioSpeed,
    videoSpeed,
    musicVolume,
    exportQuality,
    targetDurationMs,
    audioDuckingEnabled: Boolean(proDuckingEnabled && proDuckingEnabled.checked)
  });

  let response = null;
  let binaryError = null;
  try {
    response = await fetch(`${state.videoExportServerUrl}/api/mux-binary`, {
      method: "POST",
      headers: {
        "Content-Type": "application/octet-stream"
      },
      body: requestBody
    });

    if (!response.ok) {
      const errorPayload = await response.json().catch(() => ({}));
      throw new Error(errorPayload.error || "The local video export server could not combine the video and audio.");
    }
  } catch (error) {
    binaryError = error;
    console.error(error);
    const jsonPayload = {
      videoBase64: await blobToBase64(videoBlob),
      audioBase64: await blobToBase64(audioBlob),
      videoFileName: "canvas-export.webm",
      audioFileName,
      musicFileName: musicBlob ? (state.music.fileName || "background-music.wav") : "",
      audioSpeed,
      videoSpeed,
      musicVolume,
      exportQuality,
      targetDurationMs,
      audioDuckingEnabled: Boolean(proDuckingEnabled && proDuckingEnabled.checked)
    };
    if (musicBlob?.size) {
      jsonPayload.musicBase64 = await blobToBase64(musicBlob);
    }

    response = await fetch(`${state.videoExportServerUrl}/api/mux`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jsonPayload)
    });

    if (!response.ok) {
      const errorPayload = await response.json().catch(() => ({}));
      const fallbackMessage = errorPayload.error || "The local video export server could not combine the video and audio.";
      if (binaryError?.message) {
        throw new Error(`${fallbackMessage} Binary upload also failed earlier: ${binaryError.message}`);
      }
      throw new Error(fallbackMessage);
    }
  }

  if (saveHandle) {
    await streamResponseToFileHandle(response, saveHandle);
    return null;
  }

  return response.blob();
}

function getDefaultNarrationDurationMs() {
  if (!state.text) {
    return 6000;
  }

  const syncProfile = getSpeechSyncProfile(state.text);
  return Math.max(6000, Math.ceil(syncProfile.totalDurationMs || 6000));
}

function setDisplayedTokenCount(tokenCount) {
  const safeCount = clamp(tokenCount, 0, state.tokens.length);
  state.displayedText = state.tokens.slice(0, safeCount).join("");
}

function updateDisplayedTextFromProgress(progress, options = {}) {
  if (!state.tokens.length || !state.text) {
    state.displayedText = "";
    return;
  }

  if (progress <= 0) {
    state.displayedText = "";
    return;
  }

  if (progress >= 1) {
    state.displayedText = state.text;
    return;
  }

  state.displayedText = getVisibleTextForProgress(state.text, progress, options);
}

function getDisplayedTextProgress() {
  if (!state.text) {
    return 0;
  }

  if (!state.displayedText) {
    return 0;
  }

  return clamp(state.displayedText.length / Math.max(1, state.text.length), 0, 1);
}

function easeOutCubic(value) {
  const safeValue = clamp(value, 0, 1);
  return 1 - ((1 - safeValue) ** 3);
}

function fitText(ctxRef, text, maxWidth, fontSize, fontFamily, weight = "800") {
  let size = fontSize;
  while (size > 24) {
    ctxRef.font = `${weight} ${size}px ${fontFamily}`;
    if (ctxRef.measureText(text).width <= maxWidth) {
      return size;
    }
    size -= 2;
  }
  return size;
}

function isWordLikeCharacter(character) {
  return /[A-Za-z0-9_]/.test(character || "");
}

function matchesKeywordPhraseAt(text, index, phrase) {
  const safePhrase = String(phrase || "");
  if (!safePhrase) {
    return false;
  }

  const candidate = text.slice(index, index + safePhrase.length);
  if (candidate.length !== safePhrase.length || candidate.toLowerCase() !== safePhrase.toLowerCase()) {
    return false;
  }

  const previousCharacter = text[index - 1] || "";
  const nextCharacter = text[index + safePhrase.length] || "";
  const firstCharacter = safePhrase[0] || "";
  const lastCharacter = safePhrase[safePhrase.length - 1] || "";

  if (isWordLikeCharacter(firstCharacter) && isWordLikeCharacter(previousCharacter)) {
    return false;
  }

  if (isWordLikeCharacter(lastCharacter) && isWordLikeCharacter(nextCharacter)) {
    return false;
  }

  return true;
}

function findNextKeywordMatch(text, startIndex, rules) {
  let bestMatch = null;
  const lowerText = String(text || "").toLowerCase();

  rules.forEach((rule) => {
    const lowerPhrase = String(rule.phrase || "").toLowerCase();
    let matchIndex = lowerText.indexOf(lowerPhrase, startIndex);

    while (matchIndex !== -1) {
      if (matchesKeywordPhraseAt(text, matchIndex, rule.phrase)) {
        if (!bestMatch
          || matchIndex < bestMatch.index
          || (matchIndex === bestMatch.index && rule.phrase.length > bestMatch.rule.phrase.length)) {
          bestMatch = { index: matchIndex, rule };
        }
        break;
      }

      matchIndex = lowerText.indexOf(lowerPhrase, matchIndex + 1);
    }
  });

  return bestMatch;
}

function normalizeStyledRuns(runs, baseStyle = getBaseTextStyle()) {
  const normalizedRuns = [];

  runs.forEach((run) => {
    if (!run?.text) {
      return;
    }

    const resolvedStyle = getResolvedTextStyle(run.style, baseStyle);
    const previousRun = normalizedRuns[normalizedRuns.length - 1];

    if (previousRun && textStyleMatches(previousRun.style, resolvedStyle)) {
      previousRun.text += run.text;
      return;
    }

    normalizedRuns.push({
      text: run.text,
      style: resolvedStyle
    });
  });

  return normalizedRuns;
}

function getStyledTextRuns(text, defaultStyle = getBaseTextStyle()) {
  const rules = [...state.keywordStyles].sort((leftRule, rightRule) => rightRule.phrase.length - leftRule.phrase.length);

  if (!text) {
    return [];
  }

  if (!rules.length) {
    return [{ text, style: defaultStyle }];
  }

  const runs = [];
  let cursor = 0;

  while (cursor < text.length) {
    const directRule = rules.find((rule) => matchesKeywordPhraseAt(text, cursor, rule.phrase));

    if (directRule) {
      runs.push({
        text: directRule.phrase,
        style: getResolvedTextStyle(directRule.style, defaultStyle)
      });
      cursor += directRule.phrase.length;
      continue;
    }

    const nextMatch = findNextKeywordMatch(text, cursor + 1, rules);
    const nextStop = nextMatch ? nextMatch.index : text.length;

    runs.push({
      text: text.slice(cursor, nextStop),
      style: defaultStyle
    });
    cursor = nextStop;
  }

  return normalizeStyledRuns(runs, defaultStyle);
}

function tokenizeStyledRuns(runs) {
  const tokens = [];

  runs.forEach((run) => {
    const parts = run.text.match(/\S+\s*|\s+/g) || [];
    parts.forEach((part) => {
      if (part) {
        tokens.push({
          text: part,
          style: run.style
        });
      }
    });
  });

  return tokens;
}

function measureStyledRuns(ctxRef, runs, fontSize) {
  return runs.reduce((totalWidth, run) => {
    ctxRef.font = getContentFont(fontSize, run.style);
    return totalWidth + ctxRef.measureText(run.text).width;
  }, 0);
}

function trimStyledRowRuns(runs) {
  const trimmedRuns = runs.map((run) => ({
    text: run.text,
    style: run.style
  }));

  if (!trimmedRuns.length) {
    return [];
  }

  trimmedRuns[0].text = trimmedRuns[0].text.replace(/^\s+/, "");
  trimmedRuns[trimmedRuns.length - 1].text = trimmedRuns[trimmedRuns.length - 1].text.replace(/\s+$/, "");

  return normalizeStyledRuns(trimmedRuns.filter((run) => run.text));
}

function splitStyledToken(ctxRef, token, maxWidth, fontSize) {
  const parts = [];
  let current = "";

  Array.from(token.text).forEach((character) => {
    ctxRef.font = getContentFont(fontSize, token.style);
    const candidate = `${current}${character}`;

    if (!current || ctxRef.measureText(candidate).width <= maxWidth) {
      current = candidate;
      return;
    }

    parts.push({
      text: current,
      style: token.style
    });
    current = character;
  });

  if (current) {
    parts.push({
      text: current,
      style: token.style
    });
  }

  return parts;
}

function wrapStyledRuns(ctxRef, runs, maxWidth, fontSize) {
  const rows = [];
  const tokens = tokenizeStyledRuns(runs);
  let currentRow = [];

  const commitRow = () => {
    const normalizedRow = trimStyledRowRuns(currentRow);
    if (normalizedRow.length) {
      rows.push(normalizedRow);
    }
    currentRow = [];
  };

  tokens.forEach((token) => {
    const nextToken = currentRow.length
      ? token
      : {
        ...token,
        text: token.text.replace(/^\s+/, "")
      };

    if (!nextToken.text) {
      return;
    }

    if (!currentRow.length) {
      if (measureStyledRuns(ctxRef, [nextToken], fontSize) <= maxWidth) {
        currentRow.push(nextToken);
        return;
      }

      splitStyledToken(ctxRef, nextToken, maxWidth, fontSize).forEach((part) => {
        rows.push([{ text: part.text, style: part.style }]);
      });
      return;
    }

    const rowCandidate = trimStyledRowRuns([...currentRow, nextToken]);
    if (measureStyledRuns(ctxRef, rowCandidate, fontSize) <= maxWidth) {
      currentRow.push(nextToken);
      return;
    }

    commitRow();

    const trimmedToken = {
      ...token,
      text: token.text.replace(/^\s+/, "")
    };

    if (!trimmedToken.text) {
      return;
    }

    if (measureStyledRuns(ctxRef, [trimmedToken], fontSize) <= maxWidth) {
      currentRow.push(trimmedToken);
      return;
    }

    splitStyledToken(ctxRef, trimmedToken, maxWidth, fontSize).forEach((part) => {
      rows.push([{ text: part.text, style: part.style }]);
    });
  });

  commitRow();
  return rows;
}

function getContentLayout(lines, maxWidth, maxHeight, usePlaceholder = true, options = {}) {
  const safeLines = lines.length ? lines : (usePlaceholder ? ["Your content will appear here."] : []);
  const hasImages = options.hasImages === true || (options.hasImages !== false && state.images.length > 0);
  let fontSize = hasImages ? 26 : 30;

  if (state.words.length > 520) {
    fontSize = hasImages ? 22 : 24;
  } else if (state.words.length > 360) {
    fontSize = hasImages ? 23 : 25;
  } else if (state.words.length > 220) {
    fontSize = hasImages ? 24 : 26;
  } else if (state.words.length > 120) {
    fontSize = hasImages ? 25 : 28;
  }

  fontSize = clamp(Math.round(fontSize * state.fontScale), 16, 54);

  const buildLayout = (size) => {
    const rows = [];
    const rowHeight = Math.max(size + 4, Math.round(size * 1.2));
    const groupGap = Math.max(6, Math.round(size * 0.24));

    safeLines.forEach((line, index) => {
      const headingMatch = line.match(/^\s*#{1,3}\s+(.*)$/);
      const autoHeading = looksLikeAutoHeadingLine(line, index, safeLines.length);
      const sourceLine = headingMatch ? headingMatch[1] : line;
      const bulletMatch = sourceLine.match(/^\s*(?:[-*]|\u2022)\s+(.*)$/);
      const baseLineStyle = (headingMatch || autoHeading)
        ? {
          ...getBaseTextStyle(),
          color: normalizePresentationTemplate(state.presentationTemplate) === PRESENTATION_TEMPLATE_OUTCOMES ? "#000000" : "#facc15",
          bold: true,
          underline: true
        }
        : getBaseTextStyle();
      const lineText = (bulletMatch ? bulletMatch[1] : sourceLine).replace(/\s+/g, " ").trim() || sourceLine.trim();
      const styledRuns = getStyledTextRuns(lineText, baseLineStyle).map((run) => ({
        ...run,
        text: applyDisplayCase(run.text)
      }));
      const wrapped = wrapStyledRuns(ctx, styledRuns, maxWidth - (bulletMatch ? 28 : 0), size);

      wrapped.forEach((row, rowIndex) => {
        rows.push({ segments: row, bullet: Boolean(bulletMatch) && rowIndex === 0 });
      });

      if (index < safeLines.length - 1) {
        rows.push({ spacer: true, height: groupGap });
      }
    });

    const totalHeight = rows.reduce((sum, row) => sum + (row.spacer ? row.height : rowHeight), 0);
    return { rows, fontSize: size, rowHeight, totalHeight };
  };

  return buildLayout(fontSize);
}

function paginateLayout(layout, maxHeight) {
  const pages = [];
  let currentRows = [];
  let currentHeight = 0;

  const commitPage = () => {
    pages.push({
      rows: currentRows,
      totalHeight: currentHeight,
      fontSize: layout.fontSize,
      rowHeight: layout.rowHeight
    });
    currentRows = [];
    currentHeight = 0;
  };

  layout.rows.forEach((row) => {
    const rowHeight = row.spacer ? row.height : layout.rowHeight;

    if (!currentRows.length && row.spacer) {
      return;
    }

    if (currentRows.length && currentHeight + rowHeight > maxHeight) {
      commitPage();

      if (row.spacer) {
        return;
      }
    }

    currentRows.push(row);
    currentHeight += rowHeight;
  });

  if (currentRows.length || !pages.length) {
    commitPage();
  }

  return pages;
}

function getPresentationTemplateMetrics() {
  if (normalizePresentationTemplate(state.presentationTemplate) === PRESENTATION_TEMPLATE_OUTCOMES) {
    return {
      contentTopInset: 150,
      contentLeftInset: 378,
      contentRightInset: 38,
      contentSideInset: 58,
      contentBottomInset: 40,
      imagePanelTopInset: 148,
      imagePanelBottomInset: 22,
      pdfStripTopInset: 156,
      videoTopInset: 138
    };
  }

  return {
    contentTopInset: STAGE_TEXT_TOP_MARGIN_PX,
    contentSideInset: STAGE_TEXT_SIDE_MARGIN_PX,
    contentBottomInset: STAGE_TEXT_BOTTOM_MARGIN_PX,
    imagePanelTopInset: STAGE_IMAGE_WORKSPACE_TOP_PX,
    imagePanelBottomInset: STAGE_IMAGE_WORKSPACE_BOTTOM_PX,
    pdfStripTopInset: STAGE_TEXT_TOP_MARGIN_PX,
    videoTopInset: STAGE_IMAGE_WORKSPACE_TOP_PX
  };
}

function getPresentationHeaderTitle() {
  if (normalizePresentationTemplate(state.presentationTemplate) === PRESENTATION_TEMPLATE_OUTCOMES) {
    return normalizeOutcomesTitle(state.outcomesTitle) || "LEARNING OUTCOMES";
  }

  const heading = extractLessonHeading(state.text);
  const firstMeaningfulLine = String(state.text || "")
    .split(/\r?\n/)
    .map((line) => line.replace(/^#+\s*/, "").trim())
    .find((line) => line && !/^[-*•]/.test(line));
  const baseTitle = heading || firstMeaningfulLine || "Maths Lesson";
  return baseTitle.replace(/\s+/g, " ").trim().slice(0, 72).toUpperCase();
}

function getStageContentArea(pageIndex = state.previewPageIndex, forceHasImages = null) {
  const metrics = getPresentationTemplateMetrics();
  const hasImages = forceHasImages === null
    ? Boolean(getVisibleSlideImages(pageIndex).length)
    : Boolean(forceHasImages);
  const leftInset = Number.isFinite(metrics.contentLeftInset) ? metrics.contentLeftInset : metrics.contentSideInset;
  const topInset = metrics.contentTopInset;
  const pinnedStripArea = hasImages ? getPinnedPdfImageStripArea() : null;
  const rightInset = hasImages && pinnedStripArea
    ? Math.max(Number.isFinite(metrics.contentRightInset) ? metrics.contentRightInset : metrics.contentSideInset, pinnedStripArea.width + STAGE_IMAGE_WORKSPACE_PADDING_PX + STAGE_PDF_IMAGE_STRIP_GAP_PX)
    : (Number.isFinite(metrics.contentRightInset) ? metrics.contentRightInset : metrics.contentSideInset);
  const bottomInset = metrics.contentBottomInset;

  return {
    x: leftInset,
    y: topInset,
    width: Math.max(360, canvas.width - leftInset - rightInset),
    height: Math.max(320, canvas.height - topInset - bottomInset)
  };
}

function getPaginatedSlideContent(textValue, usePlaceholder = true, pageIndex = state.previewPageIndex, forceHasImages = null) {
  const contentArea = getStageContentArea(pageIndex, forceHasImages);
  const lines = textValue ? buildDisplayedLines(textValue) : [];
  const layout = getContentLayout(lines, contentArea.width, contentArea.height, usePlaceholder, {
    hasImages: forceHasImages
  });
  let cumulativeTextLength = 0;
  const pages = paginateLayout(layout, contentArea.height).map((page) => {
    const pageText = (page.rows || [])
      .filter((row) => !row.spacer)
      .map((row) => (row.segments || []).map((segment) => segment.text).join(""))
      .join("\n");
    cumulativeTextLength += pageText.length;
    return {
      ...page,
      textEndIndex: cumulativeTextLength
    };
  });

  return {
    contentArea,
    layout,
    pages,
    pageCount: Math.max(1, pages.length)
  };
}

function getStableAnimatedPageIndex(fullContent, displayedText = "") {
  const pages = Array.isArray(fullContent?.pages) ? fullContent.pages : [];
  if (!pages.length) {
    return 0;
  }

  const visibleLength = Math.max(0, String(displayedText || "").length);
  const matchingIndex = pages.findIndex((page) => visibleLength <= Math.max(0, page?.textEndIndex || 0));
  if (matchingIndex >= 0) {
    return matchingIndex;
  }

  return Math.max(0, pages.length - 1);
}

function getContentScrollOffset(layout, viewportHeight) {
  const overflow = Math.max(0, layout.totalHeight - viewportHeight);
  if (!overflow) {
    state.contentScrollOffset = 0;
    return 0;
  }

  const isAnimatingContent = state.speaking || (state.displayedText && state.displayedText !== state.text);
  if (!isAnimatingContent || !state.text) {
    state.contentScrollOffset = 0;
    return 0;
  }

  const revealProgress = easeOutCubic(getDisplayedTextProgress());
  const followPadding = Math.max(12, Math.round(layout.rowHeight * 0.95));
  const targetOffset = Math.max(0, overflow + followPadding);
  const easedTarget = targetOffset * revealProgress;
  const smoothing = state.speaking ? 0.18 : 0.24;

  state.contentScrollOffset += (easedTarget - state.contentScrollOffset) * smoothing;
  return clamp(state.contentScrollOffset, 0, targetOffset);
}

function drawRoundedRect(x, y, width, height, radius, fillStyle) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
  ctx.fillStyle = fillStyle;
  ctx.fill();
}

function drawRoundedRectAtOrigin(x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function drawContentHighlightPanel(contentArea, options = {}) {
  return;
}

function drawClassicTeachingStageBackdrop() {
  const background = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  background.addColorStop(0, "#083843");
  background.addColorStop(0.52, "#0d5561");
  background.addColorStop(1, "#072f38");
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const centerGlow = ctx.createRadialGradient(
    canvas.width * 0.5,
    canvas.height * 0.44,
    40,
    canvas.width * 0.5,
    canvas.height * 0.44,
    canvas.width * 0.54
  );
  centerGlow.addColorStop(0, "rgba(64, 201, 218, 0.2)");
  centerGlow.addColorStop(0.45, "rgba(30, 149, 173, 0.12)");
  centerGlow.addColorStop(1, "rgba(5, 33, 41, 0)");
  ctx.fillStyle = centerGlow;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.lineWidth = 2;
  for (let index = 0; index < 7; index += 1) {
    ctx.beginPath();
    ctx.strokeStyle = `rgba(104, 223, 235, ${0.03 + (index * 0.01)})`;
    ctx.ellipse(
      canvas.width * 0.5,
      canvas.height * 0.48,
      220 + (index * 92),
      110 + (index * 54),
      -0.28,
      0,
      Math.PI * 2
    );
    ctx.stroke();
  }
  ctx.restore();
}

function drawLearningOutcomesBackdrop() {
  const boardGradient = ctx.createLinearGradient(0, 118, 0, canvas.height);
  boardGradient.addColorStop(0, "#c7e4ef");
  boardGradient.addColorStop(0.56, "#b7ddea");
  boardGradient.addColorStop(1, "#b0d7e4");
  ctx.fillStyle = boardGradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawHeaderBackdrop();

  ctx.save();
  ctx.globalAlpha = 0.12;
  for (let index = 0; index < 16; index += 1) {
    const y = 150 + (index * 34);
    ctx.fillStyle = index % 2 === 0 ? "rgba(255, 255, 255, 0.42)" : "rgba(98, 151, 175, 0.18)";
    ctx.fillRect(0, y, canvas.width, 2);
  }
  ctx.restore();
}

function drawTeachingStageBackdrop() {
  if (normalizePresentationTemplate(state.presentationTemplate) === PRESENTATION_TEMPLATE_OUTCOMES) {
    drawLearningOutcomesBackdrop();
    return;
  }

  drawClassicTeachingStageBackdrop();
}

function isUsingDefaultStageStyle(style) {
  return textStyleMatches(getResolvedTextStyle(style), getBaseTextStyle());
}

function getAnimatedTeachingTextColor(rowText, rowIndex, segmentIndex, characterIndex = 0) {
  return getBaseTextStyle().color || "#ffffff";
}

function drawAnimatedTeachingSegment(segment, x, y, rowText, rowIndex, segmentIndex, fontSize) {
  const text = segment.text || "";
  const usesDefaultStyle = isUsingDefaultStageStyle(segment.style);
  if (!usesDefaultStyle) {
    ctx.fillStyle = segment.style.color;
    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;
    ctx.fillText(text, x, y);
    return ctx.measureText(text).width;
  }

  let cursorX = x;

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    const characterWidth = ctx.measureText(character).width;
    ctx.fillStyle = getAnimatedTeachingTextColor(rowText, rowIndex, segmentIndex, index);
    ctx.shadowColor = "rgba(8, 30, 39, 0.24)";
    ctx.shadowBlur = 6;
    ctx.shadowOffsetY = 1;
    ctx.fillText(character, cursorX, y);

    cursorX += characterWidth;
  }

  ctx.shadowColor = "transparent";
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;
  return cursorX - x;
}

function drawSceneVfx() {
  if (normalizePresentationTemplate(state.presentationTemplate) === PRESENTATION_TEMPLATE_OUTCOMES) {
    return;
  }

  const palette = Array.isArray(state.scene.palette) && state.scene.palette.length >= 3
    ? state.scene.palette
    : ["#0e84ad", "#4eb6de", "#ffb548"];
  const vfx = state.scene.vfx || "sparkles";
  const rawTime = (state.activeAudio?.currentTime || performance.now() / 1000);
  const exportMotionScale = state.exportingVideo ? 0.45 : 1;
  const time = rawTime * exportMotionScale;
  const boardTop = 118;
  const boardHeight = canvas.height - boardTop;

  ctx.save();
  ctx.beginPath();
  ctx.rect(0, boardTop, canvas.width, boardHeight);
  ctx.clip();

  if (vfx === "bubbles") {
    const bubbleCount = state.exportingVideo ? 12 : 16;
    for (let index = 0; index < bubbleCount; index += 1) {
      const radius = 16 + (index % 4) * 10;
      const x = ((index * 93) + (time * 28) + 70) % (canvas.width + 120) - 60;
      const y = boardTop + (((index * 71) - (time * 24)) % (boardHeight + 160)) + 30;
      ctx.fillStyle = `rgba(255, 255, 255, ${0.06 + (index % 3) * 0.02})`;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (vfx === "waves") {
    for (let waveIndex = 0; waveIndex < 4; waveIndex += 1) {
      ctx.beginPath();
      ctx.lineWidth = 10 + (waveIndex * 2);
      ctx.strokeStyle = `rgba(255,255,255,${0.07 - waveIndex * 0.01})`;
      for (let x = -40; x <= canvas.width + 40; x += 12) {
        const waveAmplitude = state.exportingVideo ? 10 : 22;
        const y = boardTop + 120 + (waveIndex * 80) + Math.sin((x / 110) + time + waveIndex) * waveAmplitude;
        if (x === -40) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    }
  } else if (vfx === "rays") {
    for (let rayIndex = 0; rayIndex < 6; rayIndex += 1) {
      ctx.save();
      ctx.translate(canvas.width * 0.5, boardTop + 220);
      ctx.rotate((-0.8 + rayIndex * 0.28) + Math.sin(time * 0.22) * (state.exportingVideo ? 0.012 : 0.03));
      const gradient = ctx.createLinearGradient(0, -20, 0, 340);
      gradient.addColorStop(0, "rgba(255,255,255,0.18)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(-30, -20, 60, 340);
      ctx.restore();
    }
  } else if (vfx === "confetti") {
    const colors = [...palette, "#ffffff"];
    const confettiCount = state.exportingVideo ? 16 : 24;
    for (let index = 0; index < confettiCount; index += 1) {
      const x = ((index * 61) + time * 42) % (canvas.width + 60) - 30;
      const y = boardTop + ((index * 47) % (boardHeight - 40)) + 20;
      const size = 8 + (index % 3) * 3;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((index * 0.7) + time * 0.3);
      ctx.fillStyle = colors[index % colors.length];
      ctx.globalAlpha = 0.22;
      ctx.fillRect(-size * 0.5, -size * 0.5, size, size * 0.62);
      ctx.restore();
    }
  } else if (vfx === "grid") {
    ctx.strokeStyle = "rgba(255,255,255,0.08)";
    ctx.lineWidth = 1;
    for (let x = 24; x <= canvas.width; x += 46) {
      ctx.beginPath();
      ctx.moveTo(x, boardTop);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = boardTop + 12; y <= canvas.height; y += 42) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
  } else {
    const sparkleCount = state.exportingVideo ? 14 : 18;
    for (let index = 0; index < sparkleCount; index += 1) {
      const baseX = 56 + ((index * 173) % Math.max(120, canvas.width - 112));
      const baseY = boardTop + 28 + ((index * 131) % Math.max(120, boardHeight - 56));
      const x = state.exportingVideo ? baseX : ((index * 79) + time * 24) % canvas.width;
      const y = state.exportingVideo
        ? baseY + Math.sin((time * 0.9) + index) * 4
        : boardTop + ((index * 59) % boardHeight);
      const radius = 3 + (index % 4);
      const alpha = state.exportingVideo
        ? 0.08 + ((Math.sin((time * 1.2) + index) + 1) * 0.04)
        : (0.16 - (index % 3) * 0.02);
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillRect(x - 1, y - 10, 2, 20);
      ctx.fillRect(x - 10, y - 1, 20, 2);
    }
  }

  ctx.restore();
}

const PLACE_VALUE_BUILDER_MAX_DIGITS = 10;
const INDIAN_PLACE_VALUE_COLUMNS = [
  { group: "CRORES", label: "Hundred Crores", shortLabel: "HCr", value: 1000000000 },
  { group: "CRORES", label: "Ten Crores", shortLabel: "TCr", value: 100000000 },
  { group: "CRORES", label: "Crores", shortLabel: "Cr", value: 10000000 },
  { group: "LAKHS", label: "Ten Lakhs", shortLabel: "TL", value: 1000000 },
  { group: "LAKHS", label: "Lakhs", shortLabel: "L", value: 100000 },
  { group: "THOUSANDS", label: "Ten Thousands", shortLabel: "TTh", value: 10000 },
  { group: "THOUSANDS", label: "Thousands", shortLabel: "Th", value: 1000 },
  { group: "ONES", label: "Hundreds", shortLabel: "H", value: 100 },
  { group: "ONES", label: "Tens", shortLabel: "T", value: 10 },
  { group: "ONES", label: "Ones", shortLabel: "O", value: 1 }
];
const INTERNATIONAL_PLACE_VALUE_COLUMNS = [
  { group: "BILLIONS", label: "Billions", shortLabel: "B", value: 1000000000 },
  { group: "MILLIONS", label: "Hundred Millions", shortLabel: "HM", value: 100000000 },
  { group: "MILLIONS", label: "Ten Millions", shortLabel: "TM", value: 10000000 },
  { group: "MILLIONS", label: "Millions", shortLabel: "M", value: 1000000 },
  { group: "THOUSANDS", label: "Hundred Thousands", shortLabel: "HTh", value: 100000 },
  { group: "THOUSANDS", label: "Ten Thousands", shortLabel: "TTh", value: 10000 },
  { group: "THOUSANDS", label: "Thousands", shortLabel: "Th", value: 1000 },
  { group: "ONES", label: "Hundreds", shortLabel: "H", value: 100 },
  { group: "ONES", label: "Tens", shortLabel: "T", value: 10 },
  { group: "ONES", label: "Ones", shortLabel: "O", value: 1 }
];
const PLACE_VALUE_SYSTEMS = Object.freeze({
  indian: Object.freeze({
    key: "indian",
    label: "Indian",
    locale: "en-IN",
    columns: INDIAN_PLACE_VALUE_COLUMNS,
    toWords: convertIntegerToIndianWords
  }),
  international: Object.freeze({
    key: "international",
    label: "International",
    locale: "en-US",
    columns: INTERNATIONAL_PLACE_VALUE_COLUMNS,
    toWords: convertIntegerToInternationalWords
  })
});

function normalizePlaceValueSystem(value) {
  const safeValue = String(value || "").trim().toLowerCase();
  return safeValue.startsWith("inter") ? "international" : "indian";
}

function getPlaceValueSystemConfig(systemKey = "indian") {
  return PLACE_VALUE_SYSTEMS[normalizePlaceValueSystem(systemKey)] || PLACE_VALUE_SYSTEMS.indian;
}

function detectPlaceValueSystem(textValue = "") {
  const safeText = String(textValue || "");
  const explicitMatch = safeText.match(/(?:place\s+value\s+system|system)\s*:\s*(indian|international)/i);
  if (explicitMatch) {
    return normalizePlaceValueSystem(explicitMatch[1]);
  }

  if (/(international\s+place\s+value|million|billions?)/i.test(safeText) && !/(lakhs?|crores?)/i.test(safeText)) {
    return "international";
  }

  return "indian";
}

function sanitizePlaceValueNumber(value) {
  return String(value || "").replace(/[^\d]/g, "").slice(0, PLACE_VALUE_BUILDER_MAX_DIGITS);
}

function formatPlaceValueNumber(value, systemKey = "indian") {
  const config = getPlaceValueSystemConfig(systemKey);
  const rawValue = String(value ?? "").replace(/,/g, "").trim();
  if (!/^-?\d+$/.test(rawValue)) {
    return String(value ?? "");
  }

  const numericValue = Number(rawValue);
  if (!Number.isFinite(numericValue)) {
    return String(value ?? "");
  }

  return Math.trunc(numericValue).toLocaleString(config.locale);
}

function formatIndianNumber(value) {
  return formatPlaceValueNumber(value, "indian");
}

function toTitleCaseWords(text) {
  return String(text || "").replace(/\b([a-z])/g, (match) => match.toUpperCase());
}

function wrapCanvasText(text, maxWidth, font) {
  const safeText = String(text || "").replace(/\s+/g, " ").trim();
  if (!safeText) {
    return [];
  }

  const words = safeText.split(" ");
  const lines = [];
  ctx.save();
  ctx.font = font;
  let currentLine = "";

  words.forEach((word) => {
    const candidate = currentLine ? `${currentLine} ${word}` : word;
    if (!currentLine || ctx.measureText(candidate).width <= maxWidth) {
      currentLine = candidate;
      return;
    }

    lines.push(currentLine);
    currentLine = word;
  });

  if (currentLine) {
    lines.push(currentLine);
  }
  ctx.restore();
  return lines;
}

function drawRuntimeDisplayErrorOverlay() {
  const message = String(state.runtimeErrorMessage || "").trim();
  if (!message) {
    return;
  }

  const overlayWidth = Math.min(canvas.width - 120, 760);
  const titleFont = '800 14px "Nunito"';
  const bodyFont = '700 24px "Nunito"';
  const bodyLines = wrapCanvasText(message, overlayWidth - 48, bodyFont);
  const lineHeight = 30;
  const bodyHeight = Math.max(lineHeight, bodyLines.length * lineHeight);
  const overlayHeight = bodyHeight + 58;
  const x = Math.round((canvas.width - overlayWidth) / 2);
  const y = canvas.height - overlayHeight - 28;

  ctx.save();
  ctx.shadowColor = "rgba(31, 10, 14, 0.32)";
  ctx.shadowBlur = 18;
  ctx.shadowOffsetY = 10;
  drawRoundedRect(x, y, overlayWidth, overlayHeight, 24, "rgba(120, 24, 36, 0.94)");
  ctx.restore();

  ctx.save();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "rgba(255, 231, 235, 0.22)";
  drawRoundedRect(x, y, overlayWidth, overlayHeight, 24);
  ctx.stroke();
  ctx.fillStyle = "rgba(255, 238, 170, 0.94)";
  ctx.font = titleFont;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("DISPLAY ERROR", x + 24, y + 16);
  ctx.fillStyle = "#ffffff";
  ctx.font = bodyFont;
  bodyLines.forEach((line, index) => {
    ctx.fillText(line, x + 24, y + 36 + (index * lineHeight));
  });
  ctx.restore();
}

function buildExpandedFormText(value, systemKey = "indian") {
  const config = getPlaceValueSystemConfig(systemKey);
  const digitsOnly = String(value || "").replace(/,/g, "").trim();
  if (!/^\d+$/.test(digitsOnly) || digitsOnly.length > config.columns.length) {
    return "";
  }

  const paddedDigits = digitsOnly.padStart(config.columns.length, "0");
  const terms = config.columns
    .map((column, index) => Number(paddedDigits[index]) * column.value)
    .filter((amount) => amount > 0)
    .map((amount) => formatPlaceValueNumber(amount, config.key));

  return terms.join(" + ");
}

function resolvePlaceValueBoardStartIndex(columns, columnIndex) {
  const safeIndex = clamp(columnIndex, 0, Math.max(0, columns.length - 1));
  const groupLabel = columns[safeIndex]?.group;
  let startIndex = safeIndex;

  while (startIndex > 0 && columns[startIndex - 1]?.group === groupLabel) {
    startIndex -= 1;
  }

  return startIndex;
}

function buildPlaceValueGroups(columns) {
  const groups = [];
  columns.forEach((column, index) => {
    const lastGroup = groups[groups.length - 1];
    if (lastGroup && lastGroup.label === column.group) {
      lastGroup.endIndex = index;
      return;
    }

    groups.push({
      label: column.group,
      startIndex: index,
      endIndex: index
    });
  });
  return groups;
}

function extractLessonHeading(textValue = "") {
  const headingLine = String(textValue || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find((line) => /^#+\s+/.test(line));
  return headingLine ? headingLine.replace(/^#+\s+/, "").trim() : "";
}

function getMathPlaceValueBoardData(textValue) {
  const safeText = String(textValue || "").replace(/\u00a0/g, " ").trim();
  if (!safeText) {
    return null;
  }

  const hasPlaceValueKeywords = /(expanded\s+form|standard\s+form|place\s+value)/i.test(safeText);
  if (!hasPlaceValueKeywords) {
    return null;
  }

  const systemConfig = getPlaceValueSystemConfig(detectPlaceValueSystem(safeText));
  const minDigits = 1;
  const numberMatches = Array.from(safeText.matchAll(/\b\d[\d,]*\b/g))
    .map((match) => match[0])
    .map((value) => String(value || "").replace(/,/g, ""))
    .filter((value) => value.length >= minDigits && value.length <= PLACE_VALUE_BUILDER_MAX_DIGITS);

  if (!numberMatches.length) {
    return null;
  }

  const chosenNumber = numberMatches.sort((left, right) => right.replace(/,/g, "").length - left.replace(/,/g, "").length)[0];
  const digitsOnly = String(chosenNumber || "").replace(/,/g, "");
  if (!new RegExp(`^\\d{${minDigits},${PLACE_VALUE_BUILDER_MAX_DIGITS}}$`).test(digitsOnly)) {
    return null;
  }

  const paddedDigits = digitsOnly.padStart(systemConfig.columns.length, "0");
  const digits = paddedDigits.split("").map((digit) => Number(digit));
  const firstNonZeroIndex = digits.findIndex((digit) => digit !== 0);
  const startIndex = resolvePlaceValueBoardStartIndex(
    systemConfig.columns,
    firstNonZeroIndex === -1 ? digits.length - 1 : firstNonZeroIndex
  );
  const columns = systemConfig.columns.slice(startIndex).map((column, index) => ({
    ...column,
    digit: digits[startIndex + index]
  }));
  const groups = buildPlaceValueGroups(columns);
  const fallbackTitle = /expanded\s+form/i.test(safeText) && /standard\s+form/i.test(safeText)
    ? `${systemConfig.label} Expanded Form and Standard Form`
    : (/expanded\s+form/i.test(safeText)
      ? `${systemConfig.label} Expanded Form`
      : (/standard\s+form/i.test(safeText)
        ? `${systemConfig.label} Standard Form`
        : `${systemConfig.label} Place Value Chart`));
  const title = extractLessonHeading(safeText) || fallbackTitle;

  return {
    title,
    formattedNumber: formatPlaceValueNumber(digitsOnly, systemConfig.key),
    numberWords: toTitleCaseWords(systemConfig.toWords(digitsOnly)),
    expandedForm: buildExpandedFormText(digitsOnly, systemConfig.key),
    columns,
    groups
  };
}

function buildPlaceValuePresentationLines(rawNumber, systemKey = "indian") {
  const digitsOnly = sanitizePlaceValueNumber(rawNumber);
  if (!digitsOnly) {
    return [];
  }

  const systemConfig = getPlaceValueSystemConfig(systemKey);
  const paddedDigits = digitsOnly.padStart(systemConfig.columns.length, "0");
  const digits = paddedDigits.split("").map((digit) => Number(digit));
  const firstNonZeroIndex = digits.findIndex((digit) => digit !== 0);
  const startIndex = resolvePlaceValueBoardStartIndex(
    systemConfig.columns,
    firstNonZeroIndex === -1 ? digits.length - 1 : firstNonZeroIndex
  );
  const visibleColumns = systemConfig.columns.slice(startIndex).map((column, index) => ({
    ...column,
    digit: digits[startIndex + index]
  }));

  const lines = [
    `# ${systemConfig.label} Place Value Chart: ${formatPlaceValueNumber(digitsOnly, systemConfig.key)}`,
    `Place Value System: ${systemConfig.label}`,
    `Number: ${formatPlaceValueNumber(digitsOnly, systemConfig.key)}`,
    `Standard Form: ${formatPlaceValueNumber(digitsOnly, systemConfig.key)}`,
    `Expanded Form: ${buildExpandedFormText(digitsOnly, systemConfig.key) || formatPlaceValueNumber(digitsOnly, systemConfig.key)}`,
    `Number Name: ${toTitleCaseWords(systemConfig.toWords(digitsOnly))}`,
    "",
    "# Place Values"
  ];

  visibleColumns.forEach((column) => {
    lines.push(`${column.label} (${column.shortLabel}) = ${column.digit}`);
  });

  return lines;
}

function buildPlaceValueChartLessonText(rawNumber, systemKey = "indian") {
  const lines = buildPlaceValuePresentationLines(rawNumber, systemKey);
  if (!lines.length) {
    return "";
  }

  return lines.join("\n");
}

async function applyPlaceValueTableBuilder(options = {}) {
  const digitsOnly = sanitizePlaceValueNumber(placeValueNumberInput?.value || "");
  const systemKey = getPlaceValueSystemConfig(placeValueSystemSelect?.value || "indian").key;
  const showScreenAfter = Boolean(options.showScreenAfter);

  if (!digitsOnly) {
    setPlaceValueToolStatus("Enter a number first. You can use up to 10 digits.");
    if (placeValueNumberInput) {
      placeValueNumberInput.focus();
    }
    return;
  }

  const lessonText = buildPlaceValueChartLessonText(digitsOnly, systemKey);
  if (!lessonText) {
    setPlaceValueToolStatus("The place value table could not be created from that number.");
    return;
  }

  if (placeValueNumberInput) {
    placeValueNumberInput.value = formatPlaceValueNumber(digitsOnly, systemKey);
  }

  if (state.mathsTranslator.timerId) {
    window.clearTimeout(state.mathsTranslator.timerId);
    state.mathsTranslator.timerId = 0;
  }
  if (state.mathsTranslator.previewTimerId) {
    window.clearTimeout(state.mathsTranslator.previewTimerId);
    state.mathsTranslator.previewTimerId = 0;
  }
  if (mathsSourceInput) {
    mathsSourceInput.value = "";
  }
  state.mathsTranslator.lastSource = "";
  state.mathsTranslator.lastTranslated = "";
  setMathsTranslateLoading(false, "Translation complete.");
  updateMathsTranslationPreview("");

  lessonInput.value = lessonText;
  handleLessonInputChange();
  setPlaceValueToolStatus(`Ready: ${getPlaceValueSystemConfig(systemKey).label} table created for ${formatPlaceValueNumber(digitsOnly, systemKey)}.`);
  setMathsTranslatorStatus("Place value table loaded directly into the lesson box. The maths translator source was cleared so this table stays active.");
  setStatus(showScreenAfter
    ? "Place value table created and opened on the screen."
    : "Place value table created in the lesson box. Click Show Screen when you are ready.");

  if (showScreenAfter) {
    await showScreen();
  }
}

function drawPlaceValueSummaryCard(x, y, width, height, label, value, accentColor) {
  ctx.save();
  ctx.shadowColor = "rgba(5, 24, 31, 0.2)";
  ctx.shadowBlur = 14;
  ctx.shadowOffsetY = 8;
  drawRoundedRect(x, y, width, height, 24, "rgba(7, 48, 58, 0.56)");
  ctx.restore();

  ctx.save();
  ctx.strokeStyle = "rgba(255,255,255,0.12)";
  ctx.lineWidth = 2;
  drawRoundedRectAtOrigin(x, y, width, height, 24);
  ctx.stroke();

  ctx.fillStyle = accentColor;
  ctx.font = '800 16px "Nunito"';
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText(label.toUpperCase(), x + 18, y + 14);

  const valueFont = '800 22px "Nunito"';
  const lines = wrapCanvasText(value, width - 36, valueFont).slice(0, 3);
  ctx.fillStyle = "#ffffff";
  ctx.font = valueFont;
  lines.forEach((line, lineIndex) => {
    ctx.fillText(line, x + 18, y + 38 + (lineIndex * 26));
  });
  ctx.restore();
}

function drawMathPlaceValueBoard(contentArea, boardData, currentPageIndex = 0, totalPageCount = 1) {
  const panelX = contentArea.x + 6;
  const panelY = contentArea.y + 8;
  const panelWidth = contentArea.width - 12;
  const panelHeight = contentArea.height - 16;
  const topCardsY = panelY + 14;
  const topCardsHeight = 88;
  const numberCardWidth = Math.min(340, Math.max(220, panelWidth * 0.34));
  const chartCardWidth = panelWidth - numberCardWidth - 28;
  const gridTop = panelY + 118;
  const groupHeaderHeight = 52;
  const placeHeaderHeight = 92;
  const digitRowHeight = 82;
  const gridHeight = groupHeaderHeight + placeHeaderHeight + digitRowHeight;
  const gridX = panelX + 10;
  const gridWidth = panelWidth - 20;
  const columnWidth = gridWidth / Math.max(1, boardData.columns.length);
  const footerY = gridTop + gridHeight + 28;
  const footerGap = 16;
  const footerWidth = (panelWidth - footerGap) / 2;
  const digitColors = ["#ff69c7", "#f6973f", "#70f1ff", "#f36f92", "#b884ff", "#ffd05a"];

  ctx.save();
  ctx.fillStyle = "rgba(255,255,255,0.04)";
  ctx.fillRect(panelX, panelY, panelWidth, panelHeight);
  ctx.restore();

  drawPlaceValueSummaryCard(
    panelX + 8,
    topCardsY,
    numberCardWidth,
    topCardsHeight,
    "Number",
    boardData.formattedNumber,
    "#ff7b72"
  );
  drawPlaceValueSummaryCard(
    panelX + numberCardWidth + 20,
    topCardsY,
    chartCardWidth,
    topCardsHeight,
    "Chart",
    boardData.title,
    "#ffd167"
  );

  ctx.save();

  ctx.strokeStyle = "rgba(255,255,255,0.92)";
  ctx.lineWidth = 3;
  ctx.strokeRect(gridX, gridTop, gridWidth, gridHeight);

  ctx.beginPath();
  ctx.moveTo(gridX, gridTop + groupHeaderHeight);
  ctx.lineTo(gridX + gridWidth, gridTop + groupHeaderHeight);
  ctx.moveTo(gridX, gridTop + groupHeaderHeight + placeHeaderHeight);
  ctx.lineTo(gridX + gridWidth, gridTop + groupHeaderHeight + placeHeaderHeight);
  ctx.stroke();

  boardData.groups.forEach((group) => {
    const groupX = gridX + (group.startIndex * columnWidth);
    const groupWidth = (group.endIndex - group.startIndex + 1) * columnWidth;
    ctx.beginPath();
    ctx.moveTo(groupX, gridTop);
    ctx.lineTo(groupX, gridTop + gridHeight);
    ctx.stroke();

    ctx.fillStyle = "#ff9b42";
    ctx.font = '800 20px "Nunito"';
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(group.label, groupX + (groupWidth / 2), gridTop + (groupHeaderHeight / 2) + 1);
  });

  ctx.beginPath();
  ctx.moveTo(gridX + gridWidth, gridTop);
  ctx.lineTo(gridX + gridWidth, gridTop + gridHeight);
  ctx.stroke();

  boardData.columns.forEach((column, index) => {
    const cellX = gridX + (index * columnWidth);
    const dividerX = cellX + columnWidth;
    if (index < boardData.columns.length - 1) {
      ctx.beginPath();
      ctx.moveTo(dividerX, gridTop + groupHeaderHeight);
      ctx.lineTo(dividerX, gridTop + gridHeight);
      ctx.stroke();
    }

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "rgba(255,255,255,0.98)";
    ctx.font = '800 17px "Nunito"';
    const labelLines = wrapCanvasText(column.label, columnWidth - 18, '800 17px "Nunito"').slice(0, 2);
    labelLines.forEach((line, lineIndex) => {
      ctx.fillText(
        line,
        cellX + (columnWidth / 2),
        gridTop + groupHeaderHeight + 22 + (lineIndex * 22)
      );
    });

    ctx.fillStyle = "#b8f36b";
    ctx.font = '800 17px "Nunito"';
    ctx.fillText(
      `(${column.shortLabel})`,
      cellX + (columnWidth / 2),
      gridTop + groupHeaderHeight + placeHeaderHeight - 22
    );

    ctx.save();
    ctx.shadowColor = "rgba(255, 105, 199, 0.28)";
    ctx.shadowBlur = 18;
    ctx.fillStyle = digitColors[index % digitColors.length];
    ctx.font = '900 30px "Nunito"';
    ctx.fillText(String(column.digit), cellX + (columnWidth / 2), gridTop + groupHeaderHeight + placeHeaderHeight + (digitRowHeight / 2) + 2);
    ctx.restore();
  });

  drawPlaceValueSummaryCard(
    panelX + 4,
    footerY,
    footerWidth,
    106,
    "Standard Form",
    boardData.formattedNumber,
    "#7cf1ff"
  );
  drawPlaceValueSummaryCard(
    panelX + footerWidth + footerGap,
    footerY,
    footerWidth,
    106,
    "Number Name",
    boardData.numberWords,
    "#ffd167"
  );
  drawPlaceValueSummaryCard(
    panelX + 4,
    footerY + 122,
    panelWidth - 8,
    112,
    "Expanded Form",
    boardData.expandedForm || boardData.formattedNumber,
    "#ff8c66"
  );

  if (totalPageCount > 1) {
    ctx.fillStyle = "rgba(255,255,255,0.86)";
    ctx.font = '700 14px "Nunito"';
    ctx.textAlign = "right";
    ctx.textBaseline = "bottom";
    ctx.fillText(`Page ${currentPageIndex + 1} / ${totalPageCount}`, panelX + panelWidth - 4, panelY + panelHeight - 4);
  }

  ctx.restore();
}

function getImagePageIndexForItem(item, fallbackIndex = 0) {
  if (Number.isInteger(item?.pageIndex) && item.pageIndex >= 0) {
    return item.pageIndex;
  }

  return Math.floor(Math.max(0, fallbackIndex) / SLIDE_IMAGES_PER_PAGE);
}

function getImageLayerOrder(item, fallbackIndex = 0) {
  return Number.isFinite(item?.zIndex) ? Number(item.zIndex) : fallbackIndex;
}

function getNextImageLayerOrder(images = state.images) {
  return images.reduce((highestLayer, item, index) => {
    return Math.max(highestLayer, getImageLayerOrder(item, index));
  }, -1) + 1;
}

function getImageEntriesForPage(pageIndex = 0, images = state.images) {
  return images
    .map((item, index) => ({ item, index }))
    .filter(({ item, index }) => (
      getImagePageIndexForItem(item, index) === pageIndex
      && shouldRenderStageImage(item)
    ))
    .sort((left, right) => {
      const layerDifference = getImageLayerOrder(left.item, left.index) - getImageLayerOrder(right.item, right.index);
      return layerDifference || (left.index - right.index);
    });
}

function isAutoPdfExampleImage(item) {
  return item?.sourceTag === "pdf-auto";
}

function isAutoPdfLessonImage(item) {
  return item?.sourceTag === "pdf-lesson-auto";
}

function isManagedAutoPdfImage(item) {
  return isAutoPdfExampleImage(item) || isAutoPdfLessonImage(item);
}

function shouldRenderStageImage(item) {
  if (isAutoPdfLessonImage(item)) {
    return !isPdfPresentationMode();
  }

  return true;
}

function isPinnedPdfExampleImage(item) {
  return item?.sourceTag === "pdf-clipboard" || isAutoPdfExampleImage(item);
}

function getVisibleSlideImages(pageIndex = 0) {
  return getImageEntriesForPage(pageIndex).map(({ item }) => item);
}

function getStageHasVisibleImagesForPage(pageIndex = state.previewPageIndex) {
  return Boolean(getVisibleSlideImages(pageIndex).length);
}

function getDefaultSlideImagePanelArea() {
  const metrics = getPresentationTemplateMetrics();
  return {
    x: STAGE_IMAGE_WORKSPACE_PADDING_PX,
    y: metrics.imagePanelTopInset,
    width: Math.max(240, canvas.width - (STAGE_IMAGE_WORKSPACE_PADDING_PX * 2)),
    height: Math.max(220, canvas.height - metrics.imagePanelTopInset - metrics.imagePanelBottomInset),
    padding: 0,
    gap: 0,
    titleHeight: 0
  };
}

function getPinnedPdfImageStripArea() {
  const metrics = getPresentationTemplateMetrics();
  const width = Math.min(STAGE_PDF_IMAGE_STRIP_WIDTH_PX, Math.max(220, canvas.width * 0.3));
  return {
    x: Math.max(STAGE_IMAGE_WORKSPACE_PADDING_PX, canvas.width - width - STAGE_IMAGE_WORKSPACE_PADDING_PX),
    y: metrics.pdfStripTopInset,
    width,
    height: Math.max(220, canvas.height - metrics.pdfStripTopInset - metrics.contentBottomInset)
  };
}

function getSlideImagePanelArea(pageIndex = state.previewPageIndex) {
  if (!state.images.length || state.exportFallbackMode) {
    return null;
  }

  if (!getVisibleSlideImages(pageIndex).length) {
    return null;
  }

  return getDefaultSlideImagePanelArea();
}

function getImagePageCount() {
  if (!state.images.length) {
    return 1;
  }

  const highestPageIndex = state.images.reduce((bestIndex, item, index) => {
    return Math.max(bestIndex, getImagePageIndexForItem(item, index));
  }, 0);

  return Math.max(1, highestPageIndex + 1);
}

function getSlideImageWorkspace(pageIndex = state.previewPageIndex, allowEmptyPage = false) {
  const panel = allowEmptyPage ? getDefaultSlideImagePanelArea() : getSlideImagePanelArea(pageIndex);
  if (!panel) {
    return null;
  }

  return {
    x: panel.x,
    y: panel.y,
    width: panel.width,
    height: panel.height
  };
}

function normalizeImageFrame(item, fallbackIndex = 0) {
  const aspectRatio = item.aspectRatio || (item.image?.width && item.image?.height
    ? item.image.width / item.image.height
    : 4 / 3);
  const freeResize = Boolean(item.freeResize);
  const width = Math.max(STAGE_IMAGE_MIN_WIDTH_PX, Number.isFinite(item.width) ? item.width : 120);
  const height = freeResize
    ? Math.max(STAGE_IMAGE_MIN_HEIGHT_PX, Number.isFinite(item.height) ? item.height : (width / aspectRatio))
    : (width / aspectRatio);

  return {
    ...item,
    pageIndex: getImagePageIndexForItem(item, fallbackIndex),
    aspectRatio,
    zIndex: getImageLayerOrder(item, fallbackIndex),
    x: Number.isFinite(item.x) ? item.x : 0,
    y: Number.isFinite(item.y) ? item.y : 0,
    width,
    height,
    freeResize
  };
}

function hasExplicitImageFrame(item) {
  return Number.isFinite(item?.x)
    && Number.isFinite(item?.y)
    && Number.isFinite(item?.width)
    && Number.isFinite(item?.height);
}

function rectanglesOverlap(left, right, margin = 12) {
  return !(
    left.x + left.width + margin <= right.x
    || right.x + right.width + margin <= left.x
    || left.y + left.height + margin <= right.y
    || right.y + right.height + margin <= left.y
  );
}

function getDefaultImageSizeForWorkspace(workspace, aspectRatio, pageCount) {
  const baseWidth = pageCount <= 1
    ? workspace.width * 0.26
    : pageCount === 2
      ? workspace.width * 0.21
      : workspace.width * 0.18;
  const width = clamp(baseWidth, 140, 320);
  const maxWidth = Math.min(workspace.width - 24, workspace.height * aspectRatio);
  const safeWidth = clamp(width, 120, Math.max(120, maxWidth));

  return {
    width: safeWidth,
    height: safeWidth / aspectRatio
  };
}

function findOpenImagePosition(workspace, frame, occupiedFrames) {
  const safeFrame = {
    ...frame,
    x: clamp(frame.x, workspace.x, workspace.x + workspace.width - frame.width),
    y: clamp(frame.y, workspace.y, workspace.y + workspace.height - frame.height)
  };

  if (!occupiedFrames.some((occupied) => rectanglesOverlap(safeFrame, occupied))) {
    return safeFrame;
  }

  const maxX = Math.max(workspace.x, workspace.x + workspace.width - frame.width);
  const maxY = Math.max(workspace.y, workspace.y + workspace.height - frame.height);
  const xCandidates = [];
  const yCandidates = [];

  for (let x = maxX; x >= workspace.x; x -= 42) {
    xCandidates.push(x);
  }
  if (xCandidates[xCandidates.length - 1] !== workspace.x) {
    xCandidates.push(workspace.x);
  }

  for (let y = workspace.y; y <= maxY; y += 42) {
    yCandidates.push(y);
  }
  if (yCandidates[yCandidates.length - 1] !== maxY) {
    yCandidates.push(maxY);
  }

  for (const y of yCandidates) {
    for (const x of xCandidates) {
      const candidate = { ...frame, x, y };
      if (!occupiedFrames.some((occupied) => rectanglesOverlap(candidate, occupied))) {
        return candidate;
      }
    }
  }

  return safeFrame;
}

function applyDefaultImageLayouts(images) {
  if (!images.length) {
    return images.map((item, index) => normalizeImageFrame(item, index));
  }

  const positionedImages = new Array(images.length);
  const pageBuckets = new Map();

  images.forEach((item, index) => {
    const normalized = normalizeImageFrame(item, index);
    const pageIndex = getImagePageIndexForItem(normalized, index);

    if (!pageBuckets.has(pageIndex)) {
      pageBuckets.set(pageIndex, []);
    }

    pageBuckets.get(pageIndex).push({ original: item, normalized, index });
  });

  pageBuckets.forEach((entries, pageIndex) => {
    const workspace = getSlideImageWorkspace(pageIndex, true);
    if (!workspace) {
      entries.forEach((entry) => {
        positionedImages[entry.index] = entry.normalized;
      });
      return;
    }

    const preservedEntries = entries.filter(({ original }) => hasExplicitImageFrame(original));
    const newEntries = entries.filter(({ original }) => !hasExplicitImageFrame(original));
    const pinnedStripArea = getPinnedPdfImageStripArea();
    const pinnedEntries = newEntries.filter(({ normalized }) => isPinnedPdfExampleImage(normalized));
    const regularEntries = newEntries.filter(({ normalized }) => !isPinnedPdfExampleImage(normalized));
    const occupiedFrames = [];

    preservedEntries.forEach((entry) => {
      const clamped = clampImageFrame(entry.normalized, entry.index);
      positionedImages[entry.index] = clamped;
      occupiedFrames.push(clamped);
    });

    pinnedEntries.forEach((entry, pinnedIndex) => {
      const maxWidth = Math.min(
        pinnedStripArea.width,
        workspace.width,
        Math.max(STAGE_IMAGE_MIN_WIDTH_PX, pinnedStripArea.width - 8)
      );
      const preferredWidth = clamp(maxWidth, 232, Math.max(232, pinnedStripArea.width));
      const preferredHeight = entry.normalized.aspectRatio > 0
        ? Math.max(STAGE_IMAGE_MIN_HEIGHT_PX, preferredWidth / entry.normalized.aspectRatio)
        : preferredWidth;
      const maxHeight = Math.max(STAGE_IMAGE_MIN_HEIGHT_PX, (pinnedStripArea.height - ((Math.max(0, pinnedEntries.length - 1)) * 18)) / Math.max(1, pinnedEntries.length));
      const finalHeight = Math.min(preferredHeight, maxHeight);
      const finalWidth = entry.normalized.aspectRatio > 0
        ? Math.min(preferredWidth, finalHeight * entry.normalized.aspectRatio)
        : preferredWidth;
      const x = pinnedStripArea.x + Math.max(0, (pinnedStripArea.width - finalWidth));
      const y = pinnedStripArea.y + (pinnedIndex * (finalHeight + 18));
      const placed = clampImageFrame({
        ...entry.normalized,
        width: finalWidth,
        height: finalHeight,
        x,
        y
      }, entry.index);

      positionedImages[entry.index] = placed;
      occupiedFrames.push(placed);
    });

    regularEntries.forEach((entry) => {
      const size = getDefaultImageSizeForWorkspace(workspace, entry.normalized.aspectRatio, entries.length);
      const preferredStart = {
        ...entry.normalized,
        width: size.width,
        height: size.height,
        x: workspace.x + Math.max(18, Math.min(workspace.width - size.width - 18, (workspace.width * 0.58) + ((occupiedFrames.length % 3) * 34))),
        y: Math.max(workspace.y + 8, workspace.y + 8 + ((occupiedFrames.length % 4) * 34))
      };
      const placed = clampImageFrame(
        findOpenImagePosition(workspace, preferredStart, occupiedFrames),
        entry.index
      );

      positionedImages[entry.index] = placed;
      occupiedFrames.push(placed);
    });
  });

  return positionedImages;
}

function clampImageFrame(item, fallbackIndex = 0, options = {}) {
  const normalized = normalizeImageFrame(item, fallbackIndex);
  const workspace = getSlideImageWorkspace(normalized.pageIndex, true);
  if (!workspace) {
    return normalized;
  }

  const freeResize = options.freeResize === true || normalized.freeResize;
  const minWidth = STAGE_IMAGE_MIN_WIDTH_PX;
  const minHeight = STAGE_IMAGE_MIN_HEIGHT_PX;

  let width = normalized.width;
  let height = normalized.height;

  if (freeResize) {
    width = clamp(width, minWidth, Math.max(minWidth, workspace.width));
    height = clamp(height, minHeight, Math.max(minHeight, workspace.height));
  } else {
    const maxWidth = Math.max(minWidth, Math.min(workspace.width, workspace.height * normalized.aspectRatio));
    width = clamp(width, minWidth, maxWidth);
    height = width / normalized.aspectRatio;
  }

  const maxX = workspace.x + workspace.width - width;
  const maxY = workspace.y + workspace.height - height;

  return {
    ...normalized,
    freeResize,
    width,
    height,
    x: clamp(normalized.x, workspace.x, Math.max(workspace.x, maxX)),
    y: clamp(normalized.y, workspace.y, Math.max(workspace.y, maxY))
  };
}

function syncImageLayouts() {
  state.images = state.images.map((item, index) => clampImageFrame(item, index));
}

function bringImageToFront(index) {
  if (index < 0 || index >= state.images.length) {
    return -1;
  }

  state.images[index] = {
    ...state.images[index],
    zIndex: getNextImageLayerOrder()
  };
  return index;
}

function getImageResizeHandles(box) {
  // Corner handles keep resize hit-testing predictable across zoomed stage previews.
  const handleSize = STAGE_IMAGE_HANDLE_SIZE_PX;
  const halfHandle = handleSize / 2;
  return [
    { name: "nw", x: box.x - halfHandle, y: box.y - halfHandle, size: handleSize },
    { name: "ne", x: box.x + box.width - halfHandle, y: box.y - halfHandle, size: handleSize },
    { name: "sw", x: box.x - halfHandle, y: box.y + box.height - halfHandle, size: handleSize },
    { name: "se", x: box.x + box.width - halfHandle, y: box.y + box.height - halfHandle, size: handleSize }
  ];
}

function getResizeCursorForHandle(handleName = "") {
  return /^(nw|se)$/i.test(handleName) ? "nwse-resize" : "nesw-resize";
}

function drawHeaderBackdrop() {
  drawRoundedRect(0, 0, canvas.width, 118, 0, "#fefefe");

  const shadowGradient = ctx.createLinearGradient(0, 112, 0, 126);
  shadowGradient.addColorStop(0, "rgba(0, 0, 0, 0.22)");
  shadowGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = shadowGradient;
  ctx.fillRect(0, 112, canvas.width, 18);

  ctx.fillStyle = "rgba(114, 159, 188, 0.16)";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(135, 0);
  ctx.lineTo(50, 118);
  ctx.lineTo(0, 118);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "rgba(72, 122, 160, 0.18)";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(92, 0);
  ctx.lineTo(22, 118);
  ctx.lineTo(0, 118);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "rgba(53, 93, 127, 0.15)";
  ctx.beginPath();
  ctx.moveTo(0, 18);
  ctx.lineTo(72, 0);
  ctx.lineTo(8, 118);
  ctx.lineTo(0, 118);
  ctx.closePath();
  ctx.fill();
}

function getLogoDrawRect() {
  const headerY = 18;
  const headerHeight = 94;
  const rightInset = 6;

  const canUseImageLogo = stageLogoImage
    && stageLogoImage.complete
    && stageLogoImage.naturalWidth
    && isSafeImageSource(stageLogoImage.currentSrc || stageLogoImage.src);

  if (!canUseImageLogo) {
    return {
      x: canvas.width - 332,
      y: headerY + 14,
      width: 308,
      height: headerHeight - 14
    };
  }

  const sourceWidth = LOGO_SOURCE_BOUNDS.width;
  const sourceHeight = LOGO_SOURCE_BOUNDS.height;
  const scale = (headerHeight - 8) / sourceHeight;
  const displayWidth = (sourceWidth * scale) * LOGO_WIDTH_COMPRESSION;
  const displayHeight = sourceHeight * scale;

  return {
    x: canvas.width - displayWidth - rightInset,
    y: headerY + (headerHeight - displayHeight) / 2,
    width: displayWidth,
    height: displayHeight
  };
}

function drawInfoKidsLogo() {
  if (normalizePresentationTemplate(state.presentationTemplate) !== PRESENTATION_TEMPLATE_OUTCOMES) {
    return;
  }

  const titleLines = wrapCanvasText(
    getPresentationHeaderTitle(),
    canvas.width - 140,
    '900 66px "League Spartan"'
  ).slice(0, 2);
  const titleFontSize = titleLines.length > 1 ? 54 : 66;
  const titleLineHeight = titleLines.length > 1 ? 48 : 56;
  const titleBlockHeight = titleLines.length * titleLineHeight;
  const titleY = 36 + Math.max(0, (80 - titleBlockHeight) / 2);

  ctx.save();
  ctx.fillStyle = "#050709";
  ctx.font = `900 ${titleFontSize}px "League Spartan"`;
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  titleLines.forEach((line, index) => {
    ctx.fillText(line, canvas.width / 2, titleY + (index * titleLineHeight));
  });
  ctx.restore();
}

function drawPresenterFigure() {
  ctx.save();
  ctx.translate(118, 560);
  ctx.scale(0.92, 0.92);

  const sariGradient = ctx.createLinearGradient(-90, -150, 80, 240);
  sariGradient.addColorStop(0, "#ff8459");
  sariGradient.addColorStop(0.5, "#e5401d");
  sariGradient.addColorStop(1, "#a60e05");

  const goldGradient = ctx.createLinearGradient(-40, -120, 90, 210);
  goldGradient.addColorStop(0, "#ffd27a");
  goldGradient.addColorStop(1, "#c88732");

  ctx.fillStyle = "rgba(0, 0, 0, 0.18)";
  ctx.beginPath();
  ctx.ellipse(-16, 250, 94, 16, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "#dba463";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(126, -88);
  ctx.lineTo(316, -252);
  ctx.stroke();

  ctx.fillStyle = "#e7ad83";
  ctx.beginPath();
  ctx.moveTo(20, -84);
  ctx.quadraticCurveTo(86, -76, 138, -18);
  ctx.quadraticCurveTo(120, -2, 106, -11);
  ctx.quadraticCurveTo(70, -42, 36, -44);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#d69772";
  ctx.beginPath();
  ctx.ellipse(118, -16, 17, 12, 0.4, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#e7ad83";
  ctx.beginPath();
  ctx.ellipse(-70, 70, 18, 56, -0.06, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = sariGradient;
  ctx.beginPath();
  ctx.moveTo(-64, -104);
  ctx.quadraticCurveTo(28, -170, 96, -94);
  ctx.lineTo(108, 208);
  ctx.quadraticCurveTo(30, 238, -74, 226);
  ctx.quadraticCurveTo(-106, 84, -96, -36);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#f4bf8f";
  drawRoundedRectAtOrigin(-22, -158, 32, 32, 10);
  ctx.fill();

  ctx.fillStyle = "#f4bf8f";
  ctx.beginPath();
  ctx.ellipse(-4, -212, 58, 70, 0.05, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#231f2c";
  ctx.beginPath();
  ctx.moveTo(-60, -232);
  ctx.quadraticCurveTo(-34, -300, 32, -274);
  ctx.quadraticCurveTo(72, -258, 58, -192);
  ctx.quadraticCurveTo(30, -230, -14, -226);
  ctx.quadraticCurveTo(-38, -224, -60, -232);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.ellipse(-45, -170, 28, 34, -0.2, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.ellipse(-62, -144, 18, 22, 0.1, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#f4bf8f";
  ctx.beginPath();
  ctx.ellipse(-60, -188, 10, 14, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "#1f2230";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(-26, -214);
  ctx.quadraticCurveTo(-9, -221, 12, -214);
  ctx.moveTo(-23, -196);
  ctx.quadraticCurveTo(-11, -188, 2, -191);
  ctx.stroke();

  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.ellipse(-22, -206, 11, 14, 0, 0, Math.PI * 2);
  ctx.ellipse(10, -204, 11, 14, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#2b2a35";
  ctx.beginPath();
  ctx.arc(-20, -204, 5, 0, Math.PI * 2);
  ctx.arc(10, -202, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#7e281b";
  ctx.beginPath();
  ctx.arc(-4, -231, 3, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "#d38f69";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(-4, -188);
  ctx.lineTo(-8, -162);
  ctx.stroke();

  ctx.strokeStyle = "#8d3a33";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(-18, -148);
  ctx.quadraticCurveTo(-2, -136, 16, -146);
  ctx.stroke();

  ctx.fillStyle = "#f1c785";
  ctx.beginPath();
  ctx.ellipse(-56, -178, 5, 10, 0, 0, Math.PI * 2);
  ctx.ellipse(28, -176, 5, 10, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = goldGradient;
  ctx.beginPath();
  ctx.moveTo(-86, -106);
  ctx.quadraticCurveTo(-16, -170, 76, -112);
  ctx.lineTo(66, -78);
  ctx.quadraticCurveTo(-8, -132, -80, -76);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(-52, -98);
  ctx.quadraticCurveTo(14, -48, 26, 218);
  ctx.lineTo(-4, 218);
  ctx.quadraticCurveTo(-22, -8, -72, -62);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = "rgba(255, 207, 122, 0.55)";
  ctx.lineWidth = 3;
  for (let pleatIndex = 0; pleatIndex < 8; pleatIndex += 1) {
    const pleatX = -12 + pleatIndex * 10;
    ctx.beginPath();
    ctx.moveTo(pleatX, -20);
    ctx.quadraticCurveTo(pleatX - 6, 90, pleatX - 2, 214);
    ctx.stroke();
  }

  ctx.fillStyle = goldGradient;
  drawRoundedRectAtOrigin(-100, -46, 26, 92, 12);
  ctx.fill();

  ctx.fillStyle = sariGradient;
  drawRoundedRectAtOrigin(-106, -34, 38, 228, 16);
  ctx.fill();

  ctx.fillStyle = goldGradient;
  drawRoundedRectAtOrigin(-104, 176, 38, 16, 8);
  ctx.fill();

  ctx.fillStyle = goldGradient;
  ctx.beginPath();
  ctx.ellipse(-95, 190, 17, 9, 0, 0, Math.PI * 2);
  ctx.ellipse(-55, 194, 17, 9, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#f4bf8f";
  ctx.beginPath();
  ctx.ellipse(-92, 191, 14, 8, 0, 0, Math.PI * 2);
  ctx.ellipse(-53, 195, 14, 8, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "#b16443";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(-82, 20);
  ctx.lineTo(-86, 114);
  ctx.stroke();

  ctx.strokeStyle = "#b97b53";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(-71, 68, 11, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = "#b97b53";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(94, -28, 10, 0, Math.PI * 2);
  ctx.arc(106, -18, 10, 0, Math.PI * 2);
  ctx.stroke();

  ctx.restore();
}

function drawCinematicCaptions() {
  if (proCaptionsEnabled && !proCaptionsEnabled.checked) return;
  const timeline = state.narration?.syncProfile?.timeline || [];
  if (!timeline.length) return;
  if (!state.speaking && !state.exportingVideo) return; // Only show if active

  const rawTime = (state.activeAudio?.currentTime || performance.now() / 1000);
  const currentMs = rawTime * 1000;
  
  let activeIndex = -1;
  for (let i = 0; i < timeline.length; i++) {
     if (currentMs >= timeline[i].startMs && currentMs <= timeline[i].startMs + timeline[i].lengthMs) {
        activeIndex = i;
        break;
     }
  }

  if (activeIndex === -1) {
    let pastIndex = -1;
    for (let i = timeline.length-1; i >= 0; i--) {
       if (currentMs >= timeline[i].startMs) {
          pastIndex = i;
          break;
       }
    }
    activeIndex = pastIndex;
  }
  
  if (activeIndex === -1) return;

  let chunkStart = activeIndex;
  while (chunkStart > 0 && (activeIndex - chunkStart) < 3 && !/[.,?!]/.test(timeline[chunkStart - 1].text)) {
      chunkStart--;
  }

  let chunkEnd = activeIndex;
  while (chunkEnd < timeline.length - 1 && (chunkEnd - activeIndex) < 3 && !/[.,?!]/.test(timeline[chunkEnd].text)) {
      chunkEnd++;
  }
  
  if (chunkEnd - chunkStart > 5) {
     chunkStart = Math.max(0, activeIndex - 2);
     chunkEnd = Math.min(timeline.length - 1, activeIndex + 3);
  }

  const chunk = timeline.slice(chunkStart, chunkEnd + 1);

  const fullText = chunk.map(word => (word.text || '').replace(/[\[\]]/g, '')).join(' ');
  const localActiveIndex = (activeIndex >= chunkStart && activeIndex <= chunkEnd) ? activeIndex - chunkStart : -1;
  const elapsed = Math.max(0, (currentMs - chunk[0].startMs) / 1000);

  if (window.drawPremiumCaption) {
      let styleType = window.getCaptionStylePref ? window.getCaptionStylePref() : 'tiktok';
      let targetEmoji = window.getCaptionEmoji ? window.getCaptionEmoji(fullText) : null;
      let fontSize = window.getCaptionFontSize ? window.getCaptionFontSize() : 64;
      let colorOverride = window.getCaptionColor ? window.getCaptionColor() : null;
      let lineHeight = fontSize * 1.2;
      
      ctx.save();
      window.drawPremiumCaption(
          ctx, fullText, canvas.width * 0.5, canvas.height - Math.max(100, fontSize), canvas.width * 0.85, 
          lineHeight, elapsed, styleType, localActiveIndex, targetEmoji, fontSize, colorOverride
      );
      ctx.restore();
      return;
  }

  // Basic fallback
  ctx.save();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  
  const yBase = canvas.height - 80;
  
  ctx.font = '900 64px "Nunito", sans-serif'; 
  const wordWidths = chunk.map((word, i) => {
     const isSpoken = (chunkStart + i === activeIndex);
     ctx.font = isSpoken ? '900 74px "Nunito", sans-serif' : '900 64px "Nunito", sans-serif';
     return ctx.measureText(word.text).width + 18;
  });
  
  const totalWidth = wordWidths.reduce((a, b) => a + b, 0);
  let cursorX = (canvas.width - totalWidth) / 2;
  
  for (let i = 0; i < chunk.length; i++) {
     const wordText = chunk[i].text.replace(/[\[\]]/g, '');
     const isSpoken = (chunkStart + i === activeIndex);
     
     const wWidth = wordWidths[i];
     const wordCenterX = cursorX + (wWidth / 2);
     const wordY = yBase + (isSpoken ? -8 : 0); 
     
     ctx.font = isSpoken ? '900 74px "Nunito", sans-serif' : '900 64px "Nunito", sans-serif';
     ctx.strokeStyle = "rgba(0,0,0,0.85)";
     ctx.lineWidth = 14;
     ctx.lineJoin = "round";
     ctx.strokeText(wordText, wordCenterX, wordY);
     ctx.fillStyle = isSpoken ? "#ffcc00" : "#ffffff";
     ctx.shadowColor = "rgba(0,0,0,0.6)";
     ctx.shadowBlur = 12;
     ctx.shadowOffsetY = 4;
     ctx.fillText(wordText, wordCenterX, wordY);
     ctx.shadowBlur = 0;
     ctx.shadowColor = "transparent";
     cursorX += wWidth;
  }
  ctx.restore();
}

function drawAutoQuizOverlay() {
  if (proQuizEnabled && !proQuizEnabled.checked) return;
  if (!state.speaking && !state.exportingVideo) return;
  const boardSourceText = state.displayedText || state.text;
  
  const quizMatch = boardSourceText.match(/Quiz:\s*(.*?)\s*[A|a]\)\s*(.*?)\s*[B|b]\)\s*(.*?)\s*[C|c]\)\s*(.*?)(?:\s*[D|d]\)\s*(.*?))?\s*(?:The\s*answer\s*is|Answer:)\s*([A-D])/i);
  if (!quizMatch) return;
  
  const [_, question, optA, optB, optC, optD, answer] = quizMatch;
  
  const rawTime = (state.activeAudio?.currentTime || performance.now() / 1000);
  const currentMs = rawTime * 1000;
  
  const timeline = state.narration?.syncProfile?.timeline || [];
  let answerRevealMs = 99999999;
  for (let i = 0; i < timeline.length; i++) {
     if (timeline[i].text.toLowerCase().includes("answer") || timeline[i].text.toLowerCase().includes(answer.toLowerCase())) {
         answerRevealMs = Math.min(answerRevealMs, timeline[i].startMs);
     }
  }

  const isAnswerRevealed = currentMs >= answerRevealMs;

  ctx.save();
  ctx.fillStyle = "rgba(10, 15, 25, 0.95)";
  ctx.fillRect(0, 0, canvas.width, canvas.height); 
  
  ctx.fillStyle = "#ffffff";
  ctx.font = 'bold 50px "Nunito", sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  
  ctx.shadowColor = "rgba(0,0,0,0.8)";
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 4;
  ctx.fillText(question.trim(), canvas.width / 2, 180);
  ctx.shadowBlur = 0;
  ctx.shadowColor = "transparent";
  
  const options = [
    { label: "A", text: optA, y: 350 },
    { label: "B", text: optB, y: 450 },
    { label: "C", text: optC, y: 550 },
  ];
  if (optD && optD.trim().length > 0) options.push({ label: "D", text: optD, y: 650 });

  options.forEach((opt) => {
     let optBg = "#1c2b36";
     let optTxt = "#ffffff";
     
     if (isAnswerRevealed) {
         if (opt.label.toLowerCase() === answer.toLowerCase()) {
             optBg = "#4ceb34"; 
             optTxt = "#000000";
         } else {
             optBg = "#11151a"; 
             optTxt = "#334455";
         }
     }
     
     const boxW = 860;
     const boxH = 80;
     const boxX = (canvas.width - boxW) / 2;
     
     ctx.fillStyle = optBg;
     ctx.beginPath();
     if (ctx.roundRect) {
         ctx.roundRect(boxX, opt.y - boxH/2, boxW, boxH, 16);
     } else {
         ctx.fillRect(boxX, opt.y - boxH/2, boxW, boxH);
     }
     ctx.fill();
     
     if (!isAnswerRevealed || opt.label.toLowerCase() === answer.toLowerCase()) {
         ctx.lineWidth = 3;
         ctx.strokeStyle = isAnswerRevealed ? "#ffffff" : "#2a4254";
         ctx.stroke();
     }
     
     ctx.fillStyle = optTxt;
     ctx.font = 'bold 36px "Nunito", sans-serif';
     ctx.textAlign = "left";
     ctx.fillText(`${opt.label})  ${opt.text.trim()}`, boxX + 40, opt.y);
  });
  
  ctx.restore();
}

function drawProceduralConceptAnimations() {
  if (proAnimationsEnabled && !proAnimationsEnabled.checked) return;
  const isAnimatingContent = state.speaking || (state.displayedText && state.displayedText !== state.text);
  const boardSourceText = isAnimatingContent ? (state.displayedText || state.text) : state.text;
  const rawTime = (state.activeAudio?.currentTime || performance.now() / 1000);

  // 1. Math Jumps / Subtraction
  const mathMatch = boardSourceText.match(/(?:let's\s*add|adding)?\s*(\d+)\s*\+\s*(\d+)\s*=\s*(\d+)/i) || 
                    boardSourceText.match(/jumps?\s*from\s*(\d+).*?(?:add|jump|moves)\s*(\d+).*?(?:to|position)\s*(\d+)/i) || 
                    boardSourceText.match(/(\d+)\s*\+\s*(\d+)\s*=\s*(\d+)/);

  if (mathMatch) {
    const startNum = parseInt(mathMatch[1]);
    const jumps = parseInt(mathMatch[2]);
    const endNum = parseInt(mathMatch[3]);
    if (!isNaN(startNum) && !isNaN(jumps) && !isNaN(endNum) && startNum + jumps === endNum && jumps <= 30) {
      drawProceduralNumberLine(startNum, jumps, endNum, rawTime);
      return;
    }
  }

  // 2. Multiplication Arrays
  const multMatch = boardSourceText.match(/(\d+)\s*(?:x|\*|times)\s*(\d+)\s*(?:=|equals|is)\s*(\d+)/i);
  if (multMatch) {
     const rows = parseInt(multMatch[1]);
     const cols = parseInt(multMatch[2]);
     const total = parseInt(multMatch[3]);
     if (rows * cols === total && rows <= 12 && cols <= 12) {
        drawMultiplicationGrid(rows, cols, rawTime);
        return;
     }
  }

  // 3. Fallback: Generic High-Tech Image Scanner for ALL images
  drawGenericImageScanner(rawTime);
}

function drawGenericImageScanner(rawTime) {
  if (!state.images || state.images.length === 0) return;
  const imgData = state.images[state.imageEditor?.activeIndex >= 0 ? state.imageEditor.activeIndex : 0];
  if (!imgData) return;

  const progress = (rawTime * Math.max(1, state.exportPlaybackRate)) % 4; // 4 second loop
  
  if (!state.imageRenderBoxes || !state.imageRenderBoxes.length) return;
  const box = state.imageRenderBoxes[0]; 
  
  ctx.save();
  const scanY = box.y + (progress / 4) * box.height;

  ctx.beginPath();
  ctx.moveTo(box.x, scanY);
  ctx.lineTo(box.x + box.width, scanY);
  ctx.lineWidth = 4;
  ctx.strokeStyle = "rgba(0, 255, 255, 0.8)";
  ctx.shadowColor = "rgba(0, 255, 255, 1)";
  ctx.shadowBlur = 15;
  ctx.stroke();

  const gradient = ctx.createLinearGradient(0, scanY - 30, 0, scanY);
  gradient.addColorStop(0, "rgba(0, 255, 255, 0)");
  gradient.addColorStop(1, "rgba(0, 255, 255, 0.2)");
  
  ctx.fillStyle = gradient;
  ctx.fillRect(box.x, scanY - 30, box.width, 30);
  ctx.restore();
}

function drawMultiplicationGrid(rows, cols, rawTime) {
  const progress = (rawTime * Math.max(1, state.exportPlaybackRate)); 
  const total = rows * cols;
  
  const boxSize = 40;
  const padding = 10;
  const gridWidth = (cols * boxSize) + ((cols - 1) * padding);
  const gridHeight = (rows * boxSize) + ((rows - 1) * padding);
  
  const startX = (canvas.width - gridWidth) / 2;
  const startY = (canvas.height - gridHeight) / 2 + 50;

  ctx.save();
  let count = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const staggerTime = (count / total) * 3; 
      count++;
      
      if (progress < staggerTime) continue;
      
      const x = startX + c * (boxSize + padding);
      const y = startY + r * (boxSize + padding);
      
      const popAlpha = Math.min(1, (progress - staggerTime) * 3);
      const yOffset = Math.max(0, 20 * (1 - popAlpha) * (1 - popAlpha));
      
      ctx.globalAlpha = popAlpha;
      ctx.fillStyle = `hsl(${(count * 20) % 360}, 80%, 60%)`;
      ctx.fillRect(x, y - yOffset, boxSize, boxSize);
      
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#ffffff";
      ctx.strokeRect(x, y - yOffset, boxSize, boxSize);
    }
  }
  ctx.restore();
}

function drawProceduralNumberLine(startNum, jumps, endNum, rawTime) {
  const progress = (rawTime * Math.max(1, state.exportPlaybackRate)) % (jumps * 1.5 + 2); 
  
  const lineY = canvas.height - 150;
  const lineStartX = 100;
  const lineEndX = canvas.width - 100;
  const lineLength = Math.max(endNum, startNum + jumps) + 1; 
  const segmentWidth = (lineEndX - lineStartX) / lineLength;

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(lineStartX, lineY);
  ctx.lineTo(lineEndX, lineY);
  ctx.lineWidth = 12;
  ctx.lineCap = "round";
  ctx.strokeStyle = "rgba(255, 204, 0, 0.95)";
  ctx.stroke();

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 28px Inter, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";

  for (let i = 0; i <= lineLength; i++) {
    const x = lineStartX + (i * segmentWidth);
    ctx.beginPath();
    ctx.arc(x, lineY, 8, 0, Math.PI * 2);
    ctx.fillStyle = i === startNum || i === endNum ? "#ffffff" : "rgba(255,255,255,0.7)";
    ctx.fill();
    ctx.fillText(`${i}`, x, lineY + 20);
  }

  ctx.lineWidth = 6;
  ctx.strokeStyle = "#4ceb34"; 
  
  const jumpProgressIndex = Math.floor(progress / 1.5);
  const arcProgress = (progress % 1.5) / 1.5;

  for (let j = 0; j < jumps; j++) {
     if (j > jumpProgressIndex) continue;
     const jxStart = lineStartX + ((startNum + j) * segmentWidth);
     const jxEnd = lineStartX + ((startNum + j + 1) * segmentWidth);
     const arcHeight = -80;
     ctx.beginPath();
     ctx.moveTo(jxStart, lineY);
     if (j < jumpProgressIndex) {
        ctx.quadraticCurveTo(jxStart + (jxEnd - jxStart)/2, lineY + arcHeight, jxEnd, lineY);
        ctx.stroke();
     } else if (j === jumpProgressIndex) {
        const p = arcProgress;
        const currentX = jxStart + (jxEnd - jxStart) * p;
        const currentY = lineY + (arcHeight * Math.sin(p * Math.PI));
        ctx.quadraticCurveTo(jxStart + (currentX - jxStart)/2, lineY + (arcHeight * Math.sin((p/2) * Math.PI)), currentX, currentY);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(currentX, currentY, 14, 0, Math.PI * 2);
        ctx.fillStyle = "#ff4545"; 
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#ffffff";
        ctx.stroke();
     }
  }

  if (progress >= jumps * 1.5) {
     const endX = lineStartX + (endNum * segmentWidth);
     ctx.beginPath();
     ctx.arc(endX, lineY, 24, 0, Math.PI * 2);
     ctx.fillStyle = "#ff4545";
     ctx.fill();
     ctx.strokeStyle = "#ffffff";
     ctx.lineWidth = 4;
     ctx.stroke();
  }
  ctx.restore();
}

function drawOptionalImages(currentPageIndex = 0, totalPageCount = 1) {
  const pageIndex = clamp(currentPageIndex, 0, Math.max(0, Math.max(1, totalPageCount) - 1));
  const pageEntries = getImageEntriesForPage(pageIndex);

  state.imageRenderBoxes = [];
  if (!pageEntries.length) {
    return;
  }

  const interactivePreview = canvas === previewCanvas && !stagePanel.classList.contains("hidden");

  let elapsedMs = 0;
  let durationMs = 0;
  if (state.speaking || state.exportVideoTrack?.readyState === "live") {
    elapsedMs = state.exportVideoTrack?.readyState === "live" ? state.exportCapture.elapsedMs : state.playback.elapsedMs;
    durationMs = state.narration?.syncProfile?.totalDurationMs || 0;
  }
  const totalImages = pageEntries.length;

  pageEntries.forEach(({ item, index }) => {
    let drawScale = 1.0;
    let drawAlpha = 1.0;
    
    if (durationMs > 0 && totalImages > 0 && (state.speaking || state.exportVideoTrack?.readyState === "live")) {
      const staggeredRevealTimeMs = (durationMs / (totalImages + 1)) * (index + 1);
      if (elapsedMs < staggeredRevealTimeMs) {
         drawAlpha = 0;
      } else {
         const popProgressMs = elapsedMs - staggeredRevealTimeMs;
         if (popProgressMs < 400) {
            const ease = 1 - Math.pow(1 - (popProgressMs / 400), 3);
            drawAlpha = ease;
            drawScale = 0.8 + (0.2 * Math.sin(ease * Math.PI / 2)); 
         } else {
            const cinematicProgress = (popProgressMs - 400) / Math.max(1, durationMs);
            drawScale = 1.0 + (cinematicProgress * 0.04);
         }
      }
    }

    if (drawAlpha <= 0 && !interactivePreview) return;

    const frame = clampImageFrame(item, index);
    const cellX = frame.x;
    const cellY = frame.y;
    const cellWidth = frame.width;
    const cellHeight = frame.height;
    
    const centerX = cellX + (cellWidth / 2);
    const centerY = cellY + (cellHeight / 2);

    ctx.save();
    
    if ((drawAlpha < 1.0 || drawScale !== 1.0) && !interactivePreview) {
      ctx.globalAlpha = drawAlpha;
      ctx.translate(centerX, centerY);
      ctx.scale(drawScale, drawScale);
      ctx.translate(-centerX, -centerY);
    }
    const innerX = cellX + 8;
    const innerY = cellY + 8;
    const innerW = Math.max(24, cellWidth - 16);
    const innerH = Math.max(24, cellHeight - 16);
    ctx.save();
    ctx.shadowColor = "rgba(18, 47, 68, 0.24)";
    ctx.shadowBlur = 20;
    ctx.shadowOffsetY = 8;
    drawRoundedRect(cellX, cellY, cellWidth, cellHeight, 18, "rgba(255,255,255,0.94)");
    ctx.shadowColor = "transparent";
    ctx.beginPath();
    ctx.moveTo(innerX + 14, innerY);
    ctx.arcTo(innerX + innerW, innerY, innerX + innerW, innerY + innerH, 14);
    ctx.arcTo(innerX + innerW, innerY + innerH, innerX, innerY + innerH, 14);
    ctx.arcTo(innerX, innerY + innerH, innerX, innerY, 14);
    ctx.arcTo(innerX, innerY, innerX + innerW, innerY, 14);
    ctx.closePath();
    ctx.clip();

    const targetW = innerW;
    const targetH = innerH;
    const scale = Math.max(targetW / item.image.width, targetH / item.image.height);
    const drawW = item.image.width * scale;
    const drawH = item.image.height * scale;
    const drawX = innerX + (targetW - drawW) / 2;
    const drawY = innerY + (targetH - drawH) / 2;
    applyHighQualityImageRendering(ctx);
    ctx.drawImage(item.image, drawX, drawY, drawW, drawH);
    if (item.cutoutApplied) {
      applyScreenMatchOverlay(
        {
          x: innerX,
          y: innerY,
          width: innerW,
          height: innerH
        },
        0.1 + (getCutoutScreenBlendStrength() * 0.72)
      );
    }
    ctx.restore();

    if (item.cutoutApplied) {
      ctx.save();
      ctx.shadowColor = `rgba(88, 159, 196, ${0.14 + (getCutoutScreenBlendStrength() * 0.24)})`;
      ctx.shadowBlur = 18 + (getCutoutScreenBlendStrength() * 12);
      ctx.shadowOffsetY = 8;
      ctx.strokeStyle = "rgba(255,255,255,0.08)";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(cellX + 4, cellY + 4, cellWidth - 8, cellHeight - 8);
      ctx.restore();
    }

    const resizeHandles = getImageResizeHandles({
      x: cellX,
      y: cellY,
      width: cellWidth,
      height: cellHeight
    });
    const isSelected = interactivePreview && state.imageEditor.activeIndex === index;
    const isHovered = interactivePreview && state.imageEditor.hoverIndex === index;

    if (isSelected || isHovered) {
      ctx.save();
      ctx.strokeStyle = isSelected ? "#0d7ea9" : "rgba(13, 126, 169, 0.46)";
      ctx.lineWidth = isSelected ? 4 : 2;
      ctx.setLineDash(isSelected ? [] : [8, 6]);
      ctx.strokeRect(cellX - 2, cellY - 2, cellWidth + 4, cellHeight + 4);
      ctx.setLineDash([]);

      if (isSelected) {
        resizeHandles.forEach((handle) => {
          ctx.fillStyle = state.imageEditor.activeHandle === handle.name ? "#0d7ea9" : "#ffffff";
          ctx.strokeStyle = "#0d7ea9";
          ctx.lineWidth = 2;
          drawRoundedRect(handle.x, handle.y, handle.size, handle.size, 6, ctx.fillStyle);
          ctx.strokeRect(handle.x + 1, handle.y + 1, handle.size - 2, handle.size - 2);
        });
      }
      ctx.restore();
    }

    state.imageRenderBoxes.push({
      index,
      x: cellX,
      y: cellY,
      width: cellWidth,
      height: cellHeight,
      handles: resizeHandles
    });
  });

}

function drawPdfAutoExampleImages(pageIndex = state.previewPageIndex, autoImages = []) {
  const safeImages = Array.isArray(autoImages) ? autoImages.filter((image) => image?.image) : [];
  if (!safeImages.length) {
    return;
  }

  const stripArea = getPinnedPdfImageStripArea();
  const frameGap = 18;
  const framePadding = 8;
  const totalGap = Math.max(0, safeImages.length - 1) * frameGap;
  const frameHeight = Math.max(
    132,
    Math.min(stripArea.height, (stripArea.height - totalGap) / Math.max(1, safeImages.length))
  );

  safeImages.forEach((image, index) => {
    const x = stripArea.x;
    const y = stripArea.y + (index * (frameHeight + frameGap));
    const width = stripArea.width;
    const height = Math.min(frameHeight, Math.max(120, stripArea.y + stripArea.height - y));
    if (height <= 0) {
      return;
    }

    const innerX = x + framePadding;
    const innerY = y + framePadding;
    const innerWidth = Math.max(24, width - (framePadding * 2));
    const innerHeight = Math.max(24, height - (framePadding * 2));
    const scale = Math.min(innerWidth / image.image.width, innerHeight / image.image.height);
    const drawWidth = Math.max(1, image.image.width * scale);
    const drawHeight = Math.max(1, image.image.height * scale);
    const drawX = innerX + ((innerWidth - drawWidth) / 2);
    const drawY = innerY + ((innerHeight - drawHeight) / 2);

    ctx.save();
    ctx.shadowColor = "rgba(18, 47, 68, 0.24)";
    ctx.shadowBlur = 20;
    ctx.shadowOffsetY = 8;
    drawRoundedRect(x, y, width, height, 18, "rgba(255,255,255,0.96)");
    ctx.shadowColor = "transparent";
    ctx.beginPath();
    ctx.moveTo(innerX + 14, innerY);
    ctx.arcTo(innerX + innerWidth, innerY, innerX + innerWidth, innerY + innerHeight, 14);
    ctx.arcTo(innerX + innerWidth, innerY + innerHeight, innerX, innerY + innerHeight, 14);
    ctx.arcTo(innerX, innerY + innerHeight, innerX, innerY, 14);
    ctx.arcTo(innerX, innerY, innerX + innerWidth, innerY, 14);
    ctx.closePath();
    ctx.clip();
    applyHighQualityImageRendering(ctx);
    ctx.drawImage(image.image, drawX, drawY, drawWidth, drawHeight);
    ctx.restore();
  });
}

function requestCanvasExportFrame() {
  if (state.exportVideoTrack?.readyState === "live" && typeof state.exportVideoTrack.requestFrame === "function") {
    try {
      const minFrameIntervalMs = state.exportCapture.minFrameIntervalMs || 0;
      if (minFrameIntervalMs > 0) {
        const now = performance.now();
        if ((now - state.exportCapture.lastFrameAt) < minFrameIntervalMs) {
          return;
        }

        state.exportCapture.lastFrameAt = now;
      }

      state.exportVideoTrack.requestFrame();
    } catch (error) {
      console.error(error);
    }
  }
}

function drawPdfContextScene() {
  state.stageVideoRenderBox = null;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTeachingStageBackdrop();
  drawSceneVfx();

  syncPdfContextStageImages({ skipDraw: true });
  const contextPages = getPdfContextPages();
  const totalPageCount = Math.max(1, contextPages.length);
  const currentPageIndex = clamp(state.previewPageIndex, 0, Math.max(0, totalPageCount - 1));
  const currentPage = contextPages[currentPageIndex] || null;

  state.previewPageIndex = currentPageIndex;
  state.renderedPageCount = totalPageCount;
  updateStagePageUi(currentPageIndex, totalPageCount);
  updateStageTimelineUi();

  if (!currentPage) {
    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = '800 34px "League Spartan"';
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Select at least one PDF page", canvas.width / 2, canvas.height / 2 - 20);
    ctx.font = '700 20px "Nunito"';
    ctx.fillStyle = "rgba(255,255,255,0.72)";
    ctx.fillText("Use the page picker on the input side to choose what should be presented.", canvas.width / 2, canvas.height / 2 + 24);
    ctx.restore();
    requestCanvasExportFrame();
    return;
  }

  drawInfoKidsLogo();

  const hasSideImages = getStageHasVisibleImagesForPage(currentPageIndex);
  const contentArea = getStageContentArea(currentPageIndex, hasSideImages);
  const visibleState = getPdfContextVisibleText(currentPage, currentPageIndex);
  const visibleText = visibleState?.partText || "";
  const usingFullPageText = visibleText === currentPage.text;
  const visibleLayout = usingFullPageText
    ? null
    : getContentLayoutWithMetrics(
      buildDisplayedLines(visibleText),
      contentArea.width,
      contentArea.height,
      !currentPage.text,
      {
        wordCount: currentPage.wordCount || splitIntoWords(currentPage.text).length,
        hasImages: hasSideImages
      }
    );
  const layoutRows = visibleState?.layoutPage?.rows?.length
    ? visibleState.layoutPage.rows
    : (usingFullPageText && currentPage?.rows?.length
      ? currentPage.rows
      : (visibleLayout?.rows || []));
  const layoutPageFontSize = visibleState?.layoutPage?.fontSize || null;
  const layoutPageRowHeight = visibleState?.layoutPage?.rowHeight || null;
  const layoutFontSize = usingFullPageText
    ? (layoutPageFontSize || currentPage?.fontSize || clamp(Math.round(28 * state.fontScale), 16, 54))
    : (visibleLayout?.fontSize || clamp(Math.round(28 * state.fontScale), 16, 54));
  const layoutRowHeight = usingFullPageText
    ? (layoutPageRowHeight || currentPage?.rowHeight || Math.max(layoutFontSize + 4, Math.round(layoutFontSize * 1.2)))
    : (visibleLayout?.rowHeight || Math.max(layoutFontSize + 4, Math.round(layoutFontSize * 1.2)));

  drawContentHighlightPanel(contentArea, {
    insetX: 24,
    insetY: 20,
    radius: 30
  });

  ctx.save();
  ctx.beginPath();
  ctx.rect(contentArea.x - 12, contentArea.y - 12, contentArea.width + 18, contentArea.height + 24);
  ctx.clip();

  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  const contentPaddingX = 6;
  const contentPaddingY = 6;
  let y = contentArea.y + contentPaddingY;

  layoutRows.forEach((row, rowIndex) => {
    if (row.spacer) {
      y += row.height;
      return;
    }

    const rowText = row.segments.map((segment) => segment.text).join("");
    const rowStartX = contentArea.x + contentPaddingX + (row.bullet ? 18 : 0);

    if (row.bullet) {
      ctx.beginPath();
      ctx.arc(contentArea.x + contentPaddingX + 6, y + Math.round(layoutFontSize * 0.42), 6, 0, Math.PI * 2);
      ctx.fillStyle = getAnimatedTeachingTextColor(rowText, rowIndex, 0);
      ctx.fill();
    }

    let x = rowStartX;
    row.segments.forEach((segment, segmentIndex) => {
      if (!segment.text) {
        return;
      }

      ctx.font = getContentFont(layoutFontSize, segment.style);
      const segmentWidth = drawAnimatedTeachingSegment(
        segment,
        x,
        y,
        rowText,
        rowIndex,
        segmentIndex,
        layoutFontSize
      );
      if (segment.style.underline) {
        const visibleUnderlineText = segment.text.replace(/\s+$/, "");
        if (visibleUnderlineText) {
          const underlineWidth = ctx.measureText(visibleUnderlineText).width;
          const underlineY = y + layoutFontSize + Math.max(2, Math.round(layoutFontSize * 0.06));
          ctx.fillStyle = isUsingDefaultStageStyle(segment.style)
            ? getAnimatedTeachingTextColor(rowText, rowIndex, segmentIndex)
            : segment.style.color;
          ctx.fillRect(x, underlineY, underlineWidth, Math.max(2, Math.round(layoutFontSize * 0.08)));
        }
      }

      x += segmentWidth;
    });

    y += layoutRowHeight;
  });

  if (state.speaking && visibleText !== currentPage.text) {
    ctx.fillStyle = "#0d7ea9";
    ctx.fillRect(contentArea.x, Math.min(contentArea.y + contentArea.height - 34, y + 6) - 4, 5, 34);
  }

  ctx.restore();

  if (totalPageCount > 1) {
    ctx.fillStyle = "rgba(255,255,255,0.86)";
    ctx.font = '700 14px "Nunito"';
    ctx.textAlign = "right";
    ctx.textBaseline = "bottom";
    ctx.fillText(`Page ${currentPageIndex + 1} / ${totalPageCount}`, contentArea.x + contentArea.width, contentArea.y + contentArea.height - 4);
  }

  drawOptionalImages(currentPageIndex, totalPageCount);
  requestCanvasExportFrame();
}

function drawPdfScene() {
  state.stageVideoRenderBox = null;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#15181d";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const selectedPages = getPdfPresentationPages("exact");
  const totalPageCount = Math.max(1, selectedPages.length);
  const currentPageIndex = clamp(state.previewPageIndex, 0, Math.max(0, totalPageCount - 1));
  const currentPage = selectedPages[currentPageIndex] || null;

  state.previewPageIndex = currentPageIndex;
  state.renderedPageCount = totalPageCount;
  updateStagePageUi(currentPageIndex, totalPageCount);
  updateStageTimelineUi();

  if (!currentPage) {
    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = '800 34px "League Spartan"';
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Select at least one PDF page", canvas.width / 2, canvas.height / 2 - 20);
    ctx.font = '700 20px "Nunito"';
    ctx.fillStyle = "rgba(255,255,255,0.72)";
    ctx.fillText("Use the page picker on the input side to choose what should be presented.", canvas.width / 2, canvas.height / 2 + 24);
    ctx.restore();
    requestCanvasExportFrame();
    return;
  }

  const pageArea = {
    x: 20,
    y: 20,
    width: canvas.width - 40,
    height: canvas.height - 40
  };
  const drawScale = Math.min(pageArea.width / currentPage.width, pageArea.height / currentPage.height);
  const drawWidth = Math.max(1, currentPage.width * drawScale);
  const drawHeight = Math.max(1, currentPage.height * drawScale);
  const drawX = pageArea.x + (pageArea.width - drawWidth) / 2;
  const drawY = pageArea.y + (pageArea.height - drawHeight) / 2;

  ctx.save();
  ctx.shadowColor = "rgba(0, 0, 0, 0.34)";
  ctx.shadowBlur = 34;
  ctx.shadowOffsetY = 18;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(drawX, drawY, drawWidth, drawHeight);
  ctx.restore();

  applyHighQualityImageRendering(ctx);
  ctx.drawImage(currentPage.renderCanvas, drawX, drawY, drawWidth, drawHeight);

  requestCanvasExportFrame();
}

function drawScene(mouthOpen = 0.12) {
  if ((state.introPlayback.active || state.introPlayback.previewVisible) && state.introPlayback.element) {
    drawIntroScene();
    drawRuntimeDisplayErrorOverlay();
    requestCanvasExportFrame();
    return;
  }

  if (isPdfPresentationMode()) {
    if (getPdfRenderMode() === "exact") {
      drawPdfScene();
    } else {
      drawPdfContextScene();
    }
    drawRuntimeDisplayErrorOverlay();
    requestCanvasExportFrame();
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTeachingStageBackdrop();
  drawSceneVfx();
  drawStageVideoLayer();

  const isAnimatingContent = state.speaking || (state.displayedText && state.displayedText !== state.text);
  const boardSourceText = isAnimatingContent ? (state.displayedText || state.text) : state.text;
  const boardData = getMathPlaceValueBoardData(boardSourceText) || (isAnimatingContent ? getMathPlaceValueBoardData(state.text) : null);
  const textOnlyContent = getPaginatedSlideContent(
    state.text,
    !state.text,
    state.previewPageIndex,
    false
  );
  const predictedAnimatedPageIndex = isAnimatingContent
    ? clamp(
      getStableAnimatedPageIndex(textOnlyContent, state.displayedText),
      0,
      Math.max(0, Math.max(textOnlyContent.pageCount, state.images.length ? getImagePageCount() : 1) - 1)
    )
    : clamp(state.previewPageIndex, 0, Math.max(0, Math.max(textOnlyContent.pageCount, state.images.length ? getImagePageCount() : 1) - 1));
  const currentPageHasImages = getStageHasVisibleImagesForPage(predictedAnimatedPageIndex);
  const fullContent = getPaginatedSlideContent(
    state.text,
    !state.text,
    predictedAnimatedPageIndex,
    currentPageHasImages
  );
  const activeContent = isAnimatingContent
    ? getPaginatedSlideContent(
      state.displayedText,
      !state.text,
      predictedAnimatedPageIndex,
      currentPageHasImages
    )
    : fullContent;
  const contentArea = fullContent.contentArea;
  const totalPageCount = boardData
    ? Math.max(1, state.images.length ? getImagePageCount() : 1)
    : Math.max(
      fullContent.pageCount,
      state.images.length ? getImagePageCount() : 1
    );
  const animatedPageIndex = isAnimatingContent
    ? clamp(
      getStableAnimatedPageIndex(fullContent, state.displayedText),
      0,
      Math.max(0, totalPageCount - 1)
    )
    : clamp(activeContent.pageCount - 1, 0, Math.max(0, totalPageCount - 1));
  const currentPageIndex = boardData
    ? clamp(state.previewPageIndex, 0, Math.max(0, totalPageCount - 1))
    : (isAnimatingContent
      ? animatedPageIndex
      : clamp(state.previewPageIndex, 0, Math.max(0, totalPageCount - 1)));
  const currentPage = isAnimatingContent
    ? activeContent.pages[animatedPageIndex] || {
      rows: [],
      totalHeight: 0,
      fontSize: activeContent.layout.fontSize,
      rowHeight: activeContent.layout.rowHeight
    }
    : fullContent.pages[currentPageIndex] || {
      rows: [],
      totalHeight: 0,
      fontSize: fullContent.layout.fontSize,
      rowHeight: fullContent.layout.rowHeight
    };

  state.previewPageIndex = currentPageIndex;
  state.renderedPageCount = totalPageCount;
  updateStagePageUi(currentPageIndex, totalPageCount);

  const currentFontSize = currentPage?.fontSize || activeContent.layout.fontSize || fullContent.layout.fontSize || 28;
  const currentRowHeight = currentPage?.rowHeight || activeContent.layout.rowHeight || fullContent.layout.rowHeight || 32;
  const contentPaddingX = 6;
  const contentPaddingY = 6;
  const contentScrollOffset = 0;
  const cursorBottomGap = Math.max(18, Math.round(currentRowHeight * 1.15));
  const visibleCursorY = Math.min(
    contentArea.y + contentArea.height - cursorBottomGap,
    contentArea.y + contentPaddingY + (currentPage?.totalHeight || 0) - contentScrollOffset + 8
  );

  drawInfoKidsLogo();
  drawContentHighlightPanel(contentArea, {
    insetX: 24,
    insetY: 20,
    radius: 30
  });

  if (boardData) {
    state.contentScrollOffset = 0;
    drawMathPlaceValueBoard(contentArea, boardData, currentPageIndex, totalPageCount);
    drawOptionalImages(currentPageIndex, totalPageCount);
    drawProceduralConceptAnimations();
    drawCinematicCaptions();
    drawAutoQuizOverlay();
    drawRuntimeDisplayErrorOverlay();
    requestCanvasExportFrame();
    return;
  }

  ctx.save();
  ctx.beginPath();
  ctx.rect(contentArea.x - 12, contentArea.y - 12, contentArea.width + 18, contentArea.height + 24);
  ctx.clip();

  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  let y = contentArea.y + contentPaddingY - contentScrollOffset;

  (currentPage?.rows || []).forEach((row, rowIndex) => {
    if (row.spacer) {
      y += row.height;
      return;
    }

    const rowText = row.segments.map((segment) => segment.text).join("");
    const rowWidth = measureStyledRuns(ctx, row.segments, currentFontSize);
    const rowStartX = contentArea.x + contentPaddingX + (row.bullet ? 18 : 0);

    if (row.bullet) {
      ctx.beginPath();
      ctx.arc(contentArea.x + contentPaddingX + 6, y + Math.round(currentFontSize * 0.42), 6, 0, Math.PI * 2);
      ctx.fillStyle = getAnimatedTeachingTextColor(rowText, rowIndex, 0);
      ctx.fill();
    }

    let x = rowStartX;
    row.segments.forEach((segment, segmentIndex) => {
      if (!segment.text) {
        return;
      }

      ctx.font = getContentFont(currentFontSize, segment.style);
      const segmentWidth = drawAnimatedTeachingSegment(
        segment,
        x,
        y,
        rowText,
        rowIndex,
        segmentIndex,
        currentFontSize
      );
      if (segment.style.underline) {
        const visibleUnderlineText = segment.text.replace(/\s+$/, "");
        if (visibleUnderlineText) {
          const underlineWidth = ctx.measureText(visibleUnderlineText).width;
          const underlineY = y + currentFontSize + Math.max(2, Math.round(currentFontSize * 0.06));
          ctx.fillStyle = isUsingDefaultStageStyle(segment.style)
            ? getAnimatedTeachingTextColor(rowText, rowIndex, segmentIndex)
            : segment.style.color;
          ctx.fillRect(x, underlineY, underlineWidth, Math.max(2, Math.round(currentFontSize * 0.08)));
        }
      }

      x += segmentWidth;
    });

    y += currentRowHeight;
  });

  if (state.speaking && state.displayedText !== state.text) {
    ctx.fillStyle = "#0d7ea9";
    ctx.fillRect(contentArea.x + contentPaddingX, visibleCursorY - 4, 5, 34);
  }

  if (totalPageCount > 1) {
    ctx.fillStyle = "rgba(255,255,255,0.86)";
    ctx.font = '700 14px "Nunito"';
    ctx.textAlign = "right";
    ctx.textBaseline = "bottom";
    ctx.fillText(`Page ${currentPageIndex + 1} / ${totalPageCount}`, contentArea.x + contentArea.width, contentArea.y + contentArea.height - 4);
  }

  ctx.restore();
  drawOptionalImages(currentPageIndex, totalPageCount);
  drawProceduralConceptAnimations();
  drawCinematicCaptions();
  drawAutoQuizOverlay();
  drawRuntimeDisplayErrorOverlay();
  requestCanvasExportFrame();
}

function loadImageFromDataUrl(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("One of the selected images could not be loaded."));
    image.src = dataUrl;
  });
}

function ensurePdfExampleImageLoaded(exampleImage) {
  if (!exampleImage?.dataUrl) {
    return Promise.resolve(null);
  }

  if (exampleImage.image) {
    return Promise.resolve(exampleImage.image);
  }

  if (exampleImage.loadFailed) {
    return Promise.resolve(null);
  }

  if (!exampleImage.loadPromise) {
    exampleImage.loadPromise = loadImageFromDataUrl(exampleImage.dataUrl)
      .then((image) => {
        exampleImage.image = image;
        exampleImage.width = image.naturalWidth || image.width || exampleImage.width;
        exampleImage.height = image.naturalHeight || image.height || exampleImage.height;
        if (isPdfPresentationMode() && getPdfRenderMode() === "context" && !stagePanel.classList.contains("hidden")) {
          drawScene(state.mouthOpen);
        }
        return image;
      })
      .catch((error) => {
        console.error(error);
        exampleImage.loadFailed = true;
        return null;
      })
      .finally(() => {
        exampleImage.loadPromise = null;
      });
  }

  return exampleImage.loadPromise;
}

function preloadPdfExampleImages(pages = state.pdf.pages) {
  if (!Array.isArray(pages) || !pages.length) {
    return;
  }

  pages.forEach((page) => {
    const exampleImages = Array.isArray(page?.exampleImages) ? page.exampleImages : [];
    exampleImages.forEach((exampleImage) => {
      void ensurePdfExampleImageLoaded(exampleImage);
    });
  });
}

function getPdfLessonAutoImageSyncKey() {
  const lessonText = lessonInput?.value.trim() || "";
  const selectedPageSignature = getPdfSelectedPages()
    .map((page) => Math.max(0, Math.round(Number(page?.pageNumber) || 0)))
    .filter(Boolean)
    .join(",");
  const manualPdfSignature = state.images
    .filter((item) => item?.sourceTag === "pdf-clipboard")
    .map((item) => `${Math.max(0, Math.round(Number(item?.sourcePageNumber) || 0))}:${getImagePageIndexForItem(item)}`)
    .sort()
    .join("|");

  return `${state.pdf.fileSignature || state.pdf.fileName}|${selectedPageSignature}|${manualPdfSignature}|${state.fontScale}|${lessonText}`;
}

function getPdfAutoImageSyncKey() {
  const presentationKey = getPdfRenderMode() === "context" ? getPdfContextPagesKey() : "";
  const manualPdfSignature = state.images
    .filter((item) => item?.sourceTag === "pdf-clipboard")
    .map((item) => `${Math.max(0, Math.round(Number(item?.sourcePageNumber) || 0))}:${getImagePageIndexForItem(item)}`)
    .sort()
    .join("|");

  return `${state.presentationMode}|${getPdfRenderMode()}|${presentationKey}|${manualPdfSignature}|${state.pdf.fileSignature || state.pdf.fileName}`;
}

function getPdfPageTextRangeInExtractedText(pageIndex = -1) {
  const safePageIndex = Math.max(0, Math.round(Number(pageIndex) || 0));
  let cursor = 0;

  for (let index = 0; index < state.pdf.pageTexts.length; index += 1) {
    const pageText = String(state.pdf.pageTexts[index] || "").trim();
    if (!pageText) {
      continue;
    }

    const start = cursor;
    const end = start + pageText.length;
    if (index === safePageIndex) {
      return { start, end, matched: true };
    }

    cursor = end + 2;
  }

  return {
    start: 0,
    end: 0,
    matched: false
  };
}

function getPdfLessonImagePageAssignments(lessonText = lessonInput?.value.trim() || "") {
  const safeLessonText = String(lessonText || "").trim();
  if (!safeLessonText) {
    return new Map();
  }

  const paginatedContent = getPaginatedSlideContent(safeLessonText, !safeLessonText, state.previewPageIndex, false);
  const pages = Array.isArray(paginatedContent?.pages) ? paginatedContent.pages : [];
  const pageAssignments = new Map();
  const lessonMatchesExtractedPdf = normalizePdfSearchFragment(safeLessonText) === normalizePdfSearchFragment(state.pdf.extractedText);
  let searchStart = 0;
  let fallbackPageIndex = 0;

  getPdfSelectedPages().forEach((page) => {
    const sourcePageNumber = Math.max(0, Math.round(Number(page?.pageNumber) || 0));
    if (!sourcePageNumber) {
      return;
    }

    let matchedPageIndex = clamp(fallbackPageIndex, 0, Math.max(0, pages.length - 1));
    const pageText = String(page?.text || state.pdf.pageTexts[page.index] || "").trim();

    if (pageText) {
      const match = findPdfAnchorLocalOffset(safeLessonText, pageText, searchStart);
      if (match.matched) {
        matchedPageIndex = getPageIndexForTextOffset(pages, match.nextSearchStart, matchedPageIndex);
        searchStart = Math.max(searchStart, match.nextSearchStart);
      } else if (lessonMatchesExtractedPdf) {
        const extractedRange = getPdfPageTextRangeInExtractedText(page.index);
        if (extractedRange.matched) {
          matchedPageIndex = getPageIndexForTextOffset(pages, extractedRange.end, matchedPageIndex);
          searchStart = Math.max(searchStart, extractedRange.end);
        } else {
          return;
        }
      } else {
        return;
      }
    } else if (!lessonMatchesExtractedPdf) {
      return;
    }

    fallbackPageIndex = matchedPageIndex;
    pageAssignments.set(sourcePageNumber, matchedPageIndex);
  });

  return pageAssignments;
}

function syncExtractedPdfLessonImages(options = {}) {
  const existingImages = [...state.images];
  const existingLessonAutoImages = existingImages.filter((item) => isAutoPdfLessonImage(item));
  const nonLessonAutoImages = existingImages.filter((item) => !isAutoPdfLessonImage(item));
  const lessonText = lessonInput?.value.trim() || "";
  const shouldShowLessonAutoImages = Boolean(lessonText && getPdfSelectedPageCount() > 0 && state.pdf.pages.length);
  const nextSyncKey = shouldShowLessonAutoImages ? getPdfLessonAutoImageSyncKey() : "";

  if (state.pdf.lessonAutoImageSyncKey === nextSyncKey && (shouldShowLessonAutoImages || !existingLessonAutoImages.length)) {
    return;
  }

  let syncedImages = [...nonLessonAutoImages];

  if (shouldShowLessonAutoImages) {
    const pageAssignments = getPdfLessonImagePageAssignments(lessonText);
    const manualSourcePages = new Set(
      nonLessonAutoImages
        .filter((item) => item?.sourceTag === "pdf-clipboard" && Number.isFinite(Number(item?.sourcePageNumber)))
        .map((item) => Math.max(0, Math.round(Number(item.sourcePageNumber) || 0)))
        .filter(Boolean)
    );
    const existingAutoByKey = new Map(
      existingLessonAutoImages
        .filter((item) => item?.pdfImageKey)
        .map((item) => [item.pdfImageKey, item])
    );

    getPdfSelectedPages().forEach((page) => {
      const sourcePageNumber = Math.max(0, Math.round(Number(page?.pageNumber) || 0));
      if (!sourcePageNumber || manualSourcePages.has(sourcePageNumber)) {
        return;
      }

      const pageIndex = pageAssignments.get(sourcePageNumber);
      if (!Number.isInteger(pageIndex) || pageIndex < 0) {
        return;
      }

      const exampleImages = Array.isArray(page?.exampleImages) ? page.exampleImages : [];
      exampleImages.forEach((exampleImage, exampleIndex) => {
        const dataUrl = exampleImage?.dataUrl || "";
        const imageElement = exampleImage?.image || null;
        if (!dataUrl.startsWith("data:image/")) {
          return;
        }

        if (!imageElement) {
          void ensurePdfExampleImageLoaded(exampleImage).then(() => {
            state.pdf.lessonAutoImageSyncKey = "";
            syncExtractedPdfLessonImages();
          });
          return;
        }

        const pdfImageKey = `pdf-lesson-auto:${sourcePageNumber}:${exampleIndex}`;
        const existingAuto = existingAutoByKey.get(pdfImageKey);
        syncedImages.push({
          ...existingAuto,
          fileName: exampleImage.fileName || `pdf-page-${sourcePageNumber}-example-${exampleIndex + 1}.png`,
          dataUrl,
          image: imageElement,
          sourceTag: "pdf-lesson-auto",
          pdfImageKey,
          sourcePageNumber,
          pageIndex,
          aspectRatio: imageElement.width && imageElement.height
            ? imageElement.width / imageElement.height
            : (existingAuto?.aspectRatio || 4 / 3)
        });
      });
    });
  }

  state.images = applyDefaultImageLayouts(syncedImages);
  state.pdf.lessonAutoImageSyncKey = nextSyncKey;

  if (state.imageEditor.activeIndex >= state.images.length) {
    state.imageEditor.activeIndex = state.images.length ? state.images.length - 1 : -1;
  }

  renderImagePreviews();
  updateStageMediaToolUi();

  if (!options.skipDraw && !stagePanel.classList.contains("hidden")) {
    drawScene(state.mouthOpen);
  }
}

function syncPdfContextStageImages(options = {}) {
  const existingImages = [...state.images];
  const existingAutoImages = existingImages.filter((item) => isAutoPdfExampleImage(item));
  const nonAutoImages = existingImages.filter((item) => !isAutoPdfExampleImage(item));
  const shouldShowAutoImages = isPdfPresentationMode() && getPdfRenderMode() === "context" && getPdfSelectedPageCount() > 0;
  const nextSyncKey = shouldShowAutoImages ? getPdfAutoImageSyncKey() : "";

  if (state.pdf.autoImageSyncKey === nextSyncKey && (shouldShowAutoImages || !existingAutoImages.length)) {
    return;
  }

  let syncedImages = [...nonAutoImages];

  if (shouldShowAutoImages) {
    const selectedPages = getPdfSelectedPages();
    const manualSourcePages = new Set(
      nonAutoImages
        .filter((item) => item?.sourceTag === "pdf-clipboard" && Number.isFinite(Number(item?.sourcePageNumber)))
        .map((item) => Math.max(0, Math.round(Number(item.sourcePageNumber) || 0)))
        .filter(Boolean)
    );
    const existingAutoByKey = new Map(
      existingAutoImages
        .filter((item) => item?.pdfImageKey)
        .map((item) => [item.pdfImageKey, item])
    );

    selectedPages.forEach((page) => {
      const sourcePageNumber = Math.max(0, Math.round(Number(page?.pageNumber) || 0));
      if (!sourcePageNumber || manualSourcePages.has(sourcePageNumber)) {
        return;
      }

      const presentationPageIndex = getPdfPresentationPageIndexForSourcePageNumber(sourcePageNumber);
      if (presentationPageIndex < 0) {
        return;
      }

      const exampleImages = Array.isArray(page?.exampleImages) ? page.exampleImages : [];
      exampleImages.forEach((exampleImage, exampleIndex) => {
        const imageElement = exampleImage?.image || null;
        const dataUrl = exampleImage?.dataUrl || "";
        if (!imageElement || !dataUrl.startsWith("data:image/")) {
          return;
        }

        const pdfImageKey = `pdf-auto:${sourcePageNumber}:${exampleIndex}`;
        const existingAuto = existingAutoByKey.get(pdfImageKey);
        syncedImages.push({
          ...existingAuto,
          fileName: exampleImage.fileName || `pdf-page-${sourcePageNumber}-example-${exampleIndex + 1}.png`,
          dataUrl,
          image: imageElement,
          sourceTag: "pdf-auto",
          pdfImageKey,
          sourcePageNumber,
          pageIndex: presentationPageIndex,
          aspectRatio: imageElement.width && imageElement.height
            ? imageElement.width / imageElement.height
            : (existingAuto?.aspectRatio || 4 / 3)
        });
      });
    });

    syncedImages = syncedImages.map((item, index) => {
      if (item?.sourceTag !== "pdf-clipboard") {
        return item;
      }

      const mappedPageIndex = getPdfPresentationPageIndexForSourcePageNumber(item?.sourcePageNumber);
      if (mappedPageIndex < 0) {
        return item;
      }

      return {
        ...item,
        pageIndex: mappedPageIndex
      };
    });
  }

  state.images = applyDefaultImageLayouts(syncedImages);
  state.pdf.autoImageSyncKey = nextSyncKey;

  if (state.imageEditor.activeIndex >= state.images.length) {
    state.imageEditor.activeIndex = state.images.length ? state.images.length - 1 : -1;
  }

  renderImagePreviews();
  updateStageMediaToolUi();

  if (!options.skipDraw && !stagePanel.classList.contains("hidden")) {
    drawScene(state.mouthOpen);
  }
}

async function addStageImagesFromDataUrls(imageItems = [], options = {}) {
  const existingImages = [...state.images];
  const targetPageIndex = Number.isInteger(options.targetPageIndex)
    ? Math.max(0, options.targetPageIndex)
    : (stagePanel.classList.contains("hidden") ? 0 : state.previewPageIndex);
  const remainingSlots = Math.max(0, MAX_IMAGE_UPLOADS - existingImages.length);
  const itemsToLoad = imageItems
    .filter((item) => item && typeof item.dataUrl === "string" && item.dataUrl.startsWith("data:image/"))
    .slice(0, remainingSlots || MAX_IMAGE_UPLOADS);

  if (!itemsToLoad.length) {
    return 0;
  }

  const loadedImages = await Promise.all(
    itemsToLoad.map(async (item, index) => ({
      fileName: item.fileName || `pasted-example-${Date.now()}-${index + 1}.png`,
      dataUrl: item.dataUrl,
      image: await loadImageFromDataUrl(item.dataUrl),
      sourceTag: item.sourceTag || "pdf-clipboard",
      sourcePageNumber: Math.max(0, Math.round(Number(item?.sourcePageNumber) || 0)),
      pageIndex: Number.isInteger(item.pageIndex) ? Math.max(0, item.pageIndex) : undefined
    }))
  );

  const pageAssignedImages = assignPageIndexesToNewImages(existingImages, loadedImages, targetPageIndex);
  state.images = applyDefaultImageLayouts([...existingImages, ...pageAssignedImages]);
  state.imageEditor.activeIndex = state.images.length ? state.images.length - 1 : -1;
  if (getPdfRenderMode() === "context") {
    syncPdfContextStageImages({ skipDraw: true });
  }
  renderImagePreviews();
  drawScene(state.mouthOpen);
  return pageAssignedImages.length;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error(`Could not read ${file.name}.`));
    reader.readAsDataURL(file);
  });
}

function createLoadedVideo(url, options = {}) {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    const cleanup = () => {
      video.removeEventListener("loadedmetadata", handleReady);
      video.removeEventListener("loadeddata", handleReady);
      video.removeEventListener("error", handleError);
    };
    const handleReady = () => {
      cleanup();
      try {
        video.currentTime = 0;
      } catch (error) {
        console.error(error);
      }
      resolve(video);
    };
    const handleError = () => {
      cleanup();
      reject(new Error(options.errorMessage || "The video could not be loaded."));
    };

    video.preload = "auto";
    video.muted = options.muted !== false;
    video.defaultMuted = video.muted;
    video.loop = options.loop !== false;
    video.autoplay = true;
    video.playsInline = true;
    video.crossOrigin = "anonymous";
    video.setAttribute("playsinline", "");
    video.setAttribute("autoplay", "");
    video.setAttribute("preload", "auto");
    video.addEventListener("loadedmetadata", handleReady);
    video.addEventListener("loadeddata", handleReady);
    video.addEventListener("error", handleError);
    video.src = url;
    video.load();
  });
}

async function playVideoWithAutoplayRecovery(videoElement, options = {}) {
  if (!videoElement) {
    return false;
  }

  const requestedMuted = options.muted === true;
  const requestedVolume = Number.isFinite(Number(options.volume))
    ? clamp(Number(options.volume), 0, 1)
    : (requestedMuted ? 0 : 1);

  try {
    videoElement.defaultMuted = requestedMuted;
    videoElement.muted = requestedMuted;
    videoElement.volume = requestedVolume;
    await videoElement.play();
    return true;
  } catch (error) {
    console.error(error);
  }

  try {
    videoElement.defaultMuted = true;
    videoElement.muted = true;
    videoElement.volume = 0;
    await videoElement.play();

    if (!requestedMuted) {
      window.setTimeout(() => {
        try {
          videoElement.defaultMuted = false;
          videoElement.muted = false;
          videoElement.volume = requestedVolume;
        } catch (error) {
          console.error(error);
        }
      }, STRICT_AUTOPLAY_RECOVERY_MS);
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function playAudioWithRecovery(audioElement, options = {}) {
  if (!audioElement) {
    return false;
  }

  const requestedVolume = Number.isFinite(Number(options.volume))
    ? clamp(Number(options.volume), 0, 1)
    : STRICT_VOICE_VOLUME;

  try {
    audioElement.muted = false;
    audioElement.volume = requestedVolume;
    await audioElement.play();
    return true;
  } catch (error) {
    console.error(error);
  }

  try {
    audioElement.muted = true;
    audioElement.volume = 0;
    await audioElement.play();
    window.setTimeout(() => {
      try {
        audioElement.muted = false;
        audioElement.volume = requestedVolume;
      } catch (error) {
        console.error(error);
      }
    }, 180);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

function syncActiveStageVideo() {
  const activeVideoIndex = state.stageVideos.findIndex((item) => item.id === state.activeStageVideoId);
  const resolvedIndex = activeVideoIndex >= 0 ? activeVideoIndex : (state.stageVideos[0] ? 0 : -1);
  const activeVideo = resolvedIndex >= 0 ? clampStageVideoFrame(state.stageVideos[resolvedIndex]) : null;

  if (resolvedIndex >= 0) {
    state.stageVideos[resolvedIndex] = activeVideo;
  } else if (state.stageVideoEditor.activeId) {
    state.stageVideoEditor.activeId = "";
    state.stageVideoEditor.mode = "";
    state.stageVideoEditor.pointerId = null;
  }

  state.activeStageVideoId = activeVideo?.id || "";
  state.stageVideo = activeVideo || createEmptyStageVideoState();
  return state.stageVideo;
}

function getActiveStageVideo() {
  return syncActiveStageVideo();
}

function getStageVideoPageLabel(index) {
  return `Blue screen video ${index + 1}`;
}

function selectStageVideo(videoId, options = {}) {
  const nextVideo = state.stageVideos.find((item) => item.id === videoId) || null;
  if (!nextVideo) {
    return;
  }

  state.activeStageVideoId = nextVideo.id;
  state.stageVideoEditor.activeId = nextVideo.id;
  state.stageVideoEditor.mode = "";
  state.stageVideoEditor.pointerId = null;
  syncActiveStageVideo();
  updateStageVideoUi();

  if (!stagePanel.classList.contains("hidden") && !isPdfPresentationMode()) {
    void startStageVideoPlayback({ restart: options.restart !== false });
  } else {
    ensureStageMediaLoop();
  }

  drawScene(state.mouthOpen);
}

function removeStageVideoAt(index) {
  const item = state.stageVideos[index];
  if (!item) {
    return;
  }

  if (state.stageVideo.id === item.id) {
    pauseStageVideoPlayback();
  }

  if (item.element) {
    item.element.pause();
    item.element.removeAttribute("src");
    item.element.load();
  }

  if (item.url) {
    URL.revokeObjectURL(item.url);
  }

  state.stageVideos.splice(index, 1);
  if (state.stageVideoEditor.activeId === item.id) {
    state.stageVideoEditor.activeId = "";
    state.stageVideoEditor.mode = "";
    state.stageVideoEditor.pointerId = null;
  }
  syncActiveStageVideo();
  updateStageVideoUi();
  if (state.stageVideo.element && !stagePanel.classList.contains("hidden") && !isPdfPresentationMode()) {
    void startStageVideoPlayback({ restart: true });
  }
  drawScene(state.mouthOpen);
  setVideoStatus(state.stageVideos.length ? "The stage video library was updated." : "No stage video selected.");
}

async function applySmartCutoutToStageVideoAt(index, force = true) {
  const item = state.stageVideos[index];
  if (!item?.element) {
    return false;
  }

  const videoElement = item.element;
  const sampleWidth = Math.max(1, Math.min(320, item.width || videoElement.videoWidth || 320));
  const sampleHeight = Math.max(
    1,
    Math.round(sampleWidth / Math.max(0.1, (item.width || videoElement.videoWidth || 320) / Math.max(1, item.height || videoElement.videoHeight || 180)))
  );
  const sampleCanvas = document.createElement("canvas");
  sampleCanvas.width = sampleWidth;
  sampleCanvas.height = sampleHeight;
  const sampleContext = sampleCanvas.getContext("2d", { willReadFrequently: true });
  sampleContext.drawImage(videoElement, 0, 0, sampleWidth, sampleHeight);
  const imageData = sampleContext.getImageData(0, 0, sampleWidth, sampleHeight);
  const key = buildSmartCutoutKey(imageData, force);

  if (!key) {
    state.stageVideos[index] = {
      ...item,
      cutoutApplied: false,
      cutoutConfidence: 0,
      cutoutKey: null,
      cutoutSurface: null
    };
    syncActiveStageVideo();
    return false;
  }

  state.stageVideos[index] = {
    ...item,
    cutoutApplied: true,
    cutoutConfidence: key.confidence || 0,
    cutoutKey: key,
    cutoutSurface: item.cutoutSurface || null
  };
  syncActiveStageVideo();
  return true;
}

function renderStageVideoPreviewList() {
  if (!videoPreviewList) {
    return;
  }

  videoPreviewList.innerHTML = "";

  if (!state.stageVideos.length) {
    renderMediaEmptyState(
      videoPreviewList,
      "No stage videos yet",
      "Upload a stage video when you want motion behind the lesson. The active video can still be managed from the presentation screen."
    );
    updateStageMediaToolUi();
    return;
  }

  state.stageVideos.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "image-preview-card";
    card.classList.toggle("is-active", item.id === state.activeStageVideoId);

    const preview = document.createElement("video");
    preview.src = item.url;
    preview.muted = true;
    preview.loop = true;
    preview.playsInline = true;
    preview.preload = "metadata";

    const label = document.createElement("p");
    label.className = "image-preview-label";
    label.textContent = item.fileName;

    const meta = document.createElement("p");
    meta.className = "image-preview-meta";
    meta.textContent = item.cutoutApplied
      ? `${getStageVideoPageLabel(index)} | cutout ${Math.round((item.cutoutConfidence || 0) * 100)}%${item.id === state.activeStageVideoId ? " | active" : ""}`
      : (item.id === state.activeStageVideoId
        ? `${getStageVideoPageLabel(index)} | active`
        : getStageVideoPageLabel(index));

    const tools = document.createElement("div");
    tools.className = "image-preview-tools";

    const cutoutBtn = document.createElement("button");
    cutoutBtn.type = "button";
    cutoutBtn.className = "ghost-btn image-cutout-btn";
    cutoutBtn.textContent = item.cutoutApplied ? "Restore" : "Remove BG";
    cutoutBtn.addEventListener("click", async (event) => {
      event.stopPropagation();
      cutoutBtn.disabled = true;

      try {
        if (item.cutoutApplied) {
          state.stageVideos[index] = {
            ...state.stageVideos[index],
            cutoutApplied: false,
            cutoutConfidence: 0,
            cutoutKey: null,
            cutoutSurface: null
          };
          syncActiveStageVideo();
          setVideoStatus(`${item.fileName} was restored to the original video.`);
        } else {
          const applied = await applySmartCutoutToStageVideoAt(index, true);
          setVideoStatus(
            applied
              ? `${item.fileName} now uses background removal on the blue screen.`
              : `${item.fileName} did not have a clear green/plain background to remove.`
          );
        }

        renderStageVideoPreviewList();
        drawScene(state.mouthOpen);
      } catch (error) {
        console.error(error);
        setVideoStatus(error.message || "Smart cutout could not finish for that video.");
      } finally {
        cutoutBtn.disabled = false;
      }
    });

    card.addEventListener("click", () => {
      selectStageVideo(item.id);
      setVideoStatus(`${item.fileName} is now active on the blue screen.`);
    });
    card.appendChild(preview);
    card.appendChild(label);
    card.appendChild(meta);
    const showOnScreenBtn = document.createElement("button");
    showOnScreenBtn.type = "button";
    showOnScreenBtn.className = "ghost-btn image-cutout-btn";
    showOnScreenBtn.textContent = "Show On Screen";
    showOnScreenBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      selectStageVideo(item.id);
      setVideoStatus(`${item.fileName} is now active on the blue screen.`);
    });

    tools.appendChild(cutoutBtn);
    tools.appendChild(showOnScreenBtn);
    card.appendChild(tools);
    videoPreviewList.appendChild(card);
  });

  videoPreviewList.classList.remove("hidden");
  updateStageMediaToolUi();
}

async function ensureDefaultIntroClip() {
  if (state.introPlayback.available === false) {
    return false;
  }

  if (state.introPlayback.element) {
    return true;
  }

  try {
    const introElement = await createLoadedVideo(resolveProjectAssetUrl(state.introPlayback.url || DEFAULT_INTRO_VIDEO_FILE), {
      muted: false,
      loop: false,
      errorMessage: "The default intro clip could not be loaded."
    });
    introElement.pause();
    try {
      introElement.currentTime = 0;
    } catch (error) {
      console.error(error);
    }
    introElement.volume = STRICT_VOICE_VOLUME;
    introElement.muted = false;
    state.introPlayback.element = introElement;
    state.introPlayback.durationMs = Number.isFinite(introElement.duration)
      ? Math.max(1000, Math.ceil(introElement.duration * 1000))
      : 0;
    state.introPlayback.available = true;
    setIntroClipStatus("The default intro clip is ready.");
    return true;
  } catch (error) {
    console.error(error);
    state.introPlayback.available = false;
    setIntroClipStatus("The default intro clip could not be loaded.");
    return false;
  }
}

function cancelStageMediaLoop() {
  if (state.mediaFrame) {
    cancelAnimationFrame(state.mediaFrame);
    state.mediaFrame = null;
  }
}

function shouldAnimateStageMedia() {
  return Boolean(
    state.stageVideo.url
    && state.stageVideo.element
    && !stagePanel.classList.contains("hidden")
    && !isPdfPresentationMode()
    && !state.speaking
    && !state.exportingVideo
  );
}

function ensureStageMediaLoop() {
  cancelStageMediaLoop();
  if (!shouldAnimateStageMedia()) {
    return;
  }

  const tick = () => {
    if (!shouldAnimateStageMedia()) {
      state.mediaFrame = null;
      return;
    }

    drawScene(state.mouthOpen);
    state.mediaFrame = requestAnimationFrame(tick);
  };

  state.mediaFrame = requestAnimationFrame(tick);
}

async function startStageVideoPlayback(options = {}) {
  syncActiveStageVideo();
  const videoElement = state.stageVideo.element;
  if (!videoElement) {
    cancelStageMediaLoop();
    return;
  }

  if (options.restart) {
    try {
      videoElement.currentTime = 0;
    } catch (error) {
      console.error(error);
    }
  }

  const playbackRate = Number.isFinite(Number(options.playbackRate)) && Number(options.playbackRate) > 0
    ? Number(options.playbackRate)
    : 1;
  try {
    videoElement.playbackRate = playbackRate;
    videoElement.preservesPitch = true;
    videoElement.mozPreservesPitch = true;
    videoElement.webkitPreservesPitch = true;
  } catch (error) {
    console.error(error);
  }

  try {
    const started = await playVideoWithAutoplayRecovery(videoElement, { muted: true, volume: 0 });
    if (!started) {
      setVideoStatus("The stage video could not autoplay on screen.");
      return;
    }
  } catch (error) {
    console.error(error);
  }

  ensureStageMediaLoop();
}

async function playIntroClipIfEnabled() {
  if (isPdfPresentationMode() || !state.introPlayback.enabled) {
    return;
  }

  const ready = await ensureDefaultIntroClip();
  if (!ready || !state.introPlayback.element) {
    return;
  }

  const introElement = state.introPlayback.element;
  state.introPlayback.previewVisible = false;
  state.introPlayback.active = true;
  state.mouthOpen = 0.12;
  updatePlaybackProgressUi(0, true);
  setStatus("Playing the intro clip first.");
  drawScene(0.12);

  try {
    introElement.loop = false;
    introElement.muted = false;
    introElement.volume = STRICT_VOICE_VOLUME;
    introElement.currentTime = 0;
  } catch (error) {
    console.error(error);
  }

  const introFinished = new Promise((resolve, reject) => {
    const handleEnded = () => resolve();
    const handleError = () => reject(new Error("The intro clip could not be played."));
    introElement.addEventListener("ended", handleEnded, { once: true });
    introElement.addEventListener("error", handleError, { once: true });
  });

  const tick = () => {
    if (!state.introPlayback.active) {
      return;
    }

    const duration = introElement.duration || (state.introPlayback.durationMs / 1000) || 1;
    const progress = clamp((introElement.currentTime || 0) / duration, 0, 1);
    updatePlaybackProgressUi(progress, true);
    drawScene(0.12);

    if (!introElement.paused && !introElement.ended) {
      state.animationFrame = requestAnimationFrame(tick);
    }
  };

  try {
    const started = await playVideoWithAutoplayRecovery(introElement, { muted: false, volume: STRICT_VOICE_VOLUME });
    if (!started) {
      throw new Error("The intro clip could not be played.");
    }
    state.animationFrame = requestAnimationFrame(tick);
    await introFinished;
  } catch (error) {
    console.error(error);
    setIntroClipStatus("The intro clip could not start, so the lesson continued without it.");
  } finally {
    state.introPlayback.active = false;
    introElement.pause();
    try {
      introElement.currentTime = 0;
    } catch (error) {
      console.error(error);
    }
    updatePlaybackProgressUi(0, false);
    drawScene(0.12);
  }
}

async function playIntroClipForExport(options = {}) {
  if (isPdfPresentationMode() || !state.introPlayback.enabled) {
    return false;
  }

  const ready = await ensureDefaultIntroClip();
  if (!ready || !state.introPlayback.element) {
    return false;
  }

  const introElement = state.introPlayback.element;
  const playbackRate = Number.isFinite(Number(options.playbackRate)) && Number(options.playbackRate) > 0
    ? Number(options.playbackRate)
    : 1;
  state.introPlayback.previewVisible = false;
  state.introPlayback.active = true;
  state.mouthOpen = 0.12;
  updatePlaybackProgressUi(0, true);
  drawScene(0.12);

  try {
    introElement.pause();
    introElement.loop = false;
    introElement.muted = true;
    introElement.volume = 0;
    introElement.playbackRate = playbackRate;
    introElement.currentTime = 0;

    const duration = introElement.duration || (state.introPlayback.durationMs / 1000) || 0;
    if (!duration) {
      return false;
    }

    const introFinished = new Promise((resolve, reject) => {
      const cleanup = () => {
        introElement.removeEventListener("ended", handleEnded);
        introElement.removeEventListener("error", handleError);
      };
      const handleEnded = () => {
        cleanup();
        resolve();
      };
      const handleError = () => {
        cleanup();
        reject(new Error("The intro clip could not be rendered during export."));
      };
      introElement.addEventListener("ended", handleEnded, { once: true });
      introElement.addEventListener("error", handleError, { once: true });
    });

    const tick = () => {
      if (!state.introPlayback.active) {
        return;
      }

      const progress = clamp((introElement.currentTime || 0) / duration, 0, 1);
      updatePlaybackProgressUi(progress, true);
      drawScene(0.12);

      if (!introElement.paused && !introElement.ended) {
        requestAnimationFrame(tick);
      }
    };

    const started = await playVideoWithAutoplayRecovery(introElement, { muted: true, volume: 0 });
    if (!started) {
      throw new Error("The intro clip could not be played during export.");
    }

    requestAnimationFrame(tick);
    await introFinished;
    updatePlaybackProgressUi(1, true);
    drawScene(0.12);
    await delay(80);
    return true;
  } finally {
    state.introPlayback.active = false;
    introElement.pause();
    try {
      introElement.currentTime = 0;
      introElement.playbackRate = 1;
    } catch (error) {
      console.error(error);
    }
    updatePlaybackProgressUi(0, false);
    drawScene(0.12);
  }
}

async function renderNarrationTimelineForExport(durationMs, playbackRate = getLessonPlaybackRate(), options = {}) {
  const safeDurationMs = Math.max(1000, Math.round(durationMs || 1000));
  const safePlaybackRate = Number.isFinite(Number(playbackRate)) && Number(playbackRate) > 0
    ? Number(playbackRate)
    : 1;
  const renderSpeedMultiplier = Number.isFinite(Number(options.renderSpeedMultiplier)) && Number(options.renderSpeedMultiplier) > 0
    ? Number(options.renderSpeedMultiplier)
    : getExportRenderSpeedMultiplier();
  const frameRate = getAcceleratedExportCaptureRate(getLessonExportCaptureRate(), renderSpeedMultiplier);
  const frameDurationMs = Math.max(4, Math.round(1000 / frameRate));
  const narrationTimelineMs = Math.max(1, Math.round(safeDurationMs / safePlaybackRate));
  const startedAt = performance.now();
  const visualLagMs = Math.max(0, Math.round((Number(SPEECH_SYNC_VISUAL_PROGRESS_LAG) || 0) * 1000));
  let lastDisplayedLength = 0;
  let lastDisplayedAdvanceProgress = 0;

  state.displayedText = "";
  state.speaking = true;
  syncLessonPlaybackProgressUi(0, true);
  drawScene(0.12);

  while (true) {
    const elapsedMs = Math.min(
      narrationTimelineMs,
      (performance.now() - startedAt) * renderSpeedMultiplier
    );
    const syncElapsedMs = Math.max(0, elapsedMs - visualLagMs);
    const progress = clamp(elapsedMs / narrationTimelineMs, 0, 1);
    const syncFrame = getSpeechSyncFrame(state.text, syncElapsedMs, narrationTimelineMs);
    let nextDisplayedText = syncFrame.displayedText;
    const nextDisplayedLength = nextDisplayedText.length;

    if (nextDisplayedLength > lastDisplayedLength) {
      lastDisplayedLength = nextDisplayedLength;
      lastDisplayedAdvanceProgress = progress;
    } else if ((progress - lastDisplayedAdvanceProgress) >= 0.12) {
      const recoveryProgress = clamp((progress - 0.12) / 0.88, 0, 1);
      const recoveryText = getVisibleTextForProgress(state.text, recoveryProgress);
      if (recoveryText.length > nextDisplayedLength) {
        nextDisplayedText = recoveryText;
        lastDisplayedLength = recoveryText.length;
        lastDisplayedAdvanceProgress = progress;
      }
    }

    const remainingNarrationMs = Math.max(0, narrationTimelineMs - elapsedMs);
    if (remainingNarrationMs <= Math.max(240, visualLagMs)) {
      nextDisplayedText = state.text;
      lastDisplayedLength = state.text.length;
      lastDisplayedAdvanceProgress = 1;
    }

    state.displayedText = nextDisplayedText;
    syncLessonPlaybackProgressUi(progress, true);
    updateTaskProgressUi(0.26 + (progress * 0.54), true, { mirrorStage: true });
    state.mouthOpen = syncFrame.mouthActive ? getFallbackMouth(syncFrame.speechElapsedMs) : 0.12;
    drawScene(state.mouthOpen);

    if (progress >= 1) {
      break;
    }

    await delay(frameDurationMs);
  }
}

async function renderPdfTimelineForExport(renderMode = getPdfRenderMode(), options = {}) {
  const safeRenderMode = renderMode === "exact" ? "exact" : "context";
  const renderSpeedMultiplier = Number.isFinite(Number(options.renderSpeedMultiplier)) && Number(options.renderSpeedMultiplier) > 0
    ? Number(options.renderSpeedMultiplier)
    : getExportRenderSpeedMultiplier();
  const frameRate = getAcceleratedExportCaptureRate(getPdfExportCaptureRate(safeRenderMode), renderSpeedMultiplier);
  const frameDurationMs = Math.max(4, Math.round(1000 / frameRate));
  const targetTimelineMs = Math.max(1, Math.round(state.pdf.totalDurationMs || 1000));
  const timelineAdvanceRate = Math.max(0.1, getPdfPlaybackRate()) * renderSpeedMultiplier;
  const startedAt = performance.now();

  state.pdf.audioDriven = false;
  state.pdf.paused = false;
  state.pdf.timelineStartedAt = 0;
  state.pdf.timelineStartOffsetMs = 0;
  state.pdf.currentTimeMs = 0;
  state.speaking = true;
  state.mouthOpen = 0.12;
  syncPdfPreviewPageFromTime(0);
  updatePlaybackProgressUi(0, true);
  drawScene(0.12);

  while (true) {
    const elapsedMs = Math.min(
      targetTimelineMs,
      (performance.now() - startedAt) * timelineAdvanceRate
    );
    const progress = clamp(elapsedMs / targetTimelineMs, 0, 1);
    state.pdf.currentTimeMs = elapsedMs;
    syncPdfPreviewPageFromTime(elapsedMs);
    updatePlaybackProgressUi(progress, true);
    updateTaskProgressUi(0.26 + (progress * 0.54), true, { mirrorStage: true });

    const activeSelectionIndex = getPdfSelectionIndexForTime(elapsedMs);
    const activePage = getPdfPresentationPages()[activeSelectionIndex] || null;
    const visibleState = safeRenderMode === "context"
      ? getPdfContextVisibleText(activePage, activeSelectionIndex)
      : null;
    state.mouthOpen = visibleState?.mouthActive
      ? getFallbackMouth(visibleState.speechElapsedMs)
      : 0.12;
    drawScene(state.mouthOpen);

    if (progress >= 1) {
      break;
    }

    await delay(frameDurationMs);
  }
}

function pauseStageVideoPlayback() {
  if (state.stageVideo.element) {
    state.stageVideo.element.pause();
  }

  cancelStageMediaLoop();
}

function updateStageVideoUi() {
  syncActiveStageVideo();
  const hasVideo = Boolean(state.stageVideo.url);

  if (videoPreview) {
    if (hasVideo) {
      videoPreview.src = state.stageVideo.url;
      videoPreview.classList.remove("hidden");
    } else {
      videoPreview.pause();
      videoPreview.removeAttribute("src");
      videoPreview.load();
      videoPreview.classList.add("hidden");
    }
  }

  renderStageVideoPreviewList();

  if (clearVideoBtn) {
    clearVideoBtn.disabled = !state.stageVideos.length;
  }

  if (stageVideoUploadBtn) {
    stageVideoUploadBtn.disabled = isPdfPresentationMode();
  }
}

async function handleVideoSelection(event) {
  const files = Array.from(event.target.files || []);

  if (!files.length) {
    updateStageVideoUi();
    return;
  }

  stopPlayback(false);
  updateTaskProgressUi(0.18, true, { label: "Preparing stage video" });

  try {
    const loadedVideos = await Promise.all(
      files.map(async (file, index) => {
        const nextUrl = URL.createObjectURL(file);
        try {
          const videoElement = await createLoadedVideo(nextUrl, {
            muted: true,
            loop: true
          });
          const durationMs = Number.isFinite(videoElement.duration)
            ? Math.max(1000, Math.ceil(videoElement.duration * 1000))
            : 0;

          return {
            id: `${Date.now()}-${index}-${Math.random().toString(36).slice(2, 8)}`,
            url: nextUrl,
            fileName: file.name,
            blob: file,
            element: videoElement,
            durationMs,
            width: videoElement.videoWidth || 0,
            height: videoElement.videoHeight || 0,
            posterDataUrl: "",
            cutoutApplied: false,
            cutoutConfidence: 0,
            cutoutKey: null,
            cutoutSurface: null,
            aspectRatio: (videoElement.videoWidth && videoElement.videoHeight)
              ? (videoElement.videoWidth / videoElement.videoHeight)
              : (16 / 9),
            frameX: NaN,
            frameY: NaN,
            frameWidth: NaN,
            frameHeight: NaN
          };
        } catch (error) {
          URL.revokeObjectURL(nextUrl);
          throw error;
        }
      })
    );

    state.stageVideos = [...state.stageVideos, ...loadedVideos];
    if (!state.activeStageVideoId && loadedVideos[0]) {
      state.activeStageVideoId = loadedVideos[0].id;
    }
    syncActiveStageVideo();

    updateStageVideoUi();
    if (!stagePanel.classList.contains("hidden") && !isPdfPresentationMode()) {
      await startStageVideoPlayback({ restart: true });
    } else {
      ensureStageMediaLoop();
    }
    drawScene(state.mouthOpen);
    setVideoStatus(`${loadedVideos.length} video${loadedVideos.length === 1 ? "" : "s"} loaded. Click any preview to make it active, then drag or resize it directly on the blue screen.`);
    setStatus(`Stage video library updated. The active blue screen video is ${state.stageVideo.fileName}, and exports will use ${getExportQualityLabel()} quality.`);
    updateTaskProgressUi(1, true, { label: "Stage video ready" });
  } catch (error) {
    console.error(error);
    setVideoStatus(error.message || "Video upload failed.");
    setStatus(error.message || "Video upload failed.");
  } finally {
    resetTaskProgressUi();
    event.target.value = "";
  }
}

function resetStageVideoState() {
  pauseStageVideoPlayback();

  state.stageVideos.forEach((item) => {
    if (item.element) {
      item.element.pause();
      item.element.removeAttribute("src");
      item.element.load();
    }

    if (item.url) {
      URL.revokeObjectURL(item.url);
    }
  });

  state.stageVideos = [];
  state.activeStageVideoId = "";
  state.stageVideo = createEmptyStageVideoState();
  state.stageVideoEditor.activeId = "";
  state.stageVideoEditor.hoverMode = "";
  state.stageVideoEditor.mode = "";
  state.stageVideoEditor.pointerId = null;
  state.stageVideoRenderBox = null;

  updateStageVideoUi();
}

function getStageVideoDrawArea() {
  const metrics = getPresentationTemplateMetrics();
  return {
    x: 0,
    y: metrics.videoTopInset,
    width: canvas.width,
    height: canvas.height - metrics.videoTopInset
  };
}

function getStageVideoAspectRatio(videoItem) {
  return videoItem?.aspectRatio
    || ((videoItem?.width && videoItem?.height) ? (videoItem.width / videoItem.height) : (16 / 9));
}

function getDefaultStageVideoFrame(videoItem) {
  const area = getStageVideoDrawArea();
  const aspectRatio = Math.max(0.1, getStageVideoAspectRatio(videoItem));
  let width = clamp(area.width * 0.34, 220, Math.max(220, area.width * 0.82));
  let height = width / aspectRatio;
  const maxHeight = area.height * 0.72;

  if (height > maxHeight) {
    height = maxHeight;
    width = height * aspectRatio;
  }

  return {
    x: clamp(area.x + area.width - width - 36, area.x, area.x + Math.max(0, area.width - width)),
    y: clamp(area.y + 32, area.y, area.y + Math.max(0, area.height - height)),
    width,
    height
  };
}

function normalizeStageVideoFrame(videoItem) {
  const aspectRatio = Math.max(0.1, getStageVideoAspectRatio(videoItem));
  const fallback = getDefaultStageVideoFrame({ ...videoItem, aspectRatio });

  return {
    ...videoItem,
    aspectRatio,
    frameX: Number.isFinite(videoItem?.frameX) ? videoItem.frameX : fallback.x,
    frameY: Number.isFinite(videoItem?.frameY) ? videoItem.frameY : fallback.y,
    frameWidth: Number.isFinite(videoItem?.frameWidth) ? videoItem.frameWidth : fallback.width,
    frameHeight: Number.isFinite(videoItem?.frameHeight) ? videoItem.frameHeight : fallback.height
  };
}

function clampStageVideoFrame(videoItem) {
  const normalized = normalizeStageVideoFrame(videoItem);
  const area = getStageVideoDrawArea();
  const minWidth = 140;
  const maxWidth = Math.max(
    minWidth,
    Math.min(area.width, area.height * normalized.aspectRatio)
  );
  const width = clamp(normalized.frameWidth, minWidth, maxWidth);
  const height = width / normalized.aspectRatio;
  const maxX = area.x + area.width - width;
  const maxY = area.y + area.height - height;

  return {
    ...normalized,
    frameWidth: width,
    frameHeight: height,
    frameX: clamp(normalized.frameX, area.x, Math.max(area.x, maxX)),
    frameY: clamp(normalized.frameY, area.y, Math.max(area.y, maxY))
  };
}

function commitStageVideoUpdate(videoId, updates) {
  const videoIndex = state.stageVideos.findIndex((item) => item.id === videoId);
  if (videoIndex < 0) {
    return null;
  }

  state.stageVideos[videoIndex] = {
    ...state.stageVideos[videoIndex],
    ...updates
  };

  if (!state.activeStageVideoId || state.activeStageVideoId === videoId) {
    state.activeStageVideoId = videoId;
    state.stageVideo = state.stageVideos[videoIndex];
  }

  return state.stageVideos[videoIndex];
}

function drawVideoCover(source, area, options = {}) {
  if (!source) {
    return;
  }

  const isVideoElement = typeof HTMLVideoElement !== "undefined" && source instanceof HTMLVideoElement;
  if (isVideoElement && source.readyState < 2) {
    return;
  }

  const sourceWidth = Number(options.sourceWidth) || source.videoWidth || source.width || 1;
  const sourceHeight = Number(options.sourceHeight) || source.videoHeight || source.height || 1;
  const scale = Math.max(area.width / sourceWidth, area.height / sourceHeight);
  const drawWidth = Math.max(1, sourceWidth * scale);
  const drawHeight = Math.max(1, sourceHeight * scale);
  const drawX = area.x + ((area.width - drawWidth) / 2);
  const drawY = area.y + ((area.height - drawHeight) / 2);

  ctx.save();
  ctx.beginPath();
  ctx.rect(area.x, area.y, area.width, area.height);
  ctx.clip();
  ctx.globalAlpha = Number.isFinite(options.opacity) ? options.opacity : 1;
  ctx.drawImage(source, drawX, drawY, drawWidth, drawHeight);
  ctx.globalAlpha = 1;
  ctx.restore();
}

function getStageVideoCutoutSource(videoItem) {
  const videoElement = videoItem?.element;
  if (!videoElement || !videoItem?.cutoutApplied || !videoItem.cutoutKey || videoElement.readyState < 2) {
    return videoElement;
  }

  const sourceWidth = videoItem.width || videoElement.videoWidth || 1;
  const sourceHeight = videoItem.height || videoElement.videoHeight || 1;
  const maxDimension = Math.max(sourceWidth, sourceHeight);
  const scale = maxDimension > 960 ? (960 / maxDimension) : 1;
  const targetWidth = Math.max(1, Math.round(sourceWidth * scale));
  const targetHeight = Math.max(1, Math.round(sourceHeight * scale));

  if (
    !videoItem.cutoutSurface
    || videoItem.cutoutSurface.canvas.width !== targetWidth
    || videoItem.cutoutSurface.canvas.height !== targetHeight
  ) {
    const surfaceCanvas = document.createElement("canvas");
    surfaceCanvas.width = targetWidth;
    surfaceCanvas.height = targetHeight;
    const surfaceContext = surfaceCanvas.getContext("2d", { willReadFrequently: true });
    videoItem.cutoutSurface = {
      canvas: surfaceCanvas,
      context: surfaceContext
    };
  }

  const { canvas: surfaceCanvas, context: surfaceContext } = videoItem.cutoutSurface;
  surfaceContext.clearRect(0, 0, targetWidth, targetHeight);
  surfaceContext.drawImage(videoElement, 0, 0, targetWidth, targetHeight);

  const imageData = surfaceContext.getImageData(0, 0, targetWidth, targetHeight);
  const { data } = imageData;
  const tolerance = getCutoutKeyTolerance(videoItem.cutoutKey);
  const feather = getCutoutFeather();
  for (let offset = 0; offset < data.length; offset += 4) {
    if (!isLikelyCutoutBackgroundPixel(data[offset], data[offset + 1], data[offset + 2], data[offset + 3], videoItem.cutoutKey)) {
      const distance = getColorDistance(data[offset], data[offset + 1], data[offset + 2], videoItem.cutoutKey);
      const edgeFactor = distance <= (tolerance + feather)
        ? clamp(1 - ((distance - tolerance) / Math.max(1, feather)), 0, 1)
        : 0;
      softenForegroundSpill(data, offset, videoItem.cutoutKey, edgeFactor);
      continue;
    }

    data[offset + 3] = 0;
  }

  surfaceContext.putImageData(imageData, 0, 0);
  return surfaceCanvas;
}

function drawStageVideoLayer() {
  const videoElement = state.stageVideo.element;
  state.stageVideoRenderBox = null;
  if (!videoElement || videoElement.readyState < 2 || state.exportFallbackMode) {
    return;
  }

  const interactivePreview = canvas === previewCanvas && !stagePanel.classList.contains("hidden");
  const videoFrame = clampStageVideoFrame(state.stageVideo);
  if (
    videoFrame.frameX !== state.stageVideo.frameX
    || videoFrame.frameY !== state.stageVideo.frameY
    || videoFrame.frameWidth !== state.stageVideo.frameWidth
    || videoFrame.frameHeight !== state.stageVideo.frameHeight
  ) {
    commitStageVideoUpdate(videoFrame.id, videoFrame);
  }

  const area = {
    x: videoFrame.frameX,
    y: videoFrame.frameY,
    width: videoFrame.frameWidth,
    height: videoFrame.frameHeight
  };
  const drawSource = getStageVideoCutoutSource(state.stageVideo) || videoElement;
  ctx.save();
  ctx.shadowColor = "rgba(12, 33, 53, 0.28)";
  ctx.shadowBlur = 24;
  ctx.shadowOffsetY = 12;
  drawRoundedRect(area.x, area.y, area.width, area.height, 24, "rgba(255,255,255,0.16)");
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(area.x + 24, area.y);
  ctx.arcTo(area.x + area.width, area.y, area.x + area.width, area.y + area.height, 24);
  ctx.arcTo(area.x + area.width, area.y + area.height, area.x, area.y + area.height, 24);
  ctx.arcTo(area.x, area.y + area.height, area.x, area.y, 24);
  ctx.arcTo(area.x, area.y, area.x + area.width, area.y, 24);
  ctx.closePath();
  ctx.clip();
  drawVideoCover(drawSource, area, {
    sourceWidth: state.stageVideo.width || videoElement.videoWidth || 1,
    sourceHeight: state.stageVideo.height || videoElement.videoHeight || 1,
    opacity: state.stageVideo.cutoutApplied ? 1 : 0.94
  });
  applyScreenMatchOverlay(
    area,
    state.stageVideo.cutoutApplied
      ? (0.18 + (getCutoutScreenBlendStrength() * 0.82))
      : 0.22
  );
  ctx.restore();

  const handleSize = 18;
  const handleX = area.x + area.width - handleSize - 10;
  const handleY = area.y + area.height - handleSize - 10;
  const isActive = interactivePreview && state.stageVideoEditor.activeId === state.stageVideo.id;
  const isHovering = interactivePreview && state.stageVideoEditor.hoverMode;

  if (interactivePreview) {
    state.stageVideoRenderBox = {
      id: state.stageVideo.id,
      x: area.x,
      y: area.y,
      width: area.width,
      height: area.height,
      handleX,
      handleY,
      handleSize
    };
  }

  if (interactivePreview && (isActive || isHovering)) {
    ctx.save();
    ctx.strokeStyle = "#0d7ea9";
    ctx.lineWidth = 4;
    ctx.strokeRect(area.x - 2, area.y - 2, area.width + 4, area.height + 4);
    drawRoundedRect(handleX, handleY, handleSize, handleSize, 6, "#0d7ea9");
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(handleX + 5, handleY + handleSize - 5);
    ctx.lineTo(handleX + handleSize - 5, handleY + 5);
    ctx.stroke();
    ctx.restore();
  }
}

function drawIntroScene() {
  const introElement = state.introPlayback.element;
  state.stageVideoRenderBox = null;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#08131d";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawVideoCover(introElement, {
    x: 0,
    y: 0,
    width: canvas.width,
    height: canvas.height
  });
  requestCanvasExportFrame();
}

function getBorderPixelSummary(imageData) {
  const { width, height, data } = imageData;
  if (!width || !height) {
    return null;
  }

  const samples = [];
  const stepX = Math.max(1, Math.round(width / 80));
  const stepY = Math.max(1, Math.round(height / 80));
  const pushPixel = (x, y) => {
    const offset = ((y * width) + x) * 4;
    const alpha = data[offset + 3];
    if (alpha < 16) {
      return;
    }

    samples.push([
      data[offset],
      data[offset + 1],
      data[offset + 2]
    ]);
  };

  for (let x = 0; x < width; x += stepX) {
    pushPixel(x, 0);
    pushPixel(x, height - 1);
  }

  for (let y = stepY; y < height - 1; y += stepY) {
    pushPixel(0, y);
    pushPixel(width - 1, y);
  }

  if (!samples.length) {
    return null;
  }

  const average = samples.reduce((sum, sample) => ({
    r: sum.r + sample[0],
    g: sum.g + sample[1],
    b: sum.b + sample[2]
  }), { r: 0, g: 0, b: 0 });

  const mean = {
    r: average.r / samples.length,
    g: average.g / samples.length,
    b: average.b / samples.length
  };

  let variance = 0;
  samples.forEach((sample) => {
    const dr = sample[0] - mean.r;
    const dg = sample[1] - mean.g;
    const db = sample[2] - mean.b;
    variance += (dr * dr) + (dg * dg) + (db * db);
  });

  variance /= samples.length;
  return {
    r: mean.r,
    g: mean.g,
    b: mean.b,
    variance
  };
}

function buildSmartCutoutKey(imageData, force = false) {
  const summary = getBorderPixelSummary(imageData);
  if (!summary) {
    return null;
  }

  const maxChannel = Math.max(summary.r, summary.g, summary.b);
  const minChannel = Math.min(summary.r, summary.g, summary.b);
  const greenBias = summary.g - Math.max(summary.r, summary.b);
  const greenish = greenBias > 18 && summary.g > 70;
  const neutralUniform = summary.variance < 1800 && (maxChannel - minChannel) < 26;
  const candidate = greenish || neutralUniform || (force && summary.variance < 12000);

  if (!candidate) {
    return null;
  }

  const confidence = clamp(
    (greenish ? 0.74 : 0.42)
    + (neutralUniform ? 0.18 : 0)
    - Math.min(0.34, summary.variance / 24000),
    0,
    1
  );

  return {
    r: Math.round(summary.r),
    g: Math.round(summary.g),
    b: Math.round(summary.b),
    tolerance: getCutoutTolerance(force),
    toleranceBoost: force ? 10 : 0,
    greenish,
    confidence
  };
}

function getColorDistance(r, g, b, key) {
  const dr = r - key.r;
  const dg = g - key.g;
  const db = b - key.b;
  return Math.sqrt((dr * dr) + (dg * dg) + (db * db));
}

function isLikelyCutoutBackgroundPixel(r, g, b, a, key) {
  if (a < 16) {
    return true;
  }

  const tolerance = getCutoutKeyTolerance(key);
  const distance = getColorDistance(r, g, b, key);
  if (distance <= tolerance) {
    return true;
  }

  if (!key.greenish) {
    return false;
  }

  return distance <= (tolerance + 28)
    && g > (r + 12)
    && g > (b + 10)
    && g > 68;
}

async function applySmartCutoutToDataUrl(dataUrl, options = {}) {
  const sourceImage = await loadImageFromDataUrl(dataUrl);
  const scale = Math.min(1, STAGE_VIDEO_MAX_DIMENSION / Math.max(sourceImage.width, sourceImage.height, 1));
  const targetWidth = Math.max(1, Math.round(sourceImage.width * scale));
  const targetHeight = Math.max(1, Math.round(sourceImage.height * scale));
  const workCanvas = document.createElement("canvas");
  workCanvas.width = targetWidth;
  workCanvas.height = targetHeight;
  const workContext = workCanvas.getContext("2d", { willReadFrequently: true });
  workContext.drawImage(sourceImage, 0, 0, targetWidth, targetHeight);

  const imageData = workContext.getImageData(0, 0, targetWidth, targetHeight);
  const key = buildSmartCutoutKey(imageData, options.force === true);
  if (!key || (!options.force && key.confidence < 0.46)) {
    return {
      dataUrl,
      image: sourceImage,
      cutoutApplied: false,
      confidence: key?.confidence || 0
    };
  }

  const { width, height, data } = imageData;
  const tolerance = getCutoutKeyTolerance(key);
  const feather = getCutoutFeather();
  const visited = new Uint8Array(width * height);
  const backgroundMask = new Uint8Array(width * height);
  const queue = [];
  const tryEnqueue = (x, y) => {
    if (x < 0 || y < 0 || x >= width || y >= height) {
      return;
    }

    const index = (y * width) + x;
    if (visited[index]) {
      return;
    }

    const offset = index * 4;
    if (!isLikelyCutoutBackgroundPixel(data[offset], data[offset + 1], data[offset + 2], data[offset + 3], key)) {
      return;
    }

    visited[index] = 1;
    backgroundMask[index] = 1;
    queue.push(index);
  };

  for (let x = 0; x < width; x += 1) {
    tryEnqueue(x, 0);
    tryEnqueue(x, height - 1);
  }

  for (let y = 1; y < height - 1; y += 1) {
    tryEnqueue(0, y);
    tryEnqueue(width - 1, y);
  }

  const yieldToUi = () => new Promise((r) => setTimeout(r, 0));

  for (let head = 0; head < queue.length; head += 1) {
    if (head > 0 && head % 35000 === 0) await yieldToUi();
    const index = queue[head];
    const x = index % width;
    const y = Math.floor(index / width);
    tryEnqueue(x + 1, y);
    tryEnqueue(x - 1, y);
    tryEnqueue(x, y + 1);
    tryEnqueue(x, y - 1);
  }

  let removedPixels = 0;
  for (let index = 0; index < backgroundMask.length; index += 1) {
    if (index > 0 && index % 150000 === 0) await yieldToUi();
    if (!backgroundMask[index]) {
      continue;
    }

    data[(index * 4) + 3] = 0;
    removedPixels += 1;
  }

  for (let index = 0; index < backgroundMask.length; index += 1) {
    if (index > 0 && index % 100000 === 0) await yieldToUi();
    if (backgroundMask[index]) {
      continue;
    }

    const x = index % width;
    const y = Math.floor(index / width);
    let touchesRemoved = false;
    for (let offsetY = -1; offsetY <= 1 && !touchesRemoved; offsetY += 1) {
      for (let offsetX = -1; offsetX <= 1; offsetX += 1) {
        const nextX = x + offsetX;
        const nextY = y + offsetY;
        if (nextX < 0 || nextY < 0 || nextX >= width || nextY >= height) {
          continue;
        }

        if (backgroundMask[(nextY * width) + nextX]) {
          touchesRemoved = true;
          break;
        }
      }
    }

    if (!touchesRemoved) {
      continue;
    }

    const pixelOffset = index * 4;
    const distance = getColorDistance(data[pixelOffset], data[pixelOffset + 1], data[pixelOffset + 2], key);
    if (distance > tolerance + feather) {
      continue;
    }

    const edgeFactor = clamp(1 - ((distance - tolerance) / Math.max(1, feather)), 0, 1);
    const alphaFactor = clamp((distance - tolerance) / Math.max(1, feather), 0.08, 1);
    softenForegroundSpill(data, pixelOffset, key, edgeFactor);
    data[pixelOffset + 3] = Math.round(data[pixelOffset + 3] * alphaFactor);
  }

  workContext.putImageData(imageData, 0, 0);
  if (!removedPixels) {
    return {
      dataUrl,
      image: sourceImage,
      cutoutApplied: false,
      confidence: key.confidence
    };
  }

  const nextDataUrl = workCanvas.toDataURL("image/png");
  return {
    dataUrl: nextDataUrl,
    image: await loadImageFromDataUrl(nextDataUrl),
    cutoutApplied: true,
    confidence: key.confidence
  };
}

async function applySmartCutoutToImageAt(index, force = true) {
  const item = state.images[index];
  if (!item) {
    return;
  }

  const sourceDataUrl = item.originalDataUrl || item.dataUrl;
  const result = await applySmartCutoutToDataUrl(sourceDataUrl, { force });
  state.images[index] = {
    ...item,
    dataUrl: result.cutoutApplied ? result.dataUrl : sourceDataUrl,
    image: result.cutoutApplied ? result.image : await loadImageFromDataUrl(sourceDataUrl),
    originalDataUrl: sourceDataUrl,
    cutoutApplied: result.cutoutApplied,
    cutoutConfidence: result.confidence || 0
  };
}

async function autoFetchSmartBRoll() {
  if (state.exportingVideo) return; 
  
  const currentText = lessonInput?.value.trim();
  if (!currentText) {
     setStatus("No lesson text found! Please write a script first before generating B-Roll.");
     return;
  }
  
  setStatus("🎬 Analyzing script and fetching cinematic B-Roll imagery...");
  
  const words = currentText.split(/\s+/).filter(w => w.length > 5 && !w.match(/jump|add|equal|quiz|answer|times|this|that/i));
  const keyword = words.length > 0 ? words[Math.floor(Math.random() * Math.min(3, words.length))].replace(/[^a-zA-Z]/g, "") : "Science";
  
  let bRollUrl = `https://picsum.photos/seed/${encodeURIComponent(keyword)}/1280/720`;
  
  try {
     const url = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${encodeURIComponent(keyword)}&origin=*`;
     const res = await fetch(url);
     const data = await res.json();
     const pages = data.query.pages;
     const pageId = Object.keys(pages)[0];
     if (pageId !== "-1" && pages[pageId].original) {
         bRollUrl = pages[pageId].original.source; 
     }
  } catch (e) {
     console.warn("Wikipedia API failed, falling back to Picsum.");
  }
  
  try {
      const res = await fetch(bRollUrl);
      const blob = await res.blob();
      const reader = new FileReader();
      reader.onloadend = async () => {
         const dataUrl = reader.result;
         
         const imageObj = await loadImageFromDataUrl(dataUrl);
         state.images.push({
           dataUrl,
           width: imageObj.width,
           height: imageObj.height,
           renderWidth: Math.min(800, imageObj.width),
           renderHeight: Math.min(450, imageObj.height),
           x: 60,
           y: 120 + (state.images.length * 30) % 150, 
           aspectRatio: imageObj.width / imageObj.height,
           active: true,
           sourceTag: "b-roll",
           hasSmartCutout: false
         });
         
         state.imageEditor.activeIndex = state.images.length - 1;
         setStatus(`🎬 Successfully fetched and appended cinematic B-Roll for topic: ${keyword.toUpperCase()}`);
         updateStageMediaToolUi();
         requestCanvasExportFrame();
      };
      reader.readAsDataURL(blob);
  } catch (error) {
     setStatus("Failed to fetch B-Roll. Please check your internet connection.");
  }
}

async function autoTeachSelectedImage() {
  if (isPdfPresentationMode()) {
    setStatus("Auto-Teach is only available for individually uploaded Stage Images.");
    return;
  }
  const selectedImage = state.images[state.imageEditor.activeIndex];
  if (!selectedImage || !selectedImage.dataUrl) {
    setStatus("Please select an image on the board first to auto-teach.");
    return;
  }
  
  setStatus("Engaging Moondream2 Vision AI... (The brain takes ~25 seconds to download/load if this is the first use!)");
  try {
    const response = await fetch("http://127.0.0.1:8426/api/vision/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        image: selectedImage.originalDataUrl || selectedImage.dataUrl,
        prompt: "Analyze this image and explain exactly what it teaches in a short, easy-to-read educational paragraph that a teacher could read to students. Do not use asterisks or formatting."
      })
    });
    
    const result = await response.json();
    if (!response.ok) {
       throw new Error(result.error || "Failed to analyze image.");
    }
    
    if (textInput && result.text) {
       textInput.value = result.text.trim();
       updateTextState(textInput.value);
       setStatus("Success! AI Vision generated the lesson script. You can edit it now.");
    }
  } catch (error) {
    setStatus(`Vision AI Error: ${error.message}`);
    console.error("AutoTeach Error:", error);
  }
}

function removeImageAt(index) {
  if (index < 0 || index >= state.images.length) {
    return;
  }

  state.images.splice(index, 1);
  state.imageEditor.activeIndex = -1;
  state.imageRenderBoxes = [];
  previewCanvas.style.cursor = "default";

  const contentPageCount = getPaginatedSlideContent(state.text, !state.text, state.previewPageIndex, false).pageCount;
  const maxPageIndex = Math.max(
    0,
    Math.max(contentPageCount, getImagePageCount()) - 1
  );
  state.previewPageIndex = clamp(state.previewPageIndex, 0, maxPageIndex);

  renderImagePreviews();
  drawScene(state.mouthOpen);
  setStatus(state.images.length ? "Image removed from the slide." : "All images removed from the slide.");
}

function getSelectedImageIndex() {
  if (
    Number.isInteger(state.imageEditor.activeIndex)
    && state.imageEditor.activeIndex >= 0
    && state.imageEditor.activeIndex < state.images.length
  ) {
    return state.imageEditor.activeIndex;
  }

  const visibleEntries = getImageEntriesForPage(state.previewPageIndex);
  if (visibleEntries.length) {
    return visibleEntries[visibleEntries.length - 1].index;
  }

  return state.images.length ? (state.images.length - 1) : -1;
}

function removeSelectedStageImage() {
  const imageIndex = getSelectedImageIndex();
  if (imageIndex < 0) {
    setStageMediaStatus("Select an image on the screen first.");
    return;
  }

  const fileName = state.images[imageIndex]?.fileName || "Selected image";
  removeImageAt(imageIndex);
  setStageMediaStatus(`${fileName} was removed from the presentation.`);
}

function clearAllStageImages() {
  if (!state.images.length) {
    setStageMediaStatus("There are no images to remove.");
    return;
  }

  state.images = [];
  state.imageEditor.activeIndex = -1;
  state.imageRenderBoxes = [];
  renderImagePreviews();
  drawScene(state.mouthOpen);
  setStatus("All images were removed from the slide.");
  setStageMediaStatus("All presentation images were removed.");
}

function removeActiveStageVideo() {
  const activeIndex = state.stageVideos.findIndex((item) => item.id === state.activeStageVideoId);
  if (activeIndex < 0) {
    setStageMediaStatus("There is no active video to remove.");
    return;
  }

  const fileName = state.stageVideos[activeIndex]?.fileName || "Active video";
  removeStageVideoAt(activeIndex);
  setStageMediaStatus(`${fileName} was removed from the presentation.`);
}

function updateStageMediaToolUi() {
  const imageIndex = getSelectedImageIndex();
  const selectedImage = imageIndex >= 0 ? state.images[imageIndex] : null;
  const hasActiveVideo = Boolean(state.stageVideo?.id);
  const activeVideo = hasActiveVideo ? state.stageVideo : null;
  const pdfContextMode = isPdfPresentationMode() && getPdfRenderMode() === "context";
  const exactPdfMode = isPdfPresentationMode() && getPdfRenderMode() === "exact";

  if (stageImageCutoutBtn) {
    stageImageCutoutBtn.disabled = isPdfPresentationMode() || !selectedImage || Boolean(selectedImage.cutoutApplied);
    setIconButtonState(stageImageCutoutBtn, "IMG-", "Remove image background");
  }

  if (stageImageRestoreBtn) {
    stageImageRestoreBtn.disabled = isPdfPresentationMode() || !selectedImage || !selectedImage.cutoutApplied;
    setIconButtonState(stageImageRestoreBtn, "IMG+", "Restore image");
  }

  if (stageVideoCutoutBtn) {
    stageVideoCutoutBtn.disabled = isPdfPresentationMode() || !activeVideo || Boolean(activeVideo.cutoutApplied);
    setIconButtonState(stageVideoCutoutBtn, "VID-", "Remove video background");
  }

  if (stageVideoRestoreBtn) {
    stageVideoRestoreBtn.disabled = isPdfPresentationMode() || !activeVideo || !activeVideo.cutoutApplied;
    setIconButtonState(stageVideoRestoreBtn, "VID+", "Restore video");
  }

  if (stageRemoveImageBtn) {
    stageRemoveImageBtn.disabled = isPdfPresentationMode() || !selectedImage;
  }
  
  if (stageAutoTeachBtn) {
    stageAutoTeachBtn.style.display = (isPdfPresentationMode() || !selectedImage) ? "none" : "block";
  }

  if (stageAutoBRollBtn) {
    stageAutoBRollBtn.style.display = isPdfPresentationMode() ? "none" : "block";
  }

  if (stageClearImagesBtn) {
    stageClearImagesBtn.disabled = isPdfPresentationMode() || !state.images.length;
  }

  if (stageRemoveVideoBtn) {
    stageRemoveVideoBtn.disabled = isPdfPresentationMode() || !activeVideo;
  }

  if (stageMediaStatus) {
    if (pdfContextMode && selectedImage) {
      setStageMediaStatus(`${selectedImage.fileName} is selected on narration page ${getImagePageIndexForItem(selectedImage, imageIndex) + 1}. Drag it anywhere on this PDF context page and use the corner handles to resize it. Removal and cutout stay locked while PDF narration is active.`);
    } else if (pdfContextMode && state.images.length) {
      setStageMediaStatus("PDF narration images can be dragged and resized on the current page. Removal and cutout stay locked while PDF narration is active.");
    } else if (exactPdfMode) {
      setStageMediaStatus("Exact PDF mode stays locked to the original page render. Switch to PDF Context to drag and resize example images.");
    } else if (selectedImage) {
      setStageMediaStatus(`${selectedImage.fileName} is selected on page ${getImagePageIndexForItem(selectedImage, imageIndex) + 1}. Drag it anywhere on the full slide, use the corner handles to resize, and hold Shift for free resize.`);
    } else if (activeVideo) {
      setStageMediaStatus(`${activeVideo.fileName} is active on the screen. You can remove it here.`);
    } else if (state.images.length) {
      setStageMediaStatus("Select an image on the screen to move or resize it across the full slide.");
    } else {
      setStageMediaStatus("Upload media, then place images anywhere on the presentation screen from this panel.");
    }
  }
}

function selectImageAt(index, options = {}) {
  if (index < 0 || index >= state.images.length) {
    return;
  }

  const activeIndex = options.bringToFront === false ? index : bringImageToFront(index);
  state.imageEditor.activeIndex = activeIndex;
  state.imageEditor.activeHandle = "";
  const targetPageIndex = getImagePageIndexForItem(state.images[activeIndex], activeIndex);
  if (options.moveToPage !== false) {
    state.previewPageIndex = targetPageIndex;
  }

  renderImagePreviews();
  updateStageMediaToolUi();

  if (!stagePanel.classList.contains("hidden")) {
    drawScene(state.mouthOpen);
  }
}

function moveImageToCurrentPage(index) {
  if (index < 0 || index >= state.images.length) {
    return;
  }

  const targetPageIndex = Math.max(0, state.previewPageIndex);
  state.images[index] = clampImageFrame({
    ...state.images[index],
    pageIndex: targetPageIndex,
    x: NaN,
    y: NaN,
    width: NaN,
    height: NaN
  }, index);
  state.images = applyDefaultImageLayouts([...state.images]);
  selectImageAt(index);
  setStatus(`${state.images[index].fileName} will now show on page ${targetPageIndex + 1}.`);
}

async function restoreImageAt(index) {
  const item = state.images[index];
  if (!item?.originalDataUrl) {
    return;
  }

  state.images[index] = {
    ...item,
    dataUrl: item.originalDataUrl,
    image: await loadImageFromDataUrl(item.originalDataUrl),
    cutoutApplied: false,
    cutoutConfidence: 0
  };
}

async function applyBackgroundRemovalToSelectedImage() {
  const imageIndex = getSelectedImageIndex();
  if (imageIndex < 0) {
    setImageCutoutStatus("Select an image first.");
    return;
  }

  await applySmartCutoutToImageAt(imageIndex, true);
  selectImageAt(imageIndex, { moveToPage: false });
  setImageCutoutStatus(`${state.images[imageIndex].fileName} now uses background removal on the slide.`);
}

async function restoreSelectedImage() {
  const imageIndex = getSelectedImageIndex();
  if (imageIndex < 0) {
    setImageCutoutStatus("Select an image first.");
    return;
  }

  await restoreImageAt(imageIndex);
  selectImageAt(imageIndex, { moveToPage: false });
  setImageCutoutStatus(`${state.images[imageIndex].fileName} was restored to the original image.`);
}

async function applyBackgroundRemovalToActiveVideo() {
  if (!state.stageVideo?.id) {
    setVideoStatus("Select a video first.");
    return;
  }

  const activeIndex = state.stageVideos.findIndex((item) => item.id === state.stageVideo.id);
  if (activeIndex < 0) {
    setVideoStatus("Select a video first.");
    return;
  }

  const applied = await applySmartCutoutToStageVideoAt(activeIndex, true);
  renderStageVideoPreviewList();
  drawScene(state.mouthOpen);
  setVideoStatus(
    applied
      ? `${state.stageVideos[activeIndex].fileName} now uses background removal on the blue screen.`
      : `${state.stageVideos[activeIndex].fileName} did not have a clear green/plain background to remove.`
  );
}

function restoreActiveVideo() {
  if (!state.stageVideo?.id) {
    setVideoStatus("Select a video first.");
    return;
  }

  const activeIndex = state.stageVideos.findIndex((item) => item.id === state.stageVideo.id);
  if (activeIndex < 0) {
    setVideoStatus("Select a video first.");
    return;
  }

  state.stageVideos[activeIndex] = {
    ...state.stageVideos[activeIndex],
    cutoutApplied: false,
    cutoutConfidence: 0,
    cutoutKey: null,
    cutoutSurface: null
  };
  syncActiveStageVideo();
  renderStageVideoPreviewList();
  drawScene(state.mouthOpen);
  setVideoStatus(`${state.stageVideos[activeIndex].fileName} was restored to the original video.`);
}

function assignPageIndexesToNewImages(existingImages, loadedImages, startPageIndex) {
  const pageCounts = new Map();

  existingImages.forEach((item, index) => {
    const pageIndex = getImagePageIndexForItem(item, index);
    pageCounts.set(pageIndex, (pageCounts.get(pageIndex) || 0) + 1);
  });

  return loadedImages.map((item) => {
    let targetPageIndex = Number.isInteger(item?.pageIndex)
      ? Math.max(0, item.pageIndex)
      : Math.max(0, startPageIndex);

    while ((pageCounts.get(targetPageIndex) || 0) >= SLIDE_IMAGES_PER_PAGE) {
      targetPageIndex += 1;
    }

    pageCounts.set(targetPageIndex, (pageCounts.get(targetPageIndex) || 0) + 1);

    return {
      ...item,
      pageIndex: targetPageIndex
    };
  });
}

function renderMediaEmptyState(container, title, message) {
  if (!container) {
    return;
  }

  container.innerHTML = "";
  const card = document.createElement("div");
  card.className = "media-empty-state";

  const heading = document.createElement("p");
  heading.className = "media-empty-title";
  heading.textContent = title;

  const body = document.createElement("p");
  body.className = "media-empty-copy";
  body.textContent = message;

  card.appendChild(heading);
  card.appendChild(body);
  container.appendChild(card);
  container.classList.remove("hidden");
}

function renderImagePreviewsLegacy() {
  imagePreviewList.innerHTML = "";

  if (!state.images.length) {
    renderMediaEmptyState(
      imagePreviewList,
      "No stage images yet",
      "Upload lesson images here. On the presentation screen you can select them, drag them anywhere on the full slide, and resize them from the corner handles."
    );
    setImageCutoutStatus("Smart cutout is ready for new image uploads.");
    updateStageMediaToolUi();
    return;
  }

  state.images.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "image-preview-card";
    card.classList.add("is-selectable");
    card.classList.toggle("is-active", index === getSelectedImageIndex());

    const img = document.createElement("img");
    img.src = item.dataUrl;
    img.alt = `Uploaded preview ${index + 1}`;
    img.loading = "lazy";

    const label = document.createElement("p");
    label.className = "image-preview-label";
    label.textContent = `${item.fileName} • P${getImagePageIndexForItem(item, index) + 1}`;

    card.appendChild(img);
    card.appendChild(label);
    imagePreviewList.appendChild(card);
  });

  imagePreviewList.classList.remove("hidden");
  updateStageMediaToolUi();
}

function renderImagePreviews() {
  imagePreviewList.innerHTML = "";

  if (!state.images.length) {
    renderMediaEmptyState(
      imagePreviewList,
      "No stage images yet",
      "Upload lesson images here. On the presentation screen you can select them, drag them anywhere on the full slide, and resize them from the corner handles."
    );
    setImageCutoutStatus("Smart cutout is ready for new image uploads.");
    updateStageMediaToolUi();
    return;
  }

  state.images.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "image-preview-card";
    card.classList.add("is-selectable");
    card.classList.toggle("is-active", index === getSelectedImageIndex());

    const img = document.createElement("img");
    img.src = item.dataUrl;
    img.alt = `Uploaded preview ${index + 1}`;
    img.loading = "lazy";

    const label = document.createElement("p");
    label.className = "image-preview-label";
    label.textContent = `${item.fileName} • P${getImagePageIndexForItem(item, index) + 1}`;

    const meta = document.createElement("p");
    meta.className = "image-preview-meta";
    meta.textContent = item.cutoutApplied
      ? `Cutout ready${item.cutoutConfidence ? ` • ${Math.round(item.cutoutConfidence * 100)}%` : ""}`
      : "Original image";

    const tools = document.createElement("div");
    tools.className = "image-preview-tools";

    const cutoutBtn = document.createElement("button");
    cutoutBtn.type = "button";
    cutoutBtn.className = "ghost-btn image-cutout-btn";
    cutoutBtn.textContent = item.cutoutApplied ? "Restore" : "Remove BG";
    cutoutBtn.addEventListener("click", async (event) => {
      event.stopPropagation();
      cutoutBtn.disabled = true;
      try {
        if (item.cutoutApplied && item.originalDataUrl) {
          await restoreImageAt(index);
          setImageCutoutStatus(`${item.fileName} was restored to the original image.`);
        } else {
          await applySmartCutoutToImageAt(index, true);
          setImageCutoutStatus(`${item.fileName} now uses background removal on the slide.`);
        }

        selectImageAt(index, { moveToPage: false });
      } catch (error) {
        console.error(error);
        setImageCutoutStatus(error.message || "Background removal could not finish for that image.");
      } finally {
        cutoutBtn.disabled = false;
      }
    });

    const showHereBtn = document.createElement("button");
    showHereBtn.type = "button";
    showHereBtn.className = "ghost-btn image-cutout-btn";
    showHereBtn.textContent = "Show Here";
    showHereBtn.disabled = isPdfPresentationMode() && isPinnedPdfExampleImage(item);
    showHereBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      if (showHereBtn.disabled) {
        return;
      }
      moveImageToCurrentPage(index);
    });

    tools.appendChild(cutoutBtn);
    tools.appendChild(showHereBtn);

    card.addEventListener("click", () => {
      selectImageAt(index);
      setImageCutoutStatus(`${item.fileName} is selected. Use Remove BG, Restore, or Show Here, then drag it anywhere on the slide.`);
    });

    card.appendChild(img);
    card.appendChild(label);
    card.appendChild(meta);
    card.appendChild(tools);
    imagePreviewList.appendChild(card);
  });

  imagePreviewList.classList.remove("hidden");
  updateStageMediaToolUi();
}

function getCanvasPoint(event) {
  const rect = previewCanvas.getBoundingClientRect();
  if (!rect.width || !rect.height) {
    return { x: 0, y: 0 };
  }

  return {
    x: (event.clientX - rect.left) * (previewCanvas.width / rect.width),
    y: (event.clientY - rect.top) * (previewCanvas.height / rect.height)
  };
}

function getImageHitTarget(point) {
  for (let index = state.imageRenderBoxes.length - 1; index >= 0; index -= 1) {
    const box = state.imageRenderBoxes[index];
    const matchingHandle = (box.handles || []).find((handle) => (
      point.x >= handle.x
      && point.x <= handle.x + handle.size
      && point.y >= handle.y
      && point.y <= handle.y + handle.size
    ));

    if (matchingHandle) {
      return { index: box.index, mode: "resize", handle: matchingHandle.name };
    }

    const insideBox = point.x >= box.x
      && point.x <= box.x + box.width
      && point.y >= box.y
      && point.y <= box.y + box.height;

    if (insideBox) {
      return { index: box.index, mode: "drag" };
    }
  }

  return null;
}

function getStageVideoHitTarget(point) {
  const box = state.stageVideoRenderBox;
  if (!box || !state.stageVideo.id) {
    return null;
  }

  const insideHandle = point.x >= box.handleX
    && point.x <= box.handleX + box.handleSize
    && point.y >= box.handleY
    && point.y <= box.handleY + box.handleSize;

  if (insideHandle) {
    return { id: box.id, mode: "resize" };
  }

  const insideBox = point.x >= box.x
    && point.x <= box.x + box.width
    && point.y >= box.y
    && point.y <= box.y + box.height;

  if (insideBox) {
    return { id: box.id, mode: "drag" };
  }

  return null;
}

function updateCanvasCursor(point) {
  const exactPdfMode = isPdfPresentationMode() && getPdfRenderMode() === "exact";
  if (stagePanel.classList.contains("hidden") || exactPdfMode) {
    previewCanvas.style.cursor = "default";
    state.imageEditor.hoverIndex = -1;
    state.imageEditor.hoverMode = "";
    state.imageEditor.activeHandle = "";
    state.stageVideoEditor.hoverMode = "";
    return;
  }

  const imageHit = point ? getImageHitTarget(point) : null;
  const videoHit = !isPdfPresentationMode() && !imageHit && point ? getStageVideoHitTarget(point) : null;
  const hitMode = videoHit?.mode || imageHit?.mode || "";
  state.stageVideoEditor.hoverMode = videoHit?.mode || "";
  state.imageEditor.hoverIndex = imageHit ? imageHit.index : -1;
  state.imageEditor.hoverMode = imageHit ? imageHit.mode : "";
  state.imageEditor.activeHandle = imageHit?.handle || "";
  previewCanvas.style.cursor = hitMode === "resize"
    ? getResizeCursorForHandle(imageHit?.handle || "se")
    : hitMode === "drag"
      ? "move"
      : "default";
}

function beginImageInteraction(event) {
  const exactPdfMode = isPdfPresentationMode() && getPdfRenderMode() === "exact";
  if (stagePanel.classList.contains("hidden") || exactPdfMode) {
    return;
  }

  const point = getCanvasPoint(event);
  const imageHit = getImageHitTarget(point);
  const videoHit = isPdfPresentationMode() || imageHit ? null : getStageVideoHitTarget(point);
  if (videoHit) {
    const video = clampStageVideoFrame(state.stageVideo);
    commitStageVideoUpdate(video.id, video);
    state.stageVideoEditor = {
      ...state.stageVideoEditor,
      activeId: video.id,
      hoverMode: videoHit.mode,
      mode: videoHit.mode,
      pointerId: event.pointerId,
      startPointerX: point.x,
      startPointerY: point.y,
      startX: video.frameX,
      startY: video.frameY,
      startWidth: video.frameWidth,
      startHeight: video.frameHeight
    };
    state.imageEditor.activeIndex = -1;

    if (typeof previewCanvas.setPointerCapture === "function") {
      try {
        previewCanvas.setPointerCapture(event.pointerId);
      } catch (error) {
        console.error(error);
      }
    }

    event.preventDefault();
    drawScene(state.mouthOpen);
    return;
  }

  const hit = imageHit;

  if (!hit) {
    if (state.imageEditor.activeIndex !== -1) {
      state.imageEditor.activeIndex = -1;
      renderImagePreviews();
      updateStageMediaToolUi();
      drawScene(state.mouthOpen);
    }
    updateCanvasCursor(point);
    return;
  }

  const image = clampImageFrame(state.images[hit.index], hit.index);
  state.images[hit.index] = image;
  const activeIndex = bringImageToFront(hit.index);
  const activeImage = clampImageFrame(state.images[activeIndex], activeIndex);
  state.images[activeIndex] = activeImage;
  state.imageEditor = {
    ...state.imageEditor,
    activeIndex,
    hoverIndex: activeIndex,
    hoverMode: hit.mode,
    activeHandle: hit.handle || "",
    mode: hit.mode,
    pointerId: event.pointerId,
    startPointerX: point.x,
    startPointerY: point.y,
    startX: activeImage.x,
    startY: activeImage.y,
    startWidth: activeImage.width,
    startHeight: activeImage.height,
    startAspectRatio: activeImage.aspectRatio
  };

  renderImagePreviews();
  updateStageMediaToolUi();

  if (typeof previewCanvas.setPointerCapture === "function") {
    try {
      previewCanvas.setPointerCapture(event.pointerId);
    } catch (error) {
      console.error(error);
    }
  }

  event.preventDefault();
  drawScene(state.mouthOpen);
}

function moveImageInteraction(event) {
  const point = getCanvasPoint(event);
  const editor = state.imageEditor;
  const videoEditor = state.stageVideoEditor;

  if (videoEditor.mode && videoEditor.activeId) {
    const video = clampStageVideoFrame(state.stageVideo);
    const workspace = getStageVideoDrawArea();
    if (!workspace) {
      return;
    }

    const dx = point.x - videoEditor.startPointerX;
    const dy = point.y - videoEditor.startPointerY;

    if (videoEditor.mode === "drag") {
      commitStageVideoUpdate(video.id, clampStageVideoFrame({
        ...video,
        frameX: videoEditor.startX + dx,
        frameY: videoEditor.startY + dy
      }));
    } else if (videoEditor.mode === "resize") {
      const aspectRatio = video.aspectRatio;
      const widthFromX = videoEditor.startWidth + dx;
      const widthFromY = videoEditor.startWidth + (dy * aspectRatio);
      const widthDelta = Math.abs(widthFromX - videoEditor.startWidth) >= Math.abs(widthFromY - videoEditor.startWidth)
        ? (widthFromX - videoEditor.startWidth)
        : (widthFromY - videoEditor.startWidth);
      const requestedWidth = videoEditor.startWidth + widthDelta;
      const maxWidth = Math.min(
        workspace.x + workspace.width - videoEditor.startX,
        (workspace.y + workspace.height - videoEditor.startY) * aspectRatio
      );

      commitStageVideoUpdate(video.id, clampStageVideoFrame({
        ...video,
        frameX: videoEditor.startX,
        frameY: videoEditor.startY,
        frameWidth: clamp(requestedWidth, 140, Math.max(140, maxWidth)),
        frameHeight: clamp(requestedWidth, 140, Math.max(140, maxWidth)) / aspectRatio
      }));
    }

    event.preventDefault();
    drawScene(state.mouthOpen);
    return;
  }

  if (!editor.mode || editor.activeIndex < 0 || !state.images[editor.activeIndex]) {
    updateCanvasCursor(point);
    return;
  }

  const activeItem = state.images[editor.activeIndex];
  const activePageIndex = getImagePageIndexForItem(activeItem, editor.activeIndex);
  const workspace = getSlideImageWorkspace(activePageIndex, true);
  if (!workspace) {
    return;
  }

  const dx = point.x - editor.startPointerX;
  const dy = point.y - editor.startPointerY;
  const image = normalizeImageFrame(state.images[editor.activeIndex], editor.activeIndex);

  if (editor.mode === "drag") {
    state.images[editor.activeIndex] = clampImageFrame({
      ...image,
      x: editor.startX + dx,
      y: editor.startY + dy
    }, editor.activeIndex);
  } else if (editor.mode === "resize") {
    const aspectRatio = editor.startAspectRatio || image.aspectRatio || 1;
    const freeResize = event.shiftKey === true;
    const handle = editor.activeHandle || "se";
    const workspaceRight = workspace.x + workspace.width;
    const workspaceBottom = workspace.y + workspace.height;
    const startRight = editor.startX + editor.startWidth;
    const startBottom = editor.startY + editor.startHeight;

    if (freeResize) {
      let left = /w/.test(handle) ? editor.startX + dx : editor.startX;
      let top = /n/.test(handle) ? editor.startY + dy : editor.startY;
      let right = /e/.test(handle) ? startRight + dx : startRight;
      let bottom = /s/.test(handle) ? startBottom + dy : startBottom;

      if (/w/.test(handle)) {
        left = clamp(left, workspace.x, startRight - STAGE_IMAGE_MIN_WIDTH_PX);
      }
      if (/n/.test(handle)) {
        top = clamp(top, workspace.y, startBottom - STAGE_IMAGE_MIN_HEIGHT_PX);
      }
      if (/e/.test(handle)) {
        right = clamp(right, editor.startX + STAGE_IMAGE_MIN_WIDTH_PX, workspaceRight);
      }
      if (/s/.test(handle)) {
        bottom = clamp(bottom, editor.startY + STAGE_IMAGE_MIN_HEIGHT_PX, workspaceBottom);
      }

      state.images[editor.activeIndex] = clampImageFrame({
        ...image,
        x: left,
        y: top,
        width: Math.max(STAGE_IMAGE_MIN_WIDTH_PX, right - left),
        height: Math.max(STAGE_IMAGE_MIN_HEIGHT_PX, bottom - top),
        freeResize: true
      }, editor.activeIndex, { freeResize: true });
    } else {
      const anchorX = /w/.test(handle) ? startRight : editor.startX;
      const anchorY = /n/.test(handle) ? startBottom : editor.startY;
      const pointerWidth = Math.abs(point.x - anchorX);
      const pointerHeight = Math.abs(point.y - anchorY);
      const requestedWidth = Math.max(pointerWidth, pointerHeight * aspectRatio);
      const maxWidth = /w/.test(handle)
        ? /n/.test(handle)
          ? Math.min(anchorX - workspace.x, (anchorY - workspace.y) * aspectRatio)
          : Math.min(anchorX - workspace.x, (workspaceBottom - anchorY) * aspectRatio)
        : /n/.test(handle)
          ? Math.min(workspaceRight - anchorX, (anchorY - workspace.y) * aspectRatio)
          : Math.min(workspaceRight - anchorX, (workspaceBottom - anchorY) * aspectRatio);
      const width = clamp(requestedWidth, STAGE_IMAGE_MIN_WIDTH_PX, Math.max(STAGE_IMAGE_MIN_WIDTH_PX, maxWidth));
      const height = width / aspectRatio;

      state.images[editor.activeIndex] = clampImageFrame({
        ...image,
        x: /w/.test(handle) ? anchorX - width : anchorX,
        y: /n/.test(handle) ? anchorY - height : anchorY,
        width,
        height,
        freeResize: false
      }, editor.activeIndex);
    }
  }

  updateStageMediaToolUi();
  event.preventDefault();
  drawScene(state.mouthOpen);
}

function endImageInteraction(event) {
  if (!state.imageEditor.mode && !state.stageVideoEditor.mode) {
    return;
  }

  const pointerId = state.stageVideoEditor.pointerId ?? state.imageEditor.pointerId;
  if (typeof previewCanvas.releasePointerCapture === "function" && pointerId !== null) {
    try {
      previewCanvas.releasePointerCapture(pointerId);
    } catch (error) {
      console.error(error);
    }
  }

  state.imageEditor.mode = "";
  state.imageEditor.pointerId = null;
  state.imageEditor.activeHandle = "";
  state.stageVideoEditor.mode = "";
  state.stageVideoEditor.pointerId = null;
  syncImageLayouts();
  updateCanvasCursor(event ? getCanvasPoint(event) : null);
  renderImagePreviews();
  updateStageMediaToolUi();
  drawScene(state.mouthOpen);
}

function getSupportedAudioMimeType() {
  const mimeTypes = [
    "audio/webm;codecs=opus",
    "audio/webm",
    "audio/ogg;codecs=opus"
  ];

  return mimeTypes.find((type) => MediaRecorder.isTypeSupported(type)) || "";
}

function clearRecordingSession() {
  if (state.recording.stream) {
    state.recording.stream.getTracks().forEach((track) => track.stop());
  }

  state.recording = {
    recorder: null,
    chunks: [],
    stream: null
  };

  setRecordingUi(false);
}

function teardownAudioGraph() {
  if (state.audioGraph?.sourceNode) {
    state.audioGraph.sourceNode.disconnect();
  }

  if (state.audioGraph?.analyser) {
    state.audioGraph.analyser.disconnect();
  }

  if (state.audioGraph?.gainNode) {
    state.audioGraph.gainNode.disconnect();
  }

  state.audioGraph = null;
}

function stopActiveAudio() {
  if (state.activeAudio) {
    state.activeAudio.pause();
    state.activeAudio.removeAttribute("src");
    state.activeAudio.load();
    if (state.activeAudio.dataset?.runtimeAudio === "true") {
      state.activeAudio.remove();
    }
    state.activeAudio = null;
  }

  if (state.activeMusic) {
    state.activeMusic.pause();
    state.activeMusic.removeAttribute("src");
    state.activeMusic.load();
    if (state.activeMusic.dataset?.runtimeAudio === "true") {
      state.activeMusic.remove();
    }
    state.activeMusic = null;
  }

  teardownAudioGraph();
}

function stopPlayback(restoreFullText = true) {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }

  clearTypingInterval();
  cancelVisualLoop();
  if (state.introPlayback.element) {
    state.introPlayback.element.pause();
    try {
      state.introPlayback.element.currentTime = 0;
    } catch (error) {
      console.error(error);
    }
  }
  state.introPlayback.active = false;
  state.introPlayback.previewVisible = false;
  stopActiveAudio();
  state.speechUtterance = null;
  state.speaking = false;
  state.mouthOpen = 0.12;
  state.contentScrollOffset = 0;

  if (isPdfPresentationMode()) {
    state.pdf.paused = false;
    state.pdf.audioDriven = false;
    state.pdf.timelineStartedAt = 0;
    state.pdf.timelineStartOffsetMs = 0;

    if (restoreFullText) {
      state.pdf.currentTimeMs = 0;
    }

    syncPdfPreviewPageFromTime(state.pdf.currentTimeMs);
    updatePlaybackProgressUi(
      state.pdf.totalDurationMs ? (state.pdf.currentTimeMs / state.pdf.totalDurationMs) : 0,
      false
    );
    updateStageTimelineUi();
    updateStageModeUi();
    drawScene(state.mouthOpen);
    return;
  }

  if (restoreFullText) {
    state.displayedText = state.text;
  }

  updatePlaybackProgressUi(restoreFullText ? 0 : getDisplayedTextProgress(), false);
  drawScene(state.mouthOpen);
  if (state.stageVideo.element && !stagePanel.classList.contains("hidden")) {
    void startStageVideoPlayback();
  } else {
    ensureStageMediaLoop();
  }
}

function finishPlayback(message) {
  clearTypingInterval();
  cancelVisualLoop();
  if (state.introPlayback.element) {
    state.introPlayback.element.pause();
    try {
      state.introPlayback.element.currentTime = 0;
    } catch (error) {
      console.error(error);
    }
  }
  state.introPlayback.active = false;
  state.introPlayback.previewVisible = false;
  stopActiveAudio();
  state.speechUtterance = null;
  state.speaking = false;
  state.mouthOpen = 0.12;
  state.contentScrollOffset = 0;

  if (isPdfPresentationMode()) {
    state.pdf.paused = false;
    state.pdf.audioDriven = false;
    state.pdf.timelineStartedAt = 0;
    state.pdf.timelineStartOffsetMs = 0;
    state.pdf.currentTimeMs = state.pdf.totalDurationMs;
    syncPdfPreviewPageFromTime(state.pdf.currentTimeMs);
    updatePlaybackProgressUi(1, false);
    updateStageTimelineUi();
    updateStageModeUi();
    drawScene(0.12);
    setStatus(message);
    return;
  }

  state.displayedText = state.text;
  updatePlaybackProgressUi(1, false);
  drawScene(0.12);
  if (state.stageVideo.element && !stagePanel.classList.contains("hidden")) {
    void startStageVideoPlayback();
  } else {
    ensureStageMediaLoop();
  }
  setStatus(message);
}

function createLoadedAudio(url) {
  return new Promise((resolve, reject) => {
    const audio = document.createElement("audio");
    audio.preload = "auto";
    audio.src = url;
    audio.playsInline = true;
    audio.dataset.runtimeAudio = "true";
    audio.classList.add("hidden");
    audio.setAttribute("aria-hidden", "true");
    document.body.appendChild(audio);

    const handleLoaded = () => resolve(audio);
    const handleError = () => {
      audio.remove();
      reject(new Error("The narration audio could not be loaded."));
    };

    if (audio.readyState >= 1) {
      resolve(audio);
      return;
    }

    audio.addEventListener("loadedmetadata", handleLoaded, { once: true });
    audio.addEventListener("error", handleError, { once: true });
    audio.load();
  });
}

async function startBackgroundMusicPlayback() {
  if (!state.music.enabled || !state.music.url) {
    return null;
  }

  const musicAudio = await createLoadedAudio(state.music.url);
  musicAudio.loop = true;
  musicAudio.volume = Math.min(STRICT_BACKGROUND_MUSIC_VOLUME, Number(state.music.volume) || STRICT_BACKGROUND_MUSIC_VOLUME);
  state.activeMusic = musicAudio;

  try {
    await musicAudio.play();
  } catch (error) {
    console.error(error);
  }

  return musicAudio;
}

async function ensureAudioContext() {
  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextConstructor) {
    return null;
  }

  if (!state.audioContext) {
    state.audioContext = new AudioContextConstructor();
  }

  if (state.audioContext.state === "suspended") {
    await state.audioContext.resume();
  }

  return state.audioContext;
}

async function connectAudioGraph(audioElement, includeExportTrack = false, monitorGain = 1) {
  const audioContext = await ensureAudioContext();
  if (!audioContext) {
    state.audioGraph = null;
    return null;
  }

  try {
    teardownAudioGraph();

    const sourceNode = audioContext.createMediaElementSource(audioElement);
    const analyser = audioContext.createAnalyser();
    const gainNode = audioContext.createGain();
    gainNode.gain.value = monitorGain;
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.82;

    sourceNode.connect(analyser);
    analyser.connect(gainNode);
    gainNode.connect(audioContext.destination);

    let exportDestination = null;
    if (includeExportTrack) {
      exportDestination = audioContext.createMediaStreamDestination();
      gainNode.connect(exportDestination);
    }

    state.audioGraph = {
      sourceNode,
      analyser,
      gainNode,
      exportDestination
    };

    return state.audioGraph;
  } catch (error) {
    console.error(error);
    state.audioGraph = null;
    return null;
  }
}

async function ensureCanvasReadyForExport() {
  let shouldRedraw = false;

  if (!isCanvasOriginClean()) {
    resetCanvasSurface();
    shouldRedraw = true;
  }

  if (window.INFO_KIDS_LOGO_DATA_URI && (!stageLogoImage.src || stageLogoImage.src !== window.INFO_KIDS_LOGO_DATA_URI)) {
    await loadImageElementSource(stageLogoImage, window.INFO_KIDS_LOGO_DATA_URI);
    shouldRedraw = true;
  }

  if (state.images.length) {
    state.images = await Promise.all(
      state.images.map(async (item) => ({
        ...item,
        image: await loadImageFromDataUrl(item.dataUrl)
      }))
    );
    shouldRedraw = true;
  }

  state.exportFallbackMode = false;

  if (shouldRedraw) {
    drawScene(state.mouthOpen);
  }

  if (!isCanvasOriginClean()) {
    state.exportFallbackMode = true;
    resetCanvasSurface();
    drawScene(state.mouthOpen);
  }

  if (!isCanvasOriginClean()) {
    throw new Error("The slide contains an image source that the browser will not allow in video export.");
  }
}

function sampleAudioEnergy() {
  if (!state.audioGraph?.analyser) {
    return null;
  }

  const buffer = new Uint8Array(state.audioGraph.analyser.fftSize);
  state.audioGraph.analyser.getByteTimeDomainData(buffer);

  let total = 0;
  for (let i = 0; i < buffer.length; i += 1) {
    const value = (buffer[i] - 128) / 128;
    total += value * value;
  }

  return Math.sqrt(total / buffer.length);
}

function getAudioDrivenMouth() {
  const energy = sampleAudioEnergy();
  if (energy === null) {
    return null;
  }

  return clamp(0.08 + energy * 2.5, 0.08, 0.48);
}

function getFallbackMouth(elapsedMs) {
  const time = elapsedMs / 185;
  const pulse = (Math.sin(time) + 1) / 2;
  const sway = (Math.sin((time * 0.72) + 0.6) + 1) / 2;
  return clamp(0.08 + pulse * 0.16 + sway * 0.08, 0.08, 0.38);
}

function startSpeechLipLoop() {
  const startedAt = performance.now();

  const tick = () => {
    if (!state.speaking) {
      return;
    }

    state.mouthOpen = getFallbackMouth(performance.now() - startedAt);
    drawScene(state.mouthOpen);
    state.animationFrame = requestAnimationFrame(tick);
  };

  state.animationFrame = requestAnimationFrame(tick);
}

function startTypingFallback(totalDurationMs) {
  if (!state.tokens.length) {
    return;
  }

  clearTypingInterval();
  const stepMs = Math.max(24, Math.floor(totalDurationMs / state.tokens.length));
  let index = 0;

  state.typingInterval = setInterval(() => {
    index += 1;
    setDisplayedTokenCount(index);

    if (index >= state.tokens.length) {
      clearTypingInterval();
    }
  }, stepMs);
}

function startNarrationLoop(audioElement) {
  let lastRenderAt = 0;
  let lastRenderedMouth = state.mouthOpen;
  const durationMs = Math.max(
    1000,
    Math.round(
      Number.isFinite(audioElement.duration)
        ? (audioElement.duration * 1000)
        : (state.narration.durationMs || getDefaultNarrationDurationMs())
    )
  );
  const visualLagMs = Math.max(0, Math.round((Number(SPEECH_SYNC_VISUAL_PROGRESS_LAG) || 0) * 1000));

  const tick = () => {
    if (!state.speaking || !state.activeAudio) {
      return;
    }

    const nowMs = performance.now();
    const elapsedMs = Math.max(0, (audioElement.currentTime || 0) * 1000);
    const syncElapsedMs = Math.max(0, elapsedMs - visualLagMs);
    const progress = durationMs ? clamp(elapsedMs / durationMs, 0, 1) : 0;
    const previousText = state.displayedText;
    const syncFrame = getSpeechSyncFrame(state.text, syncElapsedMs, durationMs);
    state.displayedText = syncFrame.displayedText;
    syncLessonPlaybackProgressUi(progress, true);

    if (state.exportingVideo) {
      updateTaskProgressUi(0.26 + (progress * 0.54), true, { mirrorStage: true });
    }

    const audioMouth = getAudioDrivenMouth();
    const nextMouth = (audioMouth !== null && audioMouth > 0.11 && syncFrame.mouthActive)
      ? clamp(audioMouth, 0.08, 0.48)
      : syncFrame.mouthActive
      ? (audioMouth ?? getFallbackMouth(syncFrame.speechElapsedMs))
      : 0.12;
    state.mouthOpen = nextMouth;
    if (shouldRenderAnimatedSceneFrame(nowMs, {
      force: previousText !== state.displayedText || progress >= 0.995,
      lastRenderAt,
      mouthDelta: nextMouth - lastRenderedMouth
    })) {
      drawScene(state.mouthOpen);
      lastRenderAt = nowMs;
      lastRenderedMouth = state.mouthOpen;
    }

    if (!audioElement.ended) {
      state.animationFrame = requestAnimationFrame(tick);
    }
  };

  state.animationFrame = requestAnimationFrame(tick);
}

async function playNarrationAudio() {
  stopPlayback(false);
  resetTaskProgressUi();
  state.displayedText = "";
  syncLessonPlaybackProgressUi(0, true);
  drawScene(0.12);

  try {
    if (state.stageVideo.element) {
      await startStageVideoPlayback({ restart: true });
    }

    const audioElement = await createLoadedAudio(state.narration.url);
    applyNaturalVoicePlayback(audioElement, getLessonPlaybackRate());
    audioElement.muted = false;
    audioElement.volume = STRICT_VOICE_VOLUME;
    state.activeAudio = audioElement;
    await connectAudioGraph(audioElement, false);
    await startBackgroundMusicPlayback();

    audioElement.addEventListener("ended", () => {
      window.setTimeout(() => {
        finishPlayback("Playback complete. The narration finished.");
      }, STRICT_SCENE_END_BUFFER_MS);
    }, { once: true });

    audioElement.addEventListener("error", () => {
      finishPlayback("Narration playback failed. Please upload or record the audio again.");
    }, { once: true });

    state.speaking = true;
    setStatus(`The slide is reading with ${state.narration.source.toLowerCase()} audio at ${getLessonPlaybackRate()}x with strict word sync.`);
    const started = await playAudioWithRecovery(audioElement, { volume: STRICT_VOICE_VOLUME });
    if (!started) {
      throw new Error("The narration audio could not start in this browser.");
    }
    startNarrationLoop(audioElement);
  } catch (error) {
    console.error(error);
    finishPlayback(error.message || "Narration playback failed.");
    setStatus("Generated Anjali playback failed. The app did not switch to another voice. Generate Anjali narration again or restart the local Anjali voice server on port 8426.");
  }
}

function playSpeechFallback() {
  stopPlayback(false);
  state.displayedText = "";
  drawScene(0.12);

  if (!("speechSynthesis" in window)) {
    setStatus("This browser does not support speech playback. Record or upload narration instead.");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(buildNarrationText(state.text));
  const voices = window.speechSynthesis.getVoices();
  const preferredVoice = voices.find((voice) => /female|zira|samantha|aria|google us english/i.test(voice.name));

  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }

  utterance.rate = getVoiceSpecificPreviewRate("female", getLessonPlaybackRate());
  utterance.pitch = 1.08;
  utterance.volume = STRICT_VOICE_VOLUME;
  const estimatedDurationMs = getDefaultNarrationDurationMs();

  utterance.onstart = () => {
    state.speaking = true;
    syncLessonPlaybackProgressUi(0, true);
    if (state.stageVideo.element) {
      void startStageVideoPlayback({ restart: true });
    }
    startBackgroundMusicPlayback().catch((error) => console.error(error));
    setStatus(`The slide is reading with the browser voice at ${getLessonPlaybackRate()}x because generated narration is unavailable right now.`);
    const startedAt = performance.now();

    const tick = () => {
      if (!state.speaking) {
        return;
      }

      const elapsed = performance.now() - startedAt;
      const progress = clamp(elapsed / estimatedDurationMs, 0, 1);
      const syncFrame = getSpeechSyncFrame(state.text, elapsed, estimatedDurationMs);
      state.displayedText = syncFrame.displayedText;
      syncLessonPlaybackProgressUi(progress, true);
      state.mouthOpen = syncFrame.mouthActive ? getFallbackMouth(syncFrame.speechElapsedMs) : 0.12;
      drawScene(state.mouthOpen);

      if (progress < 1) {
        state.animationFrame = requestAnimationFrame(tick);
      }
    };

    state.animationFrame = requestAnimationFrame(tick);
  };

  utterance.onend = () => {
    window.setTimeout(() => {
      finishPlayback("Playback complete. Start the local narration server if you want matching generated audio for download.");
    }, STRICT_SCENE_END_BUFFER_MS);
  };

  utterance.onerror = () => {
    finishPlayback("Browser speech playback was interrupted.");
  };

  state.speechUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}

function hasFreshGeneratedAnjaliNarration(currentText = "") {
  const safeText = String(currentText || "").trim();
  return Boolean(
    state.narration.url
    && state.narration.blob
    && state.narration.voice === "anjali"
    && state.narration.textSource === safeText
    && !isNarrationDurationTooShortForText(buildNarrationText(safeText), state.narration.durationMs, "anjali")
    && /generated anjali narration/i.test(state.narration.source || "")
  );
}

async function ensureNarrationReadyForSlide(options = {}) {
  const currentText = commitLatestLessonText();
  if (!ensureLessonTextIsReady(currentText)) {
    throw new Error("The lesson text is not ready for narration.");
  }
  if (hasFreshGeneratedAnjaliNarration(currentText)) {
    return;
  }

  const voice = "anjali";
  const label = `Generated ${getNarrationVoiceLabel(voice).toLowerCase()} narration`;
  const fileName = `generated-${voice}-narration.wav`;
  let syncProfile = null;
  const blob = await requestNarrationBlob(currentText, voice, {
    ...options,
    onSyncProfile: (profile) => {
      syncProfile = profile;
      if (typeof options.onSyncProfile === "function") {
        options.onSyncProfile(profile);
      }
    }
  });
  await setNarrationFromBlob(blob, fileName, label, currentText, voice, { syncProfile });
}

async function playSlide() {
  const currentText = commitLatestLessonText();
  if (!isPdfPresentationMode() && shouldPreferPdfScreenFromInput()) {
    const ready = await loadSelectedPdf();
    if (!ready) {
      return;
    }

    showPdfScreen("context");
  }

  if (isPdfPresentationMode()) {
    await playPdfPresentation();
    return;
  }

  if (!ensureLessonTextIsReady(currentText)) {
    return;
  }

  stopDictation(false);
  stopInputPreview(false);

  const canReuseExistingNarration = hasFreshGeneratedAnjaliNarration(currentText);

  if (canReuseExistingNarration) {
    await playIntroClipIfEnabled();
    playNarrationAudio();
    return;
  }

  try {
    setStatus("Preparing narration for live playback...");
    updateTaskProgressUi(0.2, true, { mirrorStage: true });
    await ensureNarrationReadyForSlide({
      timeoutMs: getLongNarrationRequestTimeoutMs(currentText)
    });
    updateTaskProgressUi(0.62, true, { mirrorStage: true, label: state.introPlayback.enabled ? "Narration ready. Playing intro clip..." : "Narration ready. Starting playback..." });
    await playIntroClipIfEnabled();
    updateTaskProgressUi(0.88, true, { mirrorStage: true });
    resetTaskProgressUi();
    playNarrationAudio();
  } catch (error) {
    console.error(error);
    resetTaskProgressUi();
    setStatus("The Anjali voice server is unavailable, so playback could not start. Start the local Anjali voice server on port 8426 and try again.");
    return;
  }
}

async function openPreviewVoiceChooser() {
  const text = getEffectiveLessonText();
  const lessonIssue = getLessonTextIssue(text);
  if (lessonIssue) {
    setSpeechToolsStatus(lessonIssue.message);
    updateSpeechToolsUi();
    return;
  }

  stopPlayback(false);
  stopDictation(false);
  setPreviewVoiceChooserVisible(false);
  await startTextPreview("anjali");
}

async function startTextPreview(voicePreference) {
  const text = getEffectiveLessonText();
  const lessonIssue = getLessonTextIssue(text);
  if (lessonIssue) {
    setSpeechToolsStatus(lessonIssue.message);
    updateSpeechToolsUi();
    return;
  }

  stopPlayback(false);
  stopDictation(false);
  stopInputPreview(false);
  state.preferredNarrationVoice = "anjali";
  updatePreferredVoiceUi();

  const voiceLabel = getNarrationVoiceLabel("anjali");
  try {
    await playServerBackedTextPreview(text, "anjali");
    return;
  } catch (error) {
    console.error(error);
  }

  setSpeechToolsStatus(`${voiceLabel} voice preview needs the local Anjali voice server on port 8426.`);
  updateSpeechToolsUi();
}

function startDictation() {
  const SpeechRecognitionConstructor = getSpeechRecognitionConstructor();
  if (!SpeechRecognitionConstructor) {
    setSpeechToolsStatus("Speech to text is not supported in this browser. Use Chrome or Edge.");
    updateSpeechToolsUi();
    return;
  }

  stopPlayback(false);
  stopInputPreview(false);

  const recognition = new SpeechRecognitionConstructor();
  recognition.lang = navigator.language || "en-US";
  recognition.continuous = true;
  recognition.interimResults = true;

  state.dictation = {
    recognition,
    active: true,
    baseText: lessonInput.value,
    finalTranscript: ""
  };

  recognition.onstart = () => {
    state.dictation.active = true;
    setSpeechToolsStatus("Speech to text is listening. Speak now to fill the content box.");
    updateSpeechToolsUi();
  };

  recognition.onresult = (event) => {
    let interimTranscript = "";

    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const transcript = event.results[index][0].transcript.trim();
      if (!transcript) {
        continue;
      }

      if (event.results[index].isFinal) {
        state.dictation.finalTranscript = `${state.dictation.finalTranscript} ${transcript}`.trim();
      } else {
        interimTranscript = `${interimTranscript} ${transcript}`.trim();
      }
    }

    lessonInput.value = mergeSpeechText(
      state.dictation.baseText,
      `${state.dictation.finalTranscript} ${interimTranscript}`.trim()
    );

    handleLessonInputChange();
  };

  recognition.onerror = (event) => {
    state.dictation.active = false;
    state.dictation.recognition = null;

    if (event.error === "not-allowed") {
      setSpeechToolsStatus("Microphone permission was blocked for speech to text.");
    } else {
      setSpeechToolsStatus(`Speech to text error: ${event.error}.`);
    }

    updateSpeechToolsUi();
  };

  recognition.onend = () => {
    state.dictation.active = false;
    state.dictation.recognition = null;
    setSpeechToolsStatus("Speech to text stopped. You can start again or continue typing.");
    updateSpeechToolsUi();
  };

  recognition.start();
  updateSpeechToolsUi();
}

function generateAndDownloadSrtCaptions(introOffsetMs = 0) {
  const timeline = state.narration?.syncProfile?.timeline || [];
  if (!timeline.length) return;

  const formatSrtTimeMs = (ms) => {
    const d = new Date(ms);
    const hs = Math.floor(ms / 3600000).toString().padStart(2, '0');
    const m = d.getUTCMinutes().toString().padStart(2, '0');
    const s = d.getUTCSeconds().toString().padStart(2, '0');
    const ms2 = (ms % 1000).toString().padStart(3, '0');
    return `${hs}:${m}:${s},${ms2}`;
  };

  let srtStr = "";
  let counter = 1;
  let chunkText = [];
  let chunkStartMs = timeline[0].startMs + introOffsetMs;
  let chunkEndMs = 0;

  timeline.forEach((item, index) => {
    chunkText.push(item.text);
    chunkEndMs = item.startMs + item.lengthMs + introOffsetMs;

    const hasPunctuation = /[.,?!]/.test(item.text);
    const isLast = index === timeline.length - 1;
    if (chunkText.length >= 7 || hasPunctuation || isLast) {
      srtStr += `${counter}\n`;
      srtStr += `${formatSrtTimeMs(chunkStartMs)} --> ${formatSrtTimeMs(chunkEndMs)}\n`;
      srtStr += `${chunkText.join(" ")}\n\n`;
      counter++;

      chunkText = [];
      if (!isLast) chunkStartMs = timeline[index + 1].startMs + introOffsetMs;
    }
  });

  const srtBlob = new Blob([srtStr], { type: "text/srt" });
  triggerFileDownload(srtBlob, "captions.srt");
}

async function exportPdfModeVideo(renderMode = "context") {
  if (!getPdfSelectedPageCount()) {
    setStatus("Select at least one PDF page before downloading the PDF video.");
    return;
  }

  if (!canExportVideo()) {
    setStatus("Video export is not supported in this browser. Please use the latest Chrome or Edge.");
    return;
  }

  const normalizedRenderMode = renderMode === "exact" ? "exact" : "context";
  const modeLabel = normalizedRenderMode === "exact" ? "exact PDF" : "PDF context";
  const outputFileName = normalizedRenderMode === "exact"
    ? "pdf-presentation-video.mp4"
    : "selected-pdf-context-video.mp4";
  const effectiveExportQuality = getEffectiveExportQuality();
  const exportQualityLabel = getExportQualityLabel(effectiveExportQuality);
  const pdfTimelineDurationMs = Math.max(1000, Math.round(state.pdf.totalDurationMs || 1000));
  const pdfExportTargetDurationMs = pdfTimelineDurationMs + getExportCompletionTailMs();
  const pdfBaseCaptureRate = getPdfExportCaptureRate(normalizedRenderMode);
  const exportRenderSpeedMultiplier = getEffectiveExportRenderSpeedMultiplier(
    pdfBaseCaptureRate,
    pdfTimelineDurationMs
  );
  const previousRenderMode = getPdfRenderMode();
  const previousPresentationMode = state.presentationMode;

  stopDictation(false);
  stopInputPreview(false);
  stopPlayback(false);
  forceExportVoiceToAnjali();
  state.exportingVideo = true;
  const preparingPdfExportMessage = `Preparing ${exportQualityLabel} ${modeLabel} video with Anjali narration. Please wait...`;
  setStatus(preparingPdfExportMessage);
  updateTaskProgressUi(0.06, true, { mirrorStage: true, label: preparingPdfExportMessage });
  updateStageModeUi();
  downloadBtn.disabled = true;
  if (downloadPdfContextBtn) {
    downloadPdfContextBtn.disabled = true;
  }
  playBtn.disabled = true;
  stopStageBtn.disabled = true;
  recordBtn.disabled = true;
  stopRecordBtn.disabled = true;
  clearAudioBtn.disabled = true;
  audioInput.disabled = true;

  let exportStream = null;
  let canvasStream = null;
  let exportCanvas = null;

  try {
    state.presentationMode = "pdf";
    setPdfRenderMode(normalizedRenderMode);

    exportCanvas = document.createElement("canvas");
    exportCanvas.width = previewCanvas.width;
    exportCanvas.height = previewCanvas.height;
    useCanvasSurface(exportCanvas);

    rebuildPdfPresentationSchedule({ preserveTime: false });
    updateTaskProgressUi(0.12, true, { mirrorStage: true });

    const pdfText = getPdfPresentationText();
    const requiresNarrationForContext = normalizedRenderMode === "context" && Boolean(pdfText);
    let exportAudioBlob = null;
    let exportAudioFileName = normalizedRenderMode === "exact"
      ? "pdf-presentation-audio.wav"
      : "pdf-context-audio.wav";
    let audioStatusLabel = "silent timing track";

    if (pdfText) {
      try {
        updateTaskProgressUi(0.18, true, { mirrorStage: true });
        exportAudioBlob = await ensureAnjaliPdfNarrationReadyForExport();
        exportAudioFileName = state.pdf.narration.fileName || exportAudioFileName;
        audioStatusLabel = "Anjali narration";
      } catch (error) {
        console.error(error);
        throw new Error(error?.message || "Anjali PDF narration could not be generated.");
      }
    } else {
      exportAudioBlob = createSilentWavBlob(state.pdf.totalDurationMs || 5000);
      exportAudioFileName = normalizedRenderMode === "exact"
        ? "silent-pdf-timeline.wav"
        : "silent-pdf-context-timeline.wav";
    }

    await ensureVideoExportServer();
    const renderingPdfExportMessage = normalizedRenderMode === "exact"
      ? `Rendering ${modeLabel} video with full page images and ${audioStatusLabel} at ${exportRenderSpeedMultiplier}x export speed. Please wait...`
      : `Rendering ${modeLabel} video with synced page text, visuals, and ${audioStatusLabel} at ${exportRenderSpeedMultiplier}x export speed. Please wait...`;
    setStatus(renderingPdfExportMessage);
    updateTaskProgressUi(0.24, true, { mirrorStage: true, label: renderingPdfExportMessage });
    state.pdf.currentTimeMs = 0;
    syncPdfPreviewPageFromTime(0);
    drawScene(0.12);

    const captureRate = getAcceleratedExportCaptureRate(
      pdfBaseCaptureRate,
      exportRenderSpeedMultiplier
    );
    setExportCaptureRate(captureRate);
    canvasStream = canvas.captureStream(captureRate);
    const videoTracks = canvasStream.getVideoTracks();
    if (!videoTracks.length) {
      throw new Error("The browser did not provide a video track for the PDF canvas export.");
    }

    const videoOnlyTracks = videoTracks.filter((track) => track.kind === "video");
    if (!videoOnlyTracks.length) {
      throw new Error("PDF export did not produce a usable video track.");
    }

    state.exportVideoTrack = videoOnlyTracks[0];
    drawScene(0.12);
    exportStream = canvasStream;

    const recorder = createExportMediaRecorder(
      exportStream,
      getPdfExportBitrate(effectiveExportQuality, normalizedRenderMode)
    );
    const mimeType = recorder.mimeType || getSupportedVideoMimeType(false) || "video/webm";
    if (recorder.mimeType && recorder.mimeType.startsWith("audio/")) {
      throw new Error("The browser tried to start an audio-only recorder instead of PDF video export.");
    }

    const chunks = [];
    let recorderError = null;

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
    };

    recorder.onerror = (event) => {
      recorderError = event.error || new Error("Recording failed.");
    };

    const blobPromise = new Promise((resolve, reject) => {
      recorder.onstop = () => {
        if (recorderError) {
          reject(recorderError);
          return;
        }

        const blob = new Blob(chunks, { type: recorder.mimeType || mimeType || "video/webm" });
        if (!blob.size) {
          reject(new Error("The browser finished recording, but no PDF video data was produced."));
          return;
        }

        resolve(blob);
      };
    });

    recorder.start(1500);
    await renderPdfTimelineForExport(normalizedRenderMode, {
      renderSpeedMultiplier: exportRenderSpeedMultiplier
    });

    state.speaking = false;
    cancelVisualLoop();
    state.mouthOpen = 0.12;
    state.pdf.currentTimeMs = state.pdf.totalDurationMs;
    syncPdfPreviewPageFromTime(state.pdf.currentTimeMs);
    drawScene(0.12);
    await delay(Math.max(24, Math.round(getFinalExportHoldMs() / exportRenderSpeedMultiplier)));
    recorder.stop();

    const videoBlob = await blobPromise;
    if (!videoBlob.type.startsWith("video/")) {
      throw new Error(`The browser returned ${videoBlob.type || "an unknown file"} instead of PDF video.`);
    }

    const finalAudioLabel = audioStatusLabel === "generated narration" ? "narration" : "a timing track";
    let videoSaveHandle = null;

    try {
      videoSaveHandle = await requestVideoSaveHandle(outputFileName);
    } catch (error) {
      if (error?.name === "AbortError") {
        setStatus(`${modeLabel} export cancelled after rendering.`);
        return;
      }

      console.error(error);
    }

    const combiningPdfExportMessage = `Combining ${modeLabel} video${state.music.enabled ? `, ${finalAudioLabel}, and music` : ` and ${finalAudioLabel}`} with FFmpeg. Please wait...`;
    setStatus(combiningPdfExportMessage);
    updateTaskProgressUi(0.9, true, { mirrorStage: true, label: combiningPdfExportMessage });
    const finalBlob = await muxVideoAndAudio(videoBlob, exportAudioBlob, {
      audioFileName: exportAudioFileName,
      audioSpeed: getPdfPlaybackRate(),
      videoSpeed: exportRenderSpeedMultiplier,
      targetDurationMs: pdfExportTargetDurationMs,
      saveHandle: videoSaveHandle
    });
    if (!videoSaveHandle && (!finalBlob || !finalBlob.size)) {
      throw new Error("The final PDF video file was empty.");
    }

    if (videoSaveHandle) {
      updateTaskProgressUi(1, true, { mirrorStage: true });
      setStatus(`${modeLabel} video saved successfully.`);
    } else {
      generateAndDownloadSrtCaptions(0);
      triggerFileDownload(finalBlob, outputFileName);
      updateTaskProgressUi(1, true, { mirrorStage: true });
      setStatus(`${modeLabel} video downloaded successfully.`);
    }
  } catch (error) {
    console.error(error);
    const errorMessage = error?.message || "unknown error";
    if (/Anjali (clone )?server|local Anjali voice server|local narration server/i.test(errorMessage)) {
      setStatus(`PDF export failed: ${errorMessage} Start the local Anjali voice server on port 8426, then export again.`);
    } else {
      const recoveryHint = normalizedRenderMode === "exact"
        ? " Try Download PDF Context Video if the full exact-PDF export is still too large."
        : "";
      setStatus(`${modeLabel} export failed: ${errorMessage}.${recoveryHint}`);
    }
  } finally {
    state.exportingVideo = false;
    cancelVisualLoop();
    stopActiveAudio();
    state.exportFallbackMode = false;
    useCanvasSurface(previewCanvas);
    if (exportStream) {
      exportStream.getTracks().forEach((track) => track.stop());
    }
    if (canvasStream) {
      canvasStream.getTracks().forEach((track) => track.stop());
    }
    clearExportCaptureRate();
    state.exportVideoTrack = null;
    state.speechUtterance = null;
    state.speaking = false;
    state.mouthOpen = 0.12;
    state.pdf.paused = false;
    state.pdf.audioDriven = false;
    state.pdf.timelineStartedAt = 0;
    state.pdf.timelineStartOffsetMs = 0;
    state.presentationMode = previousPresentationMode;
    setPdfRenderMode(previousRenderMode);
    rebuildPdfPresentationSchedule({ preserveTime: false });
    drawScene(0.12);
    setRecordingUi(false);
    updateNarrationUi();
    updateSpeechToolsUi();
    updateStageModeUi();
    updatePlaybackProgressUi(0, false);
    resetTaskProgressUi();
    audioInput.disabled = false;
    stopStageBtn.disabled = false;
    downloadBtn.disabled = false;
    if (downloadPdfContextBtn) {
      downloadPdfContextBtn.disabled = false;
    }
    playBtn.disabled = false;
  }
}

async function exportPdfVideo() {
  await exportPdfModeVideo("exact");
}

async function exportPdfContextVideo() {
  await exportPdfModeVideo("context");
}

async function exportVideo() {
  if (isPdfPresentationMode()) {
    await exportPdfModeVideo(getPdfRenderMode());
    return;
  }

  const exportText = commitLatestLessonText();
  if (!ensureLessonTextIsReady(exportText)) {
    return;
  }

  if (!canExportVideo()) {
    setStatus("Video export is not supported in this browser. Please use the latest Chrome or Edge.");
    return;
  }

  stopDictation(false);
  stopInputPreview(false);
  stopPlayback(false);
  forceExportVoiceToAnjali();
  state.exportingVideo = true;
  const exportPlaybackRate = getLessonPlaybackRate();
  const effectiveExportQuality = getEffectiveExportQuality();
  const exportQualityLabel = getExportQualityLabel(effectiveExportQuality);
  const shouldIncludeIntro = Boolean(state.introPlayback.enabled);
  const preparingVideoExportMessage = `Preparing ${exportQualityLabel} video with${shouldIncludeIntro ? " intro, " : " "}Anjali narration and typing effect. Please wait...`;
  setStatus(preparingVideoExportMessage);
  updateTaskProgressUi(0.06, true, { mirrorStage: true, label: preparingVideoExportMessage });
  updateStageModeUi();
  downloadBtn.disabled = true;
  playBtn.disabled = true;
  stopStageBtn.disabled = true;
  recordBtn.disabled = true;
  stopRecordBtn.disabled = true;
  clearAudioBtn.disabled = true;
  audioInput.disabled = true;
  let exportStream = null;
  let canvasStream = null;
  let exportCanvas = null;
  let includedIntroInExport = false;

  try {
    exportCanvas = document.createElement("canvas");
    exportCanvas.width = previewCanvas.width;
    exportCanvas.height = previewCanvas.height;
    useCanvasSurface(exportCanvas);

    updateTaskProgressUi(0.14, true, { mirrorStage: true });
    const exportNarrationBlob = await ensureAnjaliNarrationReadyForExport({
      timeoutMs: getLongNarrationRequestTimeoutMs(state.text)
    });
    const lessonTimelineDurationMs = Math.max(
      1000,
      Math.round((state.narration.durationMs || getDefaultNarrationDurationMs()) / Math.max(0.1, exportPlaybackRate))
    );
    const introTimelineDurationMs = shouldIncludeIntro
      ? Math.max(0, Math.round(state.introPlayback.durationMs || 0))
      : 0;
    const totalExportTimelineDurationMs = lessonTimelineDurationMs + introTimelineDurationMs;
    const exportTargetDurationMs = totalExportTimelineDurationMs + getExportCompletionTailMs();
    const lessonBaseCaptureRate = getLessonExportCaptureRate();
    const exportRenderSpeedMultiplier = getEffectiveExportRenderSpeedMultiplier(
      lessonBaseCaptureRate,
      totalExportTimelineDurationMs
    );
    updateTaskProgressUi(0.2, true, { mirrorStage: true });
    await ensureVideoExportServer();
    await ensureCanvasReadyForExport();
    const renderingVideoExportMessage = shouldIncludeIntro
      ? `Rendering video in the background at ${exportRenderSpeedMultiplier}x with the intro clip first, then natural Anjali narration and typing. Please wait...`
      : `Rendering video in the background at ${exportRenderSpeedMultiplier}x with natural Anjali narration and typing effect. Please wait...`;
    setStatus(renderingVideoExportMessage);
    updateTaskProgressUi(0.24, true, { mirrorStage: true, label: renderingVideoExportMessage });
    state.displayedText = "";
    drawScene(0.12);

    const captureRate = getAcceleratedExportCaptureRate(
      lessonBaseCaptureRate,
      exportRenderSpeedMultiplier
    );
    setExportCaptureRate(captureRate);

    try {
      canvasStream = canvas.captureStream(captureRate);
    } catch (error) {
      if (/origin-clean/i.test(error.message || "")) {
        await ensureCanvasReadyForExport();
        canvasStream = canvas.captureStream(captureRate);
      } else {
        throw error;
      }
    }
    const videoTracks = canvasStream.getVideoTracks();
    if (!videoTracks.length) {
      throw new Error("The browser did not provide a video track for the canvas export.");
    }

    const videoOnlyTracks = videoTracks.filter((track) => track.kind === "video");
    if (!videoOnlyTracks.length) {
      throw new Error("Canvas export did not produce a usable video track.");
    }
    state.exportVideoTrack = videoOnlyTracks[0];
    drawScene(0.12);

    exportStream = canvasStream;
    if (!exportStream.getVideoTracks().length) {
      throw new Error("The export stream is missing the video track.");
    }

    const recorder = createExportMediaRecorder(
      exportStream,
      getLessonExportBitrate(effectiveExportQuality)
    );
    const mimeType = recorder.mimeType || getSupportedVideoMimeType(false) || "video/webm";
    if (recorder.mimeType && recorder.mimeType.startsWith("audio/")) {
      throw new Error("The browser tried to start an audio-only recorder instead of video export.");
    }
    const chunks = [];
    let recorderError = null;

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
    };

    recorder.onerror = (event) => {
      recorderError = event.error || new Error("Recording failed.");
    };

    const blobPromise = new Promise((resolve, reject) => {
      recorder.onstop = () => {
        if (recorderError) {
          reject(recorderError);
          return;
        }

        const blob = new Blob(chunks, { type: recorder.mimeType || mimeType || "video/webm" });
        if (!blob.size) {
          reject(new Error("The browser finished recording, but no video data was produced."));
          return;
        }

        resolve(blob);
      };
    });

    recorder.start(1500);
    if (shouldIncludeIntro) {
      try {
        includedIntroInExport = await playIntroClipForExport({
          playbackRate: exportRenderSpeedMultiplier
        });
      } catch (error) {
        console.error(error);
        includedIntroInExport = false;
        setIntroClipStatus("The intro clip could not be rendered during export, so the export continued with the lesson only.");
      }
    }
    if (state.stageVideo.element) {
      await startStageVideoPlayback({
        restart: true,
        playbackRate: exportRenderSpeedMultiplier
      });
    }
    await renderNarrationTimelineForExport(
      state.narration.durationMs || getDefaultNarrationDurationMs(),
      exportPlaybackRate,
      { renderSpeedMultiplier: exportRenderSpeedMultiplier }
    );

    state.speaking = false;
    cancelVisualLoop();
    state.mouthOpen = 0.12;
    state.displayedText = state.text;
    drawScene(0.12);
    await delay(Math.max(24, Math.round(getFinalExportHoldMs() / exportRenderSpeedMultiplier)));
    recorder.stop();

    const videoBlob = await blobPromise;
    if (!videoBlob.type.startsWith("video/")) {
      throw new Error(`The browser returned ${videoBlob.type || "an unknown file"} instead of video.`);
    }

    let audioBlob = exportNarrationBlob;
    let audioFileName = "lesson-export-audio.wav";
    if (includedIntroInExport) {
      try {
        const introAudioBlob = await getIntroExportBlob();
        audioBlob = await combineNarrationBlobs([introAudioBlob, exportNarrationBlob]);
        setIntroClipStatus("The intro clip and its audio will be included before the Anjali lesson narration.");
      } catch (error) {
        console.error(error);
        audioBlob = await combineNarrationBlobs([
          createSilentWavBlob(state.introPlayback.durationMs || 1000),
          exportNarrationBlob
        ]);
        setIntroClipStatus("The intro video exported, but its audio could not be merged cleanly, so the export used silent intro audio.");
      }
      audioFileName = "intro-and-lesson-audio.wav";
    }
    let videoSaveHandle = null;

    try {
      videoSaveHandle = await requestVideoSaveHandle("learning-outcomes-video.mp4");
    } catch (error) {
      if (error?.name === "AbortError") {
        setStatus("Video export cancelled after rendering.");
        return;
      }

      console.error(error);
    }

    const combiningVideoExportMessage = `Combining video, ${includedIntroInExport ? "intro audio, " : ""}narration${state.music.enabled ? ", and music" : ""} with FFmpeg. Please wait...`;
    setStatus(combiningVideoExportMessage);
    updateTaskProgressUi(0.9, true, { mirrorStage: true, label: combiningVideoExportMessage });
    const finalBlob = await muxVideoAndAudio(videoBlob, audioBlob, {
      audioFileName,
      audioSpeed: exportPlaybackRate,
      videoSpeed: exportRenderSpeedMultiplier,
      targetDurationMs: exportTargetDurationMs,
      saveHandle: videoSaveHandle
    });
    if (!videoSaveHandle && (!finalBlob || !finalBlob.size)) {
      throw new Error("The final video file was empty.");
    }

    if (videoSaveHandle) {
      updateTaskProgressUi(1, true, { mirrorStage: true });
      setStatus(`Video saved with${includedIntroInExport ? " intro and " : " "}narration audio.`);
    } else {
      generateAndDownloadSrtCaptions(includedIntroInExport ? Math.max(0, Math.round(state.introPlayback.durationMs || 0)) : 0);
      triggerFileDownload(finalBlob, "learning-outcomes-video.mp4");
      updateTaskProgressUi(1, true, { mirrorStage: true });
      setStatus(`Video downloaded with${includedIntroInExport ? " intro and " : " "}narration audio.`);
    }
  } catch (error) {
    console.error(error);
    const errorMessage = error?.message || "unknown error";
    if (/Anjali (clone )?server|local Anjali voice server|local narration server/i.test(errorMessage)) {
      setStatus(`Video export failed: ${errorMessage} Start the local Anjali voice server on port 8426, then export again.`);
    } else {
      setStatus(`Video export failed: ${errorMessage}.`);
    }
  } finally {
    state.exportingVideo = false;
    clearTypingInterval();
    cancelVisualLoop();
    stopActiveAudio();
    state.exportFallbackMode = false;
    useCanvasSurface(previewCanvas);
    if (exportStream) {
      exportStream.getTracks().forEach((track) => track.stop());
    }
    if (canvasStream) {
      canvasStream.getTracks().forEach((track) => track.stop());
    }
    clearExportCaptureRate();
    state.exportVideoTrack = null;
    state.speechUtterance = null;
    state.speaking = false;
    state.mouthOpen = 0.12;
    state.introPlayback.active = false;
    state.introPlayback.previewVisible = false;
    if (state.introPlayback.element) {
      state.introPlayback.element.pause();
      try {
        state.introPlayback.element.currentTime = 0;
        state.introPlayback.element.playbackRate = 1;
      } catch (error) {
        console.error(error);
      }
    }
    if (state.stageVideo.element) {
      try {
        state.stageVideo.element.playbackRate = 1;
      } catch (error) {
        console.error(error);
      }
    }
    state.displayedText = state.text;
    drawScene(0.12);
    setRecordingUi(false);
    updateNarrationUi();
    updateSpeechToolsUi();
    updateStageModeUi();
    updatePlaybackProgressUi(0, false);
    resetTaskProgressUi();
    audioInput.disabled = false;
    stopStageBtn.disabled = false;
    downloadBtn.disabled = false;
    playBtn.disabled = false;
  }
}

async function handleAlternatePdfDownload() {
  if (!isPdfPresentationMode()) {
    return;
  }

  await exportPdfModeVideo(getPdfRenderMode() === "exact" ? "context" : "exact");
}

async function setNarrationFromBlob(blob, fileName, sourceLabel, textSource = "", voice = "", options = {}) {
  stopPlayback(false);

  const nextUrl = URL.createObjectURL(blob);

  try {
    const audioElement = await createLoadedAudio(nextUrl);
    const durationMs = Number.isFinite(audioElement.duration)
      ? Math.max(1000, Math.ceil(audioElement.duration * 1000))
      : getDefaultNarrationDurationMs();

    resetNarrationState();
    const syncProfile = options.syncProfile
      ? scaleSpeechSyncProfile(options.syncProfile, durationMs)
      : null;
    state.narration = {
      url: nextUrl,
      fileName,
      durationMs,
      source: sourceLabel,
      blob,
      textSource,
      voice,
      syncProfile: syncProfile
        ? {
          text: textSource,
          profile: syncProfile
        }
        : null
    };

    updateNarrationUi();
    setRecordingUi(false);
    setAudioStatus(`${sourceLabel}: ${fileName}`);
    if (!options.silent) {
      setStatus("Narration is ready. Play uses this audio, and download will include it.");
    }
  } catch (error) {
    URL.revokeObjectURL(nextUrl);
    throw error;
  }
}

async function handleImageSelection(event) {
  const selectedFiles = Array.from(event.target.files || []);
  if (!selectedFiles.length) {
    return;
  }

  const existingImages = [...state.images];
  const targetPageIndex = stagePanel.classList.contains("hidden") ? 0 : state.previewPageIndex;
  const remainingSlots = Math.max(0, MAX_IMAGE_UPLOADS - existingImages.length);
  const files = selectedFiles.slice(0, remainingSlots || MAX_IMAGE_UPLOADS);

  if (!files.length) {
    setStatus(`You already reached the ${MAX_IMAGE_UPLOADS} image limit. Remove one image first if you want to add another.`);
    return;
  }

  try {
    const loadedImages = await Promise.all(
      files.map(async (file) => {
        const dataUrl = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = () => reject(new Error(`Could not read ${file.name}.`));
          reader.readAsDataURL(file);
        });

        const image = await loadImageFromDataUrl(dataUrl);
        return { fileName: file.name, dataUrl, image };
      })
    );

    const pageAssignedImages = assignPageIndexesToNewImages(existingImages, loadedImages, targetPageIndex);
    state.images = applyDefaultImageLayouts([...existingImages, ...pageAssignedImages]);
    state.imageEditor.activeIndex = state.images.length ? state.images.length - 1 : -1;
    renderImagePreviews();
    drawScene(state.mouthOpen);
    setStatus(
      (existingImages.length + selectedFiles.length) > MAX_IMAGE_UPLOADS
        ? `Loaded up to ${MAX_IMAGE_UPLOADS} images. New images were placed on page ${targetPageIndex + 1} and can now be dragged anywhere on the full slide.`
        : `Images were added to page ${targetPageIndex + 1} and can now be moved anywhere on the presentation slide.`
    );
  } catch (error) {
    console.error(error);
    setStatus(error.message || "Image upload failed.");
  } finally {
    event.target.value = "";
  }
}

function insertTextIntoTextarea(textarea, text) {
  if (!textarea || typeof text !== "string") {
    return {
      endIndex: 0,
      insertedText: ""
    };
  }

  const selectionStart = Number.isFinite(textarea.selectionStart) ? textarea.selectionStart : textarea.value.length;
  const selectionEnd = Number.isFinite(textarea.selectionEnd) ? textarea.selectionEnd : textarea.value.length;
  const prefix = textarea.value.slice(0, selectionStart);
  const suffix = textarea.value.slice(selectionEnd);
  const needsLeadingBreak = prefix && !/\s$/.test(prefix) && text ? "\n" : "";
  const needsTrailingBreak = suffix && !/^\s/.test(suffix) && text ? "\n" : "";
  const insertion = `${needsLeadingBreak}${text}${needsTrailingBreak}`;

  textarea.setRangeText(insertion, selectionStart, selectionEnd, "end");
  return {
    startIndex: selectionStart,
    endIndex: selectionStart + insertion.length,
    insertedText: insertion
  };
}

function getPageIndexForTextOffset(pages = [], textOffset = 0, fallbackIndex = 0) {
  if (!Array.isArray(pages) || !pages.length) {
    return Math.max(0, fallbackIndex);
  }

  const safeOffset = Math.max(0, Math.round(Number(textOffset) || 0));
  const matchIndex = pages.findIndex((page) => safeOffset <= Math.max(0, Number(page?.textEndIndex) || 0));
  if (matchIndex >= 0) {
    return matchIndex;
  }

  return Math.max(0, Math.min(Math.max(0, pages.length - 1), Math.round(Number(fallbackIndex) || 0)));
}

function buildNormalizedPdfSearchIndex(text = "") {
  const source = String(text || "");
  const chars = [];
  const indexMap = [];
  let pendingSpace = false;

  for (let index = 0; index < source.length; index += 1) {
    const character = source[index];
    if (/\s/.test(character)) {
      pendingSpace = chars.length > 0;
      continue;
    }

    if (pendingSpace) {
      chars.push(" ");
      indexMap.push(index);
      pendingSpace = false;
    }

    chars.push(character.toLowerCase());
    indexMap.push(index);
  }

  return {
    text: chars.join(""),
    indexMap
  };
}

function normalizePdfSearchFragment(text = "") {
  return String(text || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function getPdfAnchorSearchCandidates(anchorText = "") {
  const normalizedAnchor = normalizePdfSearchFragment(anchorText);
  if (!normalizedAnchor) {
    return [];
  }

  const candidates = [normalizedAnchor];
  const clauses = normalizedAnchor
    .split(/\s{2,}|(?<=[.:;!?])\s+/)
    .map((part) => part.trim())
    .filter((part) => part.length >= 10);

  clauses.forEach((clause) => {
    if (!candidates.includes(clause)) {
      candidates.push(clause);
    }
  });

  const firstWords = normalizedAnchor.split(" ").slice(0, 8).join(" ").trim();
  if (firstWords.length >= 10 && !candidates.includes(firstWords)) {
    candidates.push(firstWords);
  }

  return candidates.sort((left, right) => right.length - left.length);
}

function findPdfAnchorLocalOffset(insertedText = "", anchorText = "", searchStart = 0) {
  const directAnchor = String(anchorText || "").trim();
  if (directAnchor) {
    const directIndex = String(insertedText || "").indexOf(directAnchor, Math.max(0, searchStart));
    if (directIndex >= 0) {
      return {
        localOffset: directIndex,
        nextSearchStart: directIndex + directAnchor.length,
        matched: true
      };
    }
  }

  const normalizedInserted = buildNormalizedPdfSearchIndex(insertedText);
  if (!normalizedInserted.text) {
    return {
      localOffset: -1,
      nextSearchStart: Math.max(0, searchStart),
      matched: false
    };
  }

  const normalizedSearchStart = (() => {
    if (searchStart <= 0 || !normalizedInserted.indexMap.length) {
      return 0;
    }

    const mappedIndex = normalizedInserted.indexMap.findIndex((sourceIndex) => sourceIndex >= searchStart);
    return mappedIndex >= 0 ? mappedIndex : normalizedInserted.text.length;
  })();

  const candidates = getPdfAnchorSearchCandidates(anchorText);
  for (const candidate of candidates) {
    let normalizedIndex = normalizedInserted.text.indexOf(candidate, normalizedSearchStart);
    if (normalizedIndex < 0 && normalizedSearchStart > 0) {
      normalizedIndex = normalizedInserted.text.indexOf(candidate);
    }

    if (normalizedIndex < 0) {
      continue;
    }

    const localOffset = normalizedInserted.indexMap[Math.min(normalizedIndex, normalizedInserted.indexMap.length - 1)] ?? 0;
    const nextNormalizedIndex = Math.min(
      normalizedInserted.indexMap.length - 1,
      normalizedIndex + Math.max(0, candidate.length - 1)
    );
    const nextSearchStart = (normalizedInserted.indexMap[nextNormalizedIndex] ?? localOffset) + 1;
    return {
      localOffset,
      nextSearchStart,
      matched: true
    };
  }

  return {
    localOffset: -1,
    nextSearchStart: Math.max(0, searchStart),
    matched: false
  };
}

function getPdfClipboardImagePageIndexes(insertedText, insertedAbsoluteStartIndex, pages, images = [], fallbackPageIndex = 0) {
  const safeInsertedText = String(insertedText || "");
  if (!safeInsertedText || !Array.isArray(images) || !images.length) {
    return [];
  }

  let searchStart = 0;
  const sourcePageAssignments = new Map();
  const orderedImages = [...images].sort((left, right) => {
    const leftOrder = Number(left?.anchorOrder) || 0;
    const rightOrder = Number(right?.anchorOrder) || 0;
    return leftOrder - rightOrder;
  });

  return orderedImages.map((image) => {
    const anchorMatch = findPdfAnchorLocalOffset(safeInsertedText, image?.anchorText || "", searchStart);
    if (anchorMatch.matched) {
      searchStart = anchorMatch.nextSearchStart;
      const matchedPageIndex = getPageIndexForTextOffset(
        pages,
        Math.max(0, insertedAbsoluteStartIndex + anchorMatch.localOffset),
        fallbackPageIndex
      );
      const sourcePageNumber = Math.max(0, Math.round(Number(image?.sourcePageNumber) || 0));
      if (sourcePageNumber > 0) {
        sourcePageAssignments.set(sourcePageNumber, matchedPageIndex);
      }
      return matchedPageIndex;
    }

    const sourcePageNumber = Math.max(0, Math.round(Number(image?.sourcePageNumber) || 0));
    if (sourcePageNumber > 0 && sourcePageAssignments.has(sourcePageNumber)) {
      return sourcePageAssignments.get(sourcePageNumber);
    }

    return Math.max(0, fallbackPageIndex);
  });
}

function parsePdfClipboardPayload(html = "") {
  if (!html || !html.includes(PDF_CLIPBOARD_MARKER_ATTRIBUTE)) {
    return {
      text: "",
      images: []
    };
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const root = doc.querySelector(`[${PDF_CLIPBOARD_MARKER_ATTRIBUTE}]`);
  if (!root) {
    return {
      text: "",
      images: []
    };
  }

  const text = root.querySelector("[data-maths-teacher-pdf-text]")?.textContent || "";
  const images = Array.from(root.querySelectorAll("img[data-maths-teacher-example-image='1']"))
    .map((image, index) => ({
      dataUrl: image.getAttribute("src") || "",
      fileName: image.getAttribute("data-file-name") || `pasted-example-${index + 1}.png`,
      sourceTag: "pdf-clipboard",
      anchorText: image.getAttribute("data-anchor-text") || "",
      anchorOrder: Math.max(0, Math.round(Number(image.getAttribute("data-anchor-order")) || index)),
      sourcePageNumber: Math.max(0, Math.round(Number(image.getAttribute("data-source-page-number")) || 0))
    }))
    .filter((item) => item.dataUrl.startsWith("data:image/"));

  return { text, images };
}

async function handleLessonInputPaste(event) {
  const clipboardData = event.clipboardData;
  if (!clipboardData) {
    return;
  }

  const html = clipboardData.getData("text/html") || "";
  const plainText = clipboardData.getData("text/plain") || "";
  const pdfPayload = parsePdfClipboardPayload(html);
  const imageFiles = Array.from(clipboardData.items || [])
    .filter((item) => item.kind === "file" && /^image\//i.test(item.type || ""))
    .map((item) => item.getAsFile())
    .filter(Boolean);

  if (!pdfPayload.images.length && !imageFiles.length) {
    return;
  }

  event.preventDefault();

  try {
    const filesAsImages = await Promise.all(
      imageFiles.map(async (file, index) => ({
        dataUrl: await readFileAsDataUrl(file),
        fileName: file.name || `pasted-image-${index + 1}.png`,
        sourceTag: "clipboard-image"
      }))
    );
    const stageImages = [...pdfPayload.images, ...filesAsImages];
    let targetPageIndex = stagePanel.classList.contains("hidden") ? 0 : state.previewPageIndex;
    let imagePageIndexes = [];

    if (pdfPayload.text || plainText) {
      const insertResult = insertTextIntoTextarea(lessonInput, pdfPayload.text || plainText);
      scheduleLessonInputChange();
      const insertedTextEndIndex = Math.max(0, Number(insertResult.endIndex) || 0);
      const insertedTextStartIndex = Math.max(0, Number(insertResult.startIndex) || 0);
      const updatedContent = getPaginatedSlideContent(lessonInput.value.trim(), !lessonInput.value.trim(), targetPageIndex, false);
      targetPageIndex = getPageIndexForTextOffset(updatedContent.pages, insertedTextEndIndex, targetPageIndex);
      imagePageIndexes = getPdfClipboardImagePageIndexes(
        insertResult.insertedText,
        insertedTextStartIndex,
        updatedContent.pages,
        pdfPayload.images,
        targetPageIndex
      );
    }

    const stageImagesWithPages = stageImages.map((item, index) => ({
      ...item,
      pageIndex: (() => {
        const pdfPresentationIndex = getPdfPresentationPageIndexForSourcePageNumber(item?.sourcePageNumber);
        if (pdfPresentationIndex >= 0) {
          return pdfPresentationIndex;
        }

        if (Number.isInteger(imagePageIndexes[index])) {
          return imagePageIndexes[index];
        }

        if (Number.isInteger(item.pageIndex)) {
          return item.pageIndex;
        }

        return targetPageIndex;
      })()
    }));

    const addedCount = await addStageImagesFromDataUrls(stageImagesWithPages, { targetPageIndex });
    setStatus(
      addedCount
        ? `Pasted lesson content and added ${addedCount} maths/example image${addedCount === 1 ? "" : "s"} to the matching lesson pages.`
        : "Pasted lesson content."
    );
  } catch (error) {
    console.error(error);
    setStatus(error.message || "Could not paste the copied PDF example images.");
  }
}

async function handleAudioSelection(event) {
  const [file] = Array.from(event.target.files || []);

  if (!file) {
    clearNarration();
    return;
  }

  try {
    await setNarrationFromBlob(file, file.name, "Uploaded narration");
  } catch (error) {
    console.error(error);
    clearNarration();
    setStatus(error.message || "Audio upload failed.");
  }
}

async function startRecordingNarration() {
  if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
    setStatus("Recording is not supported in this browser.");
    return;
  }

  stopPlayback(false);

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mimeType = getSupportedAudioMimeType();
    const recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);

    state.recording = {
      recorder,
      chunks: [],
      stream
    };

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        state.recording.chunks.push(event.data);
      }
    };

    recorder.onerror = () => {
      clearRecordingSession();
      setStatus("Recording failed. Please try again.");
    };

    recorder.onstop = async () => {
      const recordedBlob = new Blob(
        state.recording.chunks,
        { type: recorder.mimeType || mimeType || "audio/webm" }
      );

      clearRecordingSession();

      try {
        await setNarrationFromBlob(
          recordedBlob,
          `recorded-narration-${Date.now()}.webm`,
          "Recorded narration"
        );
      } catch (error) {
        console.error(error);
        clearNarration();
        setStatus(error.message || "Recorded audio could not be prepared.");
      }
    };

    recorder.start();
    setRecordingUi(true);
    setAudioStatus("Recording narration... click Stop Recording when you finish.");
    setStatus("Recording narration from your microphone.");
  } catch (error) {
    console.error(error);
    setStatus("Microphone access failed. Please allow microphone permission and try again.");
  }
}

function stopRecordingNarration() {
  if (!state.recording.recorder || state.recording.recorder.state !== "recording") {
    return;
  }

  setAudioStatus("Processing recorded narration...");
  setStatus("Finishing the recording...");
  state.recording.recorder.stop();
}

function clearNarration() {
  stopPlayback(false);
  resetNarrationState();
  updateNarrationUi();
  audioInput.value = "";
  setRecordingUi(false);
  setAudioStatus("No narration audio selected.");
  setStatus("Narration cleared. Upload or record again if you want audio in the downloaded video.");
}

function handleTranscribeAudioSelection(event) {
  const [file] = Array.from(event.target.files || []);
  if (!file) {
    state.transcribeSelectedFile = null;
    setTranscribeStatus("No audio uploaded for transcription.");
    resetTranscribeProgress();
    updateSpeechToolsUi();
    return;
  }

  state.transcribeSelectedFile = file;
  setTranscribeStatus(`Selected audio: ${file.name}. Click Submit Audio to convert it into text.`);
  resetTranscribeProgress();
  updateSpeechToolsUi();
}

async function handleTranscribeAudioUpload() {
  const file = state.transcribeSelectedFile;
  if (!file) {
    setTranscribeStatus("Select an audio file first, then click Submit Audio.");
    updateSpeechToolsUi();
    return;
  }

  state.transcribing = true;
  setTranscribeProgress(10, "Starting");
  updateSpeechToolsUi();

  try {
    setTranscribeProgress(20, "Checking server");
    const serverReady = await ensureTranscribeServer();
    if (!serverReady) {
      throw new Error("The local transcription server is not running.");
    }

    setTranscribeStatus(`Transcribing ${file.name}...`);
    setTranscribeProgress(40, "Preparing audio");
    const wavBlob = await decodeAudioFileToWav(file);
    setTranscribeProgress(65, "Converting audio");
    const wavBase64 = arrayBufferToBase64(await wavBlob.arrayBuffer());
    setTranscribeProgress(82, "Sending audio");
    const response = await fetch(`${state.transcribeServerUrl}/api/transcribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fileName: file.name,
        audioBase64: wavBase64
      })
    });

    setTranscribeProgress(94, "Finishing transcript");
    if (!response.ok) {
      const errorPayload = await response.json().catch(() => ({}));
      throw new Error(errorPayload.error || "Audio transcription failed.");
    }

    const payload = await response.json();
    const transcript = (payload.text || "").trim();

    if (!transcript) {
      throw new Error("No clear speech was recognized from the uploaded audio.");
    }

    lessonInput.value = lessonInput.value.trim()
      ? mergeSpeechText(lessonInput.value, transcript)
      : transcript;

    setTranscribeProgress(100, "Completed");
    setTranscribeStatus(`Audio converted to text from ${file.name}.`);
    setSpeechToolsStatus("Uploaded audio was added to the content box as text.");
    state.transcribeSelectedFile = null;
    transcribeAudioInput.value = "";
    handleLessonInputChange();
  } catch (error) {
    console.error(error);
    setTranscribeProgress(0, "Failed");
    setTranscribeStatus(error.message || "Audio transcription failed.");
  } finally {
    state.transcribing = false;
    window.setTimeout(() => {
      if (!state.transcribing) {
        resetTaskProgressUi();
      }
    }, 900);
    updateSpeechToolsUi();
  }
}

async function generateNarrationDownload(voice) {
  clearNarrationWarmupTimer();
  const text = getEffectiveLessonText();
  const lessonIssue = getLessonTextIssue(text);
  if (lessonIssue) {
    setNarrationGenStatus(lessonIssue.message);
    updateSpeechToolsUi();
    return;
  }

  state.generatingNarration = true;
  updateSpeechToolsUi();
  startNarrationLiveProgress("Generating anjali narration...");

  try {
    const label = getNarrationVoiceLabel(voice);
    const sourceLabel = voice === "anjali"
      ? `Generated ${label.toLowerCase()} narration`
      : `${label} narration`;
    state.preferredNarrationVoice = voice;
    updatePreferredVoiceUi();
    setNarrationGenStatus(`Generating ${label.toLowerCase()} narration...`);
    setStatus(`Generating ${label.toLowerCase()} narration...`);
    updateTaskProgressUi(0.16, true, { label: `Generating ${label.toLowerCase()} narration...` });

    let syncProfile = null;
    const blob = await requestNarrationBlob(text, voice, {
      timeoutMs: getLongNarrationRequestTimeoutMs(text),
      onProgress: ({ label, progress }) => updateNarrationLiveProgress(label, progress),
      onSyncProfile: (profile) => {
        syncProfile = profile;
      }
    });
    updateTaskProgressUi(0.74, true, { label: `Finishing ${label.toLowerCase()} narration...` });
    const fileName = `${voice}-narration.wav`;
    await setNarrationFromBlob(blob, fileName, sourceLabel, text, voice, { syncProfile });
    updateTaskProgressUi(0.9, true, { label: `${label} narration is ready to download.` });
    triggerFileDownload(blob, fileName);
    setNarrationGenStatus(`${label} narration downloaded and loaded into the app.`);
    setStatus(`${label} narration downloaded and loaded into the app.`);
    updateTaskProgressUi(1, true, { label: `${label} narration downloaded and loaded into the app.` });
    finishNarrationLiveProgress(`${label} narration ready.`);
  } catch (error) {
    console.error(error);
    setNarrationGenStatus(error.message || "Narration generation failed.");
    setStatus(error.message || "Narration generation failed.", { error: true });
    finishNarrationLiveProgress(error.message || "Narration generation failed.", { error: true });
  } finally {
    state.generatingNarration = false;
    resetTaskProgressUi();
    updateSpeechToolsUi();
  }
}

async function loadGeneratedNarrationIntoApp(voice) {
  clearNarrationWarmupTimer();
  const text = getEffectiveLessonText();
  const lessonIssue = getLessonTextIssue(text);
  if (lessonIssue) {
    setNarrationGenStatus(lessonIssue.message);
    updateSpeechToolsUi();
    return;
  }

  state.generatingNarration = true;
  updateSpeechToolsUi();
  startNarrationLiveProgress("Generating anjali narration for the app...");

  try {
    const label = getNarrationVoiceLabel(voice);
    const sourceLabel = voice === "anjali"
      ? `Generated ${label.toLowerCase()} narration`
      : `${label} narration`;
    state.preferredNarrationVoice = voice;
    updatePreferredVoiceUi();
    setNarrationGenStatus(`Generating ${label.toLowerCase()} narration for the app...`);
    setStatus(`Generating ${label.toLowerCase()} narration for the app...`);
    updateTaskProgressUi(0.16, true, { label: `Generating ${label.toLowerCase()} narration for the app...` });

    let syncProfile = null;
    const blob = await requestNarrationBlob(text, voice, {
      timeoutMs: getLongNarrationRequestTimeoutMs(text),
      onProgress: ({ label, progress }) => updateNarrationLiveProgress(label, progress),
      onSyncProfile: (profile) => {
        syncProfile = profile;
      }
    });
    updateTaskProgressUi(0.74, true, { label: `Loading ${label.toLowerCase()} narration into the app...` });
    const fileName = `${voice}-narration.wav`;
    await setNarrationFromBlob(blob, fileName, sourceLabel, text, voice, { syncProfile });
    setNarrationGenStatus(`${label} narration is loaded into the app.`);
    setStatus(`${label} narration is loaded into the app.`);
    if (audioPreview?.src) {
      try {
        audioPreview.currentTime = 0;
        await audioPreview.play();
      } catch (playError) {
        console.error(playError);
      }
    }
    updateTaskProgressUi(1, true, { label: `${label} narration is loaded into the app.` });
    finishNarrationLiveProgress(`${label} narration is loaded into the app.`);
  } catch (error) {
    console.error(error);
    setNarrationGenStatus(error.message || "Narration generation failed.");
    setStatus(error.message || "Narration generation failed.", { error: true });
    finishNarrationLiveProgress(error.message || "Narration generation failed.", { error: true });
  } finally {
    state.generatingNarration = false;
    resetTaskProgressUi();
    updateSpeechToolsUi();
  }
}

async function showScreen() {
  if (shouldPreferPdfScreenFromInput()) {
    showPdfScreen("context");
    return;
  }

  const text = lessonInput.value.trim();
  if (!ensureLessonTextIsReady(text)) {
    return;
  }

  stopDictation(false);
  stopInputPreview(false);
  state.presentationMode = "lesson";
  state.text = text;
  state.lines = splitIntoLines(text);
  state.words = splitIntoWords(text);
  state.tokens = splitIntoTokens(text);
  state.displayedText = text;
  state.contentScrollOffset = 0;
  state.previewPageIndex = 0;
  updatePlaybackProgressUi(0, false);
  syncImageLayouts();
  inputPanel.classList.add("hidden");
  stagePanel.classList.remove("hidden");
  updateStageModeUi();
  updateStageViewUi();

  if (state.introPlayback.enabled) {
    const introReady = await ensureDefaultIntroClip();
    if (introReady && state.introPlayback.element) {
      state.introPlayback.previewVisible = true;
      state.introPlayback.active = false;
      try {
        state.introPlayback.element.pause();
        state.introPlayback.element.currentTime = 0;
      } catch (error) {
        console.error(error);
      }
      drawScene(0.12);
      setIntroClipStatus("Intro clip is marked and shown on the screen. Play or Export will start with it.");
    } else {
      state.introPlayback.previewVisible = false;
      state.introPlayback.active = false;
      drawScene(0.12);
    }
  } else {
    state.introPlayback.previewVisible = false;
    state.introPlayback.active = false;
    drawScene(0.12);
  }
  if (state.stageVideo.element) {
    void startStageVideoPlayback({ restart: true });
  } else {
    ensureStageMediaLoop();
  }

  const hasMultiplePages = state.renderedPageCount > 1;
  const pageHint = hasMultiplePages
    ? " Use Prev Page and Next Page to review the full presentation. Play and Download move through those pages automatically."
    : "";
  const videoHint = state.stageVideo.element
    ? " Drag the active stage video anywhere on the blue screen and resize it from the corner handle."
    : "";

  if (state.narration.url) {
    setStatus(state.images.length
      ? `Screen is ready. Drag images anywhere on the full slide and resize them as needed.${videoHint}${pageHint}`
      : `Screen is ready. Play uses your narration audio, and download will include it.${videoHint}${pageHint}`);
  } else {
    setStatus(state.images.length
      ? `Screen is ready. Drag images anywhere on the full slide and resize them as needed.${videoHint}${pageHint}`
      : (state.preferredNarrationVoice === "anjali"
        ? `Screen is ready. Play and Download will use the latest output text in Anjali voice automatically.${videoHint}${pageHint}`
        : `Screen is ready. Play and Download will use the saved ${getNarrationVoiceLabel(state.preferredNarrationVoice).toLowerCase()} voice when the local speech server is running.${videoHint}${pageHint}`));
  }
}

showScreenBtn.addEventListener("click", () => runLockedAction("showScreen", [showScreenBtn, pdfShowBtn, pdfPresentBtn], showScreen));
imageInput.addEventListener("change", handleImageSelection);
sceneImageInput.addEventListener("change", handleSceneImageSelection);
sceneMusicInput.addEventListener("change", handleSceneMusicSelection);
if (mathsSourceInput) {
  mathsSourceInput.addEventListener("input", () => {
    if (state.mathsTranslator.auto) {
      scheduleMathsTranslation({ applyToLesson: true, force: true, fromUserAction: true });
    } else {
      scheduleMathsPreviewOnly(mathsSourceInput.value, {
        delayMs: 160,
        loadingLabel: "Preparing maths preview...",
        statusMessage: "Auto translate is off. Use Translate To Pure Maths when you want to sync the result."
      });
    }
  });
}
if (translateMathsBtn) {
  translateMathsBtn.addEventListener("click", () => {
    scheduleMathsTranslation({ applyToLesson: true, force: true, fromUserAction: true, useLessonInputSource: true, delayMs: 60 });
    window.setTimeout(() => {
      if (state.mathsTranslator.lastTranslated) {
        setStatus("Pure maths translation is ready in the lesson box.");
      }
    }, 100);
  });
}
if (clearMathsSourceBtn) {
  clearMathsSourceBtn.addEventListener("click", () => {
    if (state.mathsTranslator.timerId) {
      window.clearTimeout(state.mathsTranslator.timerId);
      state.mathsTranslator.timerId = 0;
    }
    if (state.mathsTranslator.previewTimerId) {
      window.clearTimeout(state.mathsTranslator.previewTimerId);
      state.mathsTranslator.previewTimerId = 0;
    }
    if (mathsSourceInput) {
      mathsSourceInput.value = "";
    }
    state.mathsTranslator.lastSource = "";
    state.mathsTranslator.lastTranslated = "";
    setMathsTranslateLoading(false, "Translation complete.");
    updateMathsTranslationPreview("");
    setMathsTranslatorStatus("Maths translator source cleared.");
  });
}
if (mathsAutoTranslateToggle) {
  mathsAutoTranslateToggle.addEventListener("change", (event) => {
    state.mathsTranslator.auto = Boolean(event.target.checked);
    if (state.mathsTranslator.auto && mathsSourceInput?.value.trim()) {
      scheduleMathsTranslation({ applyToLesson: true, force: true, fromUserAction: true, delayMs: 60 });
    } else {
      setMathsTranslateLoading(false, "Translation complete.");
      setMathsTranslatorStatus(state.mathsTranslator.auto
        ? "Auto translate is on. New source input will sync into the lesson box."
        : "Auto translate is off. The lesson box keeps its current text until you translate again.");
    }
  });
}
if (placeValueNumberInput) {
  placeValueNumberInput.addEventListener("input", () => {
    const digitsOnly = sanitizePlaceValueNumber(placeValueNumberInput.value);
    placeValueNumberInput.value = digitsOnly;
  });
}
if (applyPlaceValueTableBtn) {
  applyPlaceValueTableBtn.addEventListener("click", () => {
    void runLockedAction("placeValueTable", [applyPlaceValueTableBtn, showPlaceValueTableBtn], async () => applyPlaceValueTableBuilder());
  });
}
if (showPlaceValueTableBtn) {
  showPlaceValueTableBtn.addEventListener("click", () => {
    void runLockedAction("placeValueTable", [applyPlaceValueTableBtn, showPlaceValueTableBtn], async () => applyPlaceValueTableBuilder({ showScreenAfter: true }));
  });
}
lessonInput.addEventListener("input", () => {
  scheduleLessonInputChange();
  if (!mathsSourceInput?.value.trim()) {
    scheduleMathsPreviewOnly(lessonInput.value, {
      delayMs: 180,
      loadingLabel: "Preparing maths preview..."
    });
    if (state.mathsTranslator.auto && lessonInput.value.trim()) {
      setMathsTranslatorStatus("Lesson text will be normalized to pure maths when you translate, preview, present, or export.");
    }
  }
});
lessonInput.addEventListener("paste", (event) => {
  void handleLessonInputPaste(event);
});
lessonInput.addEventListener("select", refreshSelectedPhraseFromInput);
lessonInput.addEventListener("mouseup", refreshSelectedPhraseFromInput);
lessonInput.addEventListener("keyup", refreshSelectedPhraseFromInput);
scenePromptInput.addEventListener("input", () => {
  const previewScene = analyzeScenePrompt(scenePromptInput.value.trim() || lessonInput.value.trim());
  state.scene = {
    ...state.scene,
    ...previewScene,
    vfx: sceneVfxSelect.value === "auto" ? previewScene.vfx : sceneVfxSelect.value,
    exportQuality: getSelectedExportQuality()
  };
  updateScenePreview();
});
sceneVfxSelect.addEventListener("change", () => {
  const detectedVfx = analyzeScenePrompt(scenePromptInput.value.trim() || lessonInput.value.trim()).vfx;
  state.scene.vfx = sceneVfxSelect.value === "auto" ? detectedVfx : sceneVfxSelect.value;
  updateScenePreview();

  if (!stagePanel.classList.contains("hidden")) {
    drawScene(state.mouthOpen);
  }
});
sceneMusicModeSelect.addEventListener("change", () => {
  updateScenePreview();
});
exportQualitySelect.addEventListener("change", () => {
  state.scene.exportQuality = getSelectedExportQuality();
  updateScenePreview();
});
generateSceneBtn.addEventListener("click", generateSceneSetup);
generateSceneShowBtn.addEventListener("click", () => generateSceneSetup({ showScreenAfter: true }));
clearSceneBtn.addEventListener("click", clearSceneSetup);
if (themeSelect) {
  themeSelect.addEventListener("change", (event) => {
    applyTheme(event.target.value);
  });
}
if (themeToggle) {
  themeToggle.addEventListener("change", (event) => {
    applyTheme(event.target.checked ? "dark" : "light");
  });
}
workflowStepButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openWorkflowTarget(button.dataset.workflowTarget || "");
  });
});
presentationTemplateInputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    if (event.target.checked) {
      setPresentationTemplate(event.target.value);
    }
  });
});
if (saveOutcomesTitleBtn) {
  saveOutcomesTitleBtn.addEventListener("click", () => {
    setOutcomesTitle(outcomesTitleInput?.value || "");
  });
}
if (outcomesTitleInput) {
  outcomesTitleInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setOutcomesTitle(outcomesTitleInput.value);
    }
  });
}
if (insertSpaceBtn) {
  insertSpaceBtn.addEventListener("click", () => insertTextIntoActiveField(" ", "Space"));
}
if (insertNewLineBtn) {
  insertNewLineBtn.addEventListener("click", () => insertTextIntoActiveField("\n", "New line"));
}
if (insertTabBtn) {
  insertTabBtn.addEventListener("click", () => insertTextIntoActiveField("    ", "Tab spacing"));
}
if (insertBulletBtn) {
  insertBulletBtn.addEventListener("click", () => insertTextIntoActiveField("• ", "Bullet"));
}
if (insertArrowBtn) {
  insertArrowBtn.addEventListener("click", () => insertTextIntoActiveField(" → ", "Arrow"));
}
if (insertMultiplyBtn) {
  insertMultiplyBtn.addEventListener("click", () => insertTextIntoActiveField(" × ", "Multiplication sign"));
}
if (insertDivideBtn) {
  insertDivideBtn.addEventListener("click", () => insertTextIntoActiveField(" ÷ ", "Division sign"));
}
if (insertLessEqualBtn) {
  insertLessEqualBtn.addEventListener("click", () => insertTextIntoActiveField(" ≤ ", "Less-than-or-equal sign"));
}
if (insertGreaterEqualBtn) {
  insertGreaterEqualBtn.addEventListener("click", () => insertTextIntoActiveField(" ≥ ", "Greater-than-or-equal sign"));
}
if (insertRupeeBtn) {
  insertRupeeBtn.addEventListener("click", () => insertTextIntoActiveField("₹", "Rupee sign"));
}
textColorSelect.addEventListener("change", (event) => {
  updateDisplayStyle({ color: event.target.value });
});
boldToggleBtn.addEventListener("click", () => {
  updateDisplayStyle({ bold: !state.displayStyle.bold });
});
italicToggleBtn.addEventListener("click", () => {
  updateDisplayStyle({ italic: !state.displayStyle.italic });
});
underlineToggleBtn.addEventListener("click", () => {
  updateDisplayStyle({ underline: !state.displayStyle.underline });
});
caseOriginalBtn.addEventListener("click", () => {
  updateDisplayStyle({ caseMode: "original" });
});
caseLowerBtn.addEventListener("click", () => {
  updateDisplayStyle({ caseMode: "lower" });
});
caseTitleBtn.addEventListener("click", () => {
  updateDisplayStyle({ caseMode: "title" });
});
caseUpperBtn.addEventListener("click", () => {
  updateDisplayStyle({ caseMode: "upper" });
});
selectedTextColorSelect.addEventListener("change", (event) => {
  updateSelectionStyle({ color: event.target.value });
});
selectedBoldToggleBtn.addEventListener("click", () => {
  updateSelectionStyle({ bold: !state.selectionStyle.bold });
});
selectedItalicToggleBtn.addEventListener("click", () => {
  updateSelectionStyle({ italic: !state.selectionStyle.italic });
});
selectedUnderlineToggleBtn.addEventListener("click", () => {
  updateSelectionStyle({ underline: !state.selectionStyle.underline });
});
applySelectedStyleBtn.addEventListener("click", applySelectedTextStyle);
clearSelectedStyleBtn.addEventListener("click", clearSelectedTextStyle);
dictateBtn.addEventListener("click", startDictation);
stopDictateBtn.addEventListener("click", () => stopDictation(true));
previewTextBtn.addEventListener("click", () => runLockedAction("preview", [previewTextBtn, previewAnjaliBtn], async () => openPreviewVoiceChooser()));
if (previewAnjaliBtn) {
  previewAnjaliBtn.addEventListener("click", () => runLockedAction("preview", [previewTextBtn, previewAnjaliBtn], async () => startTextPreview("anjali")));
}
stageToolbarGroups.forEach((group) => {
  group.addEventListener("toggle", () => {
    if (!group.open) {
      return;
    }

    stageToolbarGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        otherGroup.open = false;
      }
    });
  });
});
pdfInput.addEventListener("change", handlePdfSelection);
pdfShowBtn.addEventListener("click", () => runLockedAction("pdfShow", [pdfShowBtn, showScreenBtn], showPdfOnScreen));
pdfPresentBtn.addEventListener("click", () => runLockedAction("pdfPresent", [pdfPresentBtn, playBtn], presentPdf));
pdfSelectAllBtn.addEventListener("click", selectAllPdfPages);
pdfClearSelectionBtn.addEventListener("click", clearSelectedPdfPages);
clearPdfBtn.addEventListener("click", () => clearPdfSelection({ keepLessonText: true }));
slideVoiceSelect.addEventListener("change", (event) => {
  state.preferredNarrationVoice = "anjali";
  updatePreferredVoiceUi();
  setSpeechToolsStatus("Saved slide voice is locked to Anjali Voice.");
});
stopPreviewBtn.addEventListener("click", () => stopInputPreview(true));
previewCanvas.addEventListener("pointerdown", beginImageInteraction);
previewCanvas.addEventListener("pointermove", moveImageInteraction);
previewCanvas.addEventListener("pointerup", endImageInteraction);
previewCanvas.addEventListener("pointercancel", endImageInteraction);
previewCanvas.addEventListener("pointerleave", () => {
  if (!state.imageEditor.mode) {
    updateCanvasCursor(null);
  }
});
startServersBtn.addEventListener("click", startServersFromPage);
copyStartAllBtn.addEventListener("click", copyStartAllCommand);
checkServersBtn.addEventListener("click", checkServerHealth);
transcribeAudioInput.addEventListener("change", handleTranscribeAudioSelection);
submitTranscribeBtn.addEventListener("click", handleTranscribeAudioUpload);
audioInput.addEventListener("change", handleAudioSelection);
videoInput.addEventListener("change", handleVideoSelection);
introClipEnabled.addEventListener("change", (event) => {
  state.introPlayback.enabled = event.target.checked;
  setIntroClipStatus(
    state.introPlayback.enabled
      ? "Intro clip is enabled. It will be used only when available."
      : "Intro clip is off. The lesson will start directly."
  );
  if (state.introPlayback.enabled) {
    void ensureDefaultIntroClip();
  }
});
recordBtn.addEventListener("click", startRecordingNarration);
stopRecordBtn.addEventListener("click", stopRecordingNarration);
clearAudioBtn.addEventListener("click", clearNarration);
if (loadAnjaliNarrationBtn) {
  loadAnjaliNarrationBtn.addEventListener("click", () => {
    void runLockedAction("narrationLoad", [loadAnjaliNarrationBtn, downloadAnjaliBtn], async () => loadGeneratedNarrationIntoApp("anjali"));
  });
}
if (downloadAnjaliBtn) {
  downloadAnjaliBtn.addEventListener("click", () => runLockedAction("narrationDownload", [downloadAnjaliBtn, loadAnjaliNarrationBtn], async () => generateNarrationDownload("anjali")));
}
if (loadMathsNumbersBtn) {
  loadMathsNumbersBtn.addEventListener("click", () => applyMathsLessonTemplate(MATHS_NUMBERS_TEMPLATE, "Numbers lesson loaded."));
}
if (loadMathsOperationsBtn) {
  loadMathsOperationsBtn.addEventListener("click", () => applyMathsLessonTemplate(MATHS_OPERATIONS_TEMPLATE, "Operations lesson loaded."));
}
if (loadMathsTablesBtn) {
  loadMathsTablesBtn.addEventListener("click", () => applyMathsLessonTemplate(MATHS_TABLES_TEMPLATE, "Tables from 2 to 10 loaded."));
}
if (loadMathsSumsBtn) {
  loadMathsSumsBtn.addEventListener("click", () => applyMathsLessonTemplate(MATHS_SUMS_TEMPLATE, "Mixed maths sums loaded."));
}
if (loadMathsPronunciationBtn) {
  loadMathsPronunciationBtn.addEventListener("click", () => applyMathsLessonTemplate(MATHS_PRONUNCIATION_TEMPLATE, "Pronunciation practice loaded."));
}
if (loadTable2Btn) {
  loadTable2Btn.addEventListener("click", () => applyMathsLessonTemplate(buildSingleTimesTable(2), "Table of 2 loaded."));
}
if (loadTable3Btn) {
  loadTable3Btn.addEventListener("click", () => applyMathsLessonTemplate(buildSingleTimesTable(3), "Table of 3 loaded."));
}
if (loadTable4Btn) {
  loadTable4Btn.addEventListener("click", () => applyMathsLessonTemplate(buildSingleTimesTable(4), "Table of 4 loaded."));
}
if (loadTable5Btn) {
  loadTable5Btn.addEventListener("click", () => applyMathsLessonTemplate(buildSingleTimesTable(5), "Table of 5 loaded."));
}
if (loadTable10Btn) {
  loadTable10Btn.addEventListener("click", () => applyMathsLessonTemplate(buildSingleTimesTable(10), "Table of 10 loaded."));
}
if (loadTableComboBtn) {
  loadTableComboBtn.addEventListener("click", () => applyMathsLessonTemplate(MATHS_TABLES_TEMPLATE, "Tables from 2 to 10 loaded."));
}
if (useAnjaliSampleBtn) {
  useAnjaliSampleBtn.addEventListener("click", () => {
    void useBundledAnjaliSampleAsNarration();
  });
}
if (downloadPdfContextBtn) {
  downloadPdfContextBtn.addEventListener("click", () => {
    void beginExportFromUi(handleAlternatePdfDownload);
  });
}
editBtn.addEventListener("click", () => {
  stopInputPreview(false);
  stopPlayback();
  invalidatePdfPresentationRequest();
  pauseStageVideoPlayback();
  state.images = state.images.filter((item) => !isAutoPdfExampleImage(item));
  state.presentationMode = "lesson";
  updatePlaybackProgressUi(0, false);
  stagePanel.classList.add("hidden");
  inputPanel.classList.remove("hidden");
  renderImagePreviews();
  setStatus("You can edit the content now.");
  updateStageModeUi();
  updateStageViewUi();
  updateSpeechToolsUi();
});
playBtn.addEventListener("click", () => runLockedAction("play", [playBtn, pdfPresentBtn, pdfShowBtn], playSlide));
pauseStageBtn.addEventListener("click", pausePdfPresentation);
stageImageUploadBtn.addEventListener("click", () => {
  imageInput.click();
});
stageVideoUploadBtn.addEventListener("click", () => {
  videoInput.click();
});
if (stageImageCutoutBtn) {
  stageImageCutoutBtn.addEventListener("click", async () => {
    try {
      await applyBackgroundRemovalToSelectedImage();
    } catch (error) {
      console.error(error);
      setImageCutoutStatus(error.message || "Background removal could not finish for that image.");
    }
  });
}
if (stageImageRestoreBtn) {
  stageImageRestoreBtn.addEventListener("click", async () => {
    try {
      await restoreSelectedImage();
    } catch (error) {
      console.error(error);
      setImageCutoutStatus(error.message || "The selected image could not be restored.");
    }
  });
}
if (stageVideoCutoutBtn) {
  stageVideoCutoutBtn.addEventListener("click", async () => {
    try {
      await applyBackgroundRemovalToActiveVideo();
    } catch (error) {
      console.error(error);
      setVideoStatus(error.message || "Background removal could not finish for that video.");
    }
  });
}
if (stageVideoRestoreBtn) {
  stageVideoRestoreBtn.addEventListener("click", () => {
    try {
      restoreActiveVideo();
    } catch (error) {
      console.error(error);
      setVideoStatus(error.message || "The selected video could not be restored.");
    }
  });
}
clearVideoBtn.addEventListener("click", () => {
  resetStageVideoState();
  drawScene(state.mouthOpen);
  setVideoStatus("No stage video selected.");
  setStatus("Stage video removed from the screen.");
});
prevPageBtn.addEventListener("click", () => {
  if (state.speaking) {
    return;
  }

  setPreviewPage(state.previewPageIndex - 1);
});
nextPageBtn.addEventListener("click", () => {
  if (state.speaking) {
    return;
  }

  setPreviewPage(state.previewPageIndex + 1);
});
zoomOutBtn.addEventListener("click", () => {
  setPreviewZoom(state.previewZoom - PREVIEW_ZOOM_STEP);
});
zoomInBtn.addEventListener("click", () => {
  setPreviewZoom(state.previewZoom + PREVIEW_ZOOM_STEP);
});
fontDecreaseBtn.addEventListener("click", () => {
  setFontScale(state.fontScale - FONT_SCALE_STEP);
});
fontIncreaseBtn.addEventListener("click", () => {
  setFontScale(state.fontScale + FONT_SCALE_STEP);
});

stageBoldBtn.addEventListener("click", () => {
  updateDisplayStyle({ bold: !state.displayStyle.bold });
});
stageItalicBtn.addEventListener("click", () => {
  updateDisplayStyle({ italic: !state.displayStyle.italic });
});
stageUnderlineBtn.addEventListener("click", () => {
  updateDisplayStyle({ underline: !state.displayStyle.underline });
});
seekBackwardBtn.addEventListener("click", () => {
  jumpPdfPresentation(-PDF_STAGE_SEEK_STEP_MS);
});
seekForwardBtn.addEventListener("click", () => {
  jumpPdfPresentation(PDF_STAGE_SEEK_STEP_MS);
});
stageTimelineInput.addEventListener("input", (event) => {
  seekPdfPresentation(event.target.value);
});
playbackSpeedSelect.addEventListener("change", (event) => {
  handleStagePlaybackRateChange(event.target.value);
});
playbackSpeedSelect.addEventListener("input", (event) => {
  handleStagePlaybackRateChange(event.target.value);
});
if (stagePlaybackSpeedSelect) {
  stagePlaybackSpeedSelect.addEventListener("change", (event) => {
    handleStagePlaybackRateChange(event.target.value);
  });
  stagePlaybackSpeedSelect.addEventListener("input", (event) => {
    handleStagePlaybackRateChange(event.target.value);
  });
}
stopStageBtn.addEventListener("click", () => {
  stopPlayback();
  setStatus("Playback stopped.");
});
[
  cutoutToleranceInput,
  cutoutFeatherInput,
  cutoutSpillInput,
  cutoutScreenBlendInput
].forEach((input) => {
  if (!input) {
    return;
  }

  input.addEventListener("input", handleCutoutControlChange);
  input.addEventListener("change", handleCutoutControlChange);
});
downloadBtn.addEventListener("click", () => {
  void beginExportFromUi(exportVideo);
});

window.addEventListener("beforeunload", () => {
  if (state.anjaliMonitor.timerId) {
    window.clearInterval(state.anjaliMonitor.timerId);
    state.anjaliMonitor.timerId = 0;
  }
  stopInputPreview(false);
  stopDictation(false);
  stopPlayback(false);
  clearRecordingSession();
  resetNarrationState();
});

window.addEventListener("error", (event) => {
  const message = getDisplayErrorMessage(event?.error || event?.message, "The app hit an unexpected error.");
  console.error(event?.error || event);
  showRuntimeDisplayError(message);
});

window.addEventListener("unhandledrejection", (event) => {
  const message = getDisplayErrorMessage(event?.reason, "The app hit an unexpected async error.");
  console.error(event?.reason || event);
  showRuntimeDisplayError(message);
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    void ensureAnjaliCloneServer();
  }
});

window.addEventListener("online", () => {
  void ensureAnjaliCloneServer();
});

stageLogoImage.addEventListener("load", () => {
  drawScene(state.mouthOpen);
});

if (window.INFO_KIDS_LOGO_DATA_URI) {
  stageLogoImage.src = window.INFO_KIDS_LOGO_DATA_URI;
} else {
  stageLogoImage.removeAttribute("src");
}

window.__learningOutcomesState = state;

initializeTheme();
initializePresentationTemplate();
initializeDefaultPlaybackRate();
initializeMathsTeacherAssets();
updateStageVideoUi();
applyPreviewZoom();
drawScene(0.12);
state.introPlayback.enabled = Boolean(introClipEnabled?.checked);
if (state.introPlayback.enabled) {
  void ensureDefaultIntroClip();
} else {
  setIntroClipStatus("Intro clip is off. The lesson will start directly.");
}
setRecordingUi(false);
resetPdfProgress();
renderPdfPreview();
resetTranscribeProgress();
resetSceneGenerationProgress();
updateTextStyleUi();
updateStageViewUi();
updatePreferredVoiceUi();
updateBackgroundMusicUi();
updateScenePreview();
updateSceneGeneratorUi();
updateSpeechToolsUi();
updatePdfUi();
updateCutoutControlsUi();
setCutoutControlsStatus("These controls apply to both image and video background removal.");
checkServerHealth();
startAnjaliCloneMonitor();
if (stageAutoTeachBtn) {
  stageAutoTeachBtn.addEventListener("click", autoTeachSelectedImage);
}
if (stageAutoBRollBtn) {
  stageAutoBRollBtn.addEventListener("click", autoFetchSmartBRoll);
}
if (stageRemoveImageBtn) {
  stageRemoveImageBtn.addEventListener("click", removeSelectedStageImage);
}
if (stageClearImagesBtn) {
  stageClearImagesBtn.addEventListener("click", clearAllStageImages);
}
if (stageRemoveVideoBtn) {
  stageRemoveVideoBtn.addEventListener("click", removeActiveStageVideo);
}

// ==========================================
// AUTONOMOUS AGENT LOGIC
// ==========================================
const localLlmUrlInput = document.getElementById("localLlmUrlInput");
const localLlmModelInput = document.getElementById("localLlmModelInput");
const agentPromptInput = document.getElementById("agentPromptInput");
const agentRunBtn = document.getElementById("agentRunBtn");
const agentStatus = document.getElementById("agentStatus");
const agentLoadingIndicator = document.getElementById("agentLoadingIndicator");

if (localLlmUrlInput && localLlmModelInput) {
  const savedUrl = localStorage.getItem("local_llm_url");
  if (savedUrl) localLlmUrlInput.value = savedUrl;
  
  const savedModel = localStorage.getItem("local_llm_model");
  if (savedModel) localLlmModelInput.value = savedModel;

  localLlmUrlInput.addEventListener("change", () => {
    localStorage.setItem("local_llm_url", localLlmUrlInput.value.trim());
  });
  localLlmModelInput.addEventListener("change", () => {
    localStorage.setItem("local_llm_model", localLlmModelInput.value.trim());
  });
}

if (agentRunBtn) {
  agentRunBtn.addEventListener("click", async () => {
    const localUrl = localLlmUrlInput.value.trim().replace(/\/$/, "");
    const localModel = localLlmModelInput.value.trim();
    const promptText = agentPromptInput.value.trim();

    if (!localUrl || !localModel) {
      agentStatus.textContent = "Please provide Local LLM settings.";
      agentStatus.style.color = "#ef4444";
      return;
    }
    if (!promptText) {
      agentStatus.textContent = "Please provide a topic or prompt.";
      agentStatus.style.color = "#ef4444";
      return;
    }

    agentStatus.textContent = "Agent is thinking locally... this may take a moment depending on your GPU.";
    agentStatus.style.color = "#60a5fa";
    agentRunBtn.disabled = true;
    if (agentLoadingIndicator) agentLoadingIndicator.classList.remove("hidden");

    try {
      // 1. Call Local LLM via Ollama API
      const response = await fetch(`${localUrl}/api/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: localModel,
          system: "You are an expert Subject Teacher named Anjali. Create a multi-slide presentation script. RULES: 1. You MUST separate different mini-topics onto their own slides using '#' (e.g., `# Introduction\\nHere is a fact.\\n\\n# Next Topic\\nAnother fact.`). 2. Put only 2-3 short sentences per slide. 3. If teaching math, include equations like '5 + 3 = 8' or phrases like 'jumps from 0 to 5'. 4. DO NOT use ellipses (...) or excessive punctuation, as it breaks the voice reader. Output ONLY valid JSON matching exactly: { \"lesson_text\": \"Text here\" }",
          prompt: `Topic: ${promptText}`,
          stream: false,
          format: "json"
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const generatedRaw = data.response;
      let parsed;
      try {
        parsed = JSON.parse(generatedRaw);
      } catch (err) {
        throw new Error("Failed to parse JSON from Local AI: " + generatedRaw);
      }

      if (!parsed.lesson_text) {
        throw new Error("Invalid format returned by agent.");
      }

      agentStatus.textContent = "Agent crafted the presentation locally! Auto-starting screen and speech...";
      agentStatus.style.color = "#4ade80";

      // 2. Set the lesson input content
      const lessonInputEl = document.getElementById("lessonInput");
      if (lessonInputEl) {
        lessonInputEl.value = parsed.lesson_text;
        // Trigger generic input update so state updates sync
        lessonInputEl.dispatchEvent(new Event("input"));
        // Force state update if the function is exposed globally
        if (typeof parseLessonText === "function") {
          parseLessonText();
        }
      }
      
      // 3. Open the stage
      const showBtn = document.getElementById("showScreenBtn");
      if (showBtn) {
        showBtn.click();
      }

      // 4. Trigger speech so the agent automatically talks
      setTimeout(() => {
        const pttBtn = document.getElementById("previewTextBtn");
        if (pttBtn) {
          pttBtn.click();
        }
      }, 800);

    } catch (err) {
      console.error(err);
      agentStatus.textContent = "Local Agent failed: " + err.message + " (Make sure Ollama is running)";
      agentStatus.style.color = "#ef4444";
    } finally {
      agentRunBtn.disabled = false;
      if (agentLoadingIndicator) agentLoadingIndicator.classList.add("hidden");
    }
  });
}

