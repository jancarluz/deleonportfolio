const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const sample = (x) => x.sample ? '<span class="badge">Sample</span>' : "";

/* Hero counters are counted from data.js, so "Beaches" is never stuck at 0. */
const count = (n) => (n > 0 ? n + "+" : "0");
$("n-beaches").textContent = count(SPOTS.filter((s) => s.cat === "beach").length);
$("n-stories").textContent = count(BLOGS.length);
$("n-guides").textContent = count(GUIDES.length);

/* spots with filter */
const CATS = [["all", "All"], ["beach", "Beaches"], ["heritage", "Heritage"]];
let cat = "all";
function renderSpots(){
  $("chips").innerHTML = CATS.map(([k, l]) =>
    '<button type="button" class="chip" data-cat="' + k + '" aria-pressed="' + (k === cat) + '">' + l + "</button>").join("");
  const list = SPOTS.filter((s) => cat === "all" || s.cat === cat);
  $("spot-list").innerHTML = list.length ? list.map((s) =>
    '<article class="card"><span class="meta">' + esc(s.town) + " · " + esc(s.cat) + "</span><h3>" + esc(s.name) + "</h3><p>" + esc(s.text) + "</p></article>").join("")
    : '<p class="empty">Nothing here yet.</p>';
  document.querySelectorAll(".chip").forEach((b) => b.onclick = () => { cat = b.dataset.cat; renderSpots(); });
}
renderSpots();

$("event-list").innerHTML = EVENTS.length ? EVENTS.map((e) =>
  "<li><div><strong>" + esc(e.name) + "</strong>" + sample(e) + "<br><span>" + esc(e.text) + "</span></div><span>" + esc(e.when) + " · " + esc(e.where) + "</span></li>").join("")
  : '<li class="empty">No events yet.</li>';

$("blog-list").innerHTML = BLOGS.map((b) =>
  '<article class="card"><span class="meta">' + esc(b.by) + " · " + b.mins + " min read</span>" + sample(b) + "<h3>" + esc(b.title) + "</h3><p>" + esc(b.text) + "</p></article>").join("");

$("guide-list").innerHTML = GUIDES.map((g) =>
  '<article class="card"><h3>' + esc(g.title) + "</h3><p>" + esc(g.text) + "</p></article>").join("");

$("forum-list").innerHTML = FORUMS.map((f) =>
  "<li><div><strong>" + esc(f.title) + "</strong>" + sample(f) + "</div><span>" + f.replies + " replies</span></li>").join("");

/* demo sign in: saved only in this browser */
const dlg = $("dlg");
const KEY = "daet-user";
function refreshUser(){
  let u = null;
  try { u = JSON.parse(localStorage.getItem(KEY) || "null"); } catch (e) {}
  $("open-signin").textContent = u ? u.name.split(" ")[0] : "Sign in";
}
function openDlg(title){
  $("dlg-title").textContent = title;
  if (typeof dlg.showModal === "function") dlg.showModal();
}
$("open-signin").onclick = () => openDlg("Sign in");
$("open-create").onclick = () => openDlg("Create account");
$("dlg-cancel").onclick = () => dlg.close();
$("auth-form").addEventListener("submit", () => {
  const f = new FormData($("auth-form"));
  try { localStorage.setItem(KEY, JSON.stringify({name: String(f.get("name")), email: String(f.get("email"))})); } catch (e) {}
  refreshUser();
});
refreshUser();
