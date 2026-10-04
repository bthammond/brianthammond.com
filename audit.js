/* The Owner's Bottleneck Audit — moved out of index.html unchanged except for button classes. */
/* ============================================================
   The Owner's Bottleneck Audit — scenario wizard
   ------------------------------------------------------------
   Twelve moments from a fortnight the owner isn't there, asked
   one at a time. Scored entirely in the browser; nothing is
   transmitted anywhere.

   Scoring is unchanged from the original form: each answer is
   worth 0-3, three questions per domain (max 9), four domains
   (max 36), normalised to a 0-100 owner-dependency score.
   ============================================================ */
(function bottleneckWizard() {
  var stage = document.getElementById('wizStage');
  if (!stage) return;

  var topbar = document.getElementById('wizTop');
  var backBtn = document.getElementById('wizBack');
  var railFill = document.getElementById('wizRailFill');
  var rail = document.getElementById('wizRail');
  var countEl = document.getElementById('wizCount');
  var resultEl = document.getElementById('auditResult');

  var DOMAINS = [
    {
      key: 'decisions',
      name: 'Decisions',
      first: 'Write down the five decisions you were pulled into last week, then hand each one to a named person with a written spending limit and a deadline. Do it this week. Most owners find three of the five never should have reached them.'
    },
    {
      key: 'revenue',
      name: 'Revenue',
      first: 'Pick your top five accounts and put a second person into each one inside 60 days — on the call, on the thread, at the review. Revenue that leaves when you do gets discounted by a buyer and by a bank, and it is the slowest thing on this list to fix.'
    },
    {
      key: 'people',
      name: 'People',
      first: 'Name a successor-in-training for each key role and tell them out loud that is what they are. Untold plans retain nobody. Then give each manager one thing to own outright this quarter — with the authority, not just the work.'
    },
    {
      key: 'succession',
      name: 'What’s next',
      first: 'Write the one-page version this month: who runs it, who owns it, who gets told, and in what order. It will be wrong. Write it anyway — a wrong draft you can revise beats a perfect plan that exists only in your head, and it is the single thing most likely to be needed without warning.'
    }
  ];

  /* scene = the moment; q = what happens; opts ordered best (0) to worst (3) */
  var QUESTIONS = [
    { d: 0, scene: 'Monday morning, day one.',
      q: 'A customer asks for pricing outside the standard sheet.',
      opts: ['Someone handles it and you hear about it later',
             'They check with another manager first',
             'They text you and wait',
             'It sits until you are back'] },
    { d: 0, scene: 'Wednesday.',
      q: 'A supplier wants an answer on a price increase by Friday.',
      opts: ['Someone owns this and decides',
             'Your team decides and tells you after',
             'They spend the week trying to reach you',
             'Nothing happens until you are back'] },
    { d: 0, scene: 'Thursday.',
      q: 'A manager needs to spend four thousand dollars today to fix a problem.',
      opts: ['They know their limit and they spend it',
             'They know roughly, but they ask anyway',
             'Nobody knows the limit, so they call you',
             'They wait, and the problem gets bigger'] },

    { d: 1, scene: 'End of week one.',
      q: 'Your largest customer calls with a problem.',
      opts: ['They ask for their account lead, not you',
             'They ask for you, but someone else can handle it',
             'They ask for you, and only you will do',
             'They ask for you and are annoyed you are away'] },
    { d: 1, scene: 'Saturday. Something good happens.',
      q: 'A serious new opportunity comes in.',
      opts: ['Someone can run it end to end',
             'Someone starts it, you would close it',
             'It stalls until you are back',
             'Nobody would recognise it as serious'] },
    { d: 1, scene: 'Monday, week two.',
      q: 'Someone has to quote an unusual job.',
      opts: ['It is in the pricing document',
             'Roughly documented, they would get close',
             'It is in your head, so they would guess',
             'They would not attempt it'] },

    { d: 2, scene: 'Tuesday.',
      q: 'Two of your managers disagree about something that matters.',
      opts: ['They resolve it between them',
             'One escalates to another manager',
             'They both wait for you',
             'It becomes a grudge you hear about months later'] },
    { d: 2, scene: 'Wednesday.',
      q: 'Somebody is underperforming, and everyone can see it.',
      opts: ['Their manager is already handling it',
             'Their manager will handle it, slowly',
             'It waits for you',
             'It has been waiting for you for months already'] },
    { d: 2, scene: 'Thursday. A phone call you never hear about.',
      q: 'A recruiter calls one of your key people.',
      opts: ['They know their path here, and turn it down',
             'They would probably stay',
             'You genuinely do not know',
             'You would find out when they resigned'] },

    { d: 3, scene: 'Friday. Plans change.',
      q: 'You extend the trip by a month. Someone has to run the company.',
      opts: ['There is a name, and they know it',
             'There is a name, but nobody has told them',
             'There are two names and no decision',
             'There is no name'] },
    { d: 3, scene: 'The following week.',
      q: 'A buyer makes an unsolicited offer for the business.',
      opts: ['There is a written plan for exactly this',
             'You have thought it through, nothing is written',
             'You would be starting from scratch',
             'The family would disagree about what it even means'] },
    { d: 3, scene: 'And the one nobody wants to answer.',
      q: 'Something happens to you, and you do not come back.',
      opts: ['The plan is written, and the family has heard it from you',
             'It is written, but nobody has read it',
             'It is in your head',
             'There isn’t one'] }
  ];

  var INTERSTITIALS = {
    3: 'That is the first few days. The next three are about money — and they are the ones owners tend to answer too generously.',
    6: 'Halfway. These next three are about people, and they are usually the ones an owner has never said out loud to anybody.',
    9: 'Last three. These are the ones that decide what this business is actually worth to somebody else.'
  };

  var BANDS = [
    { max: 25, label: 'Built to run without you',
      verdict: 'This is rare, and you should treat it as an asset. Your business does not depend on you the way most owner-led companies do — which means your next conversation is probably about growth or a transaction, not about getting out of the middle. The risk at this score is complacency: the dependencies creep back the moment you grow.' },
    { max: 50, label: 'Delegated, still exposed',
      verdict: 'You have handed off real work, and it shows. But there are specific places where the business quietly routes back through you, and those are the ones that break at the worst possible moment. This is the easiest score to improve, because the habits already exist — they just have not been extended to everything.' },
    { max: 75, label: 'The bottleneck is real',
      verdict: 'You are the ceiling right now, and some part of you knew that before you started this. It is the most common score for a company between 25 and 200 people, and it is the point where the cost stops being your calendar and starts being your growth rate, your best people, and what the business is worth.' },
    { max: 100, label: 'The business is you',
      verdict: 'Almost everything that matters runs through one person. That is not a criticism — it is how the company survived long enough to get this big. But it means you do not own a business yet, you own a very demanding job, and right now it cannot be handed to anyone or sold to anyone at the number you have in your head.' }
  ];

  var answers = new Array(QUESTIONS.length).fill(null);
  var step = -1; // -1 = intro, 0..11 = questions, 12 = done
  var pendingInter = null;
  var reduceMotion = window.matchMedia
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function esc(t) {
    return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function updateChrome() {
    var showing = step >= 0 && step < QUESTIONS.length;
    topbar.hidden = !showing;
    if (!showing) return;
    countEl.textContent = (step + 1) + ' of ' + QUESTIONS.length;
    railFill.style.width = (step / QUESTIONS.length * 100) + '%';
    rail.setAttribute('aria-valuenow', String(step));
    backBtn.disabled = step === 0;
  }

  function focusCard() {
    var h = stage.querySelector('[data-focus]');
    if (h) h.focus({ preventScroll: true });
  }

  function renderIntro() {
    stage.innerHTML =
      '<div class="wiz-card wiz-card-quiet">'
      + '<h3 class="wiz-inter-p" tabindex="-1" data-focus>It is Monday. You are somewhere with no signal, for two weeks.</h3>'
      + '<p class="wiz-lede">Nothing is on fire. You are simply not reachable. What follows are twelve moments from that fortnight — answer with what would actually happen, not what is supposed to happen. It takes about four minutes, and nothing you click is sent anywhere.</p>'
      + '<button type="button" class="btn btn-gold" id="wizStart">Start the two weeks</button>'
      + '</div>';
    document.getElementById('wizStart').addEventListener('click', function () {
      step = 0;
      render();
    });
    updateChrome();
  }

  function renderInterstitial(text, nextStep) {
    stage.innerHTML =
      '<div class="wiz-card wiz-card-quiet">'
      + '<h3 class="wiz-inter-p" tabindex="-1" data-focus>' + esc(text) + '</h3>'
      + '<button type="button" class="btn btn-navy" id="wizGo">Keep going</button>'
      + '</div>';
    document.getElementById('wizGo').addEventListener('click', function () {
      pendingInter = null;
      step = nextStep;
      render();
    });
    topbar.hidden = true;
    focusCard();
  }

  function renderQuestion() {
    var item = QUESTIONS[step];
    var picked = answers[step];
    var html = '<div class="wiz-card">'
      + '<div class="wiz-scene">' + esc(item.scene) + '</div>'
      + '<h3 class="wiz-q" tabindex="-1" data-focus>' + esc(item.q) + '</h3>'
      + '<div class="wiz-opts" role="group" aria-label="' + esc(item.q) + '">';
    item.opts.forEach(function (o, i) {
      html += '<button type="button" class="wiz-opt' + (picked === i ? ' is-picked' : '')
        + '" data-v="' + i + '" aria-pressed="' + (picked === i) + '">'
        + '<span class="wiz-opt-key" aria-hidden="true">' + (i + 1) + '</span>'
        + esc(o) + '</button>';
    });
    html += '</div><p class="wiz-hint">Press 1&ndash;4, or use Backspace to go back.</p></div>';
    stage.innerHTML = html;

    Array.prototype.forEach.call(stage.querySelectorAll('.wiz-opt'), function (b) {
      b.addEventListener('click', function () { pick(parseInt(b.getAttribute('data-v'), 10)); });
    });
    updateChrome();
    focusCard();
  }

  function pick(v) {
    answers[step] = v;
    var btns = stage.querySelectorAll('.wiz-opt');
    Array.prototype.forEach.call(btns, function (b, i) {
      b.classList.toggle('is-picked', i === v);
      b.setAttribute('aria-pressed', String(i === v));
    });
    var next = step + 1;
    var delay = reduceMotion ? 0 : 220;
    setTimeout(function () {
      if (next >= QUESTIONS.length) { finish(); return; }
      if (INTERSTITIALS[next]) { pendingInter = next; renderInterstitial(INTERSTITIALS[next], next); return; }
      step = next;
      render();
    }, delay);
  }

  function goBack() {
    if (pendingInter !== null) { step = pendingInter - 1; pendingInter = null; render(); return; }
    if (step > 0) { step--; render(); }
  }

  function render() {
    if (step < 0) { renderIntro(); return; }
    renderQuestion();
  }

  function finish() {
    var scores = DOMAINS.map(function (d, di) {
      var sum = 0;
      QUESTIONS.forEach(function (q, qi) { if (q.d === di) sum += answers[qi]; });
      return { domain: d, raw: sum };
    });
    var grand = scores.reduce(function (a, s) { return a + s.raw; }, 0);
    var pct = Math.round((grand / (QUESTIONS.length * 3)) * 100);

    var band = BANDS[BANDS.length - 1];
    for (var b = 0; b < BANDS.length; b++) {
      if (pct <= BANDS[b].max) { band = BANDS[b]; break; }
    }
    var worst = scores.slice().sort(function (a, c) { return c.raw - a.raw; })[0];

    document.getElementById('auditScore').textContent = pct;
    document.getElementById('auditBand').textContent = band.label;
    document.getElementById('auditVerdict').textContent = band.verdict;

    var bd = '';
    scores.forEach(function (s) {
      bd += '<div class="audit-dom' + (s === worst ? ' is-worst' : '') + '">'
        + '<div class="audit-dom-name">' + s.domain.name + (s === worst ? ' &mdash; weakest' : '') + '</div>'
        + '<div class="audit-dom-val">' + s.raw + '<small>/9</small></div>'
        + '</div>';
    });
    document.getElementById('auditBreakdown').innerHTML = bd;
    document.getElementById('auditFirst').textContent = worst.domain.first;

    stage.innerHTML = '';
    topbar.hidden = true;
    railFill.style.width = '100%';
    resultEl.hidden = false;
    document.getElementById('auditMeter').style.width = pct + '%';

    var again = document.getElementById('wizRestart');
    if (again) {
      again.onclick = function () {
        answers = new Array(QUESTIONS.length).fill(null);
        step = -1;
        pendingInter = null;
        resultEl.hidden = true;
        document.getElementById('auditMeter').style.width = '0%';
        railFill.style.width = '0%';
        render();
        document.getElementById('audit').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      };
    }

    resultEl.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    resultEl.focus({ preventScroll: true });

    if (typeof gtag === 'function') {
      gtag('event', 'bottleneck_audit_complete', {
        event_category: 'audit',
        value: pct,
        weakest_domain: worst.domain.key
      });
    }
  }

  backBtn.addEventListener('click', goBack);

  document.addEventListener('keydown', function (e) {
    if (step < 0 || step >= QUESTIONS.length) return;
    if (!document.getElementById('audit').contains(document.activeElement)
        && document.activeElement !== document.body) return;
    if (e.key >= '1' && e.key <= '4') {
      var btn = stage.querySelector('.wiz-opt[data-v="' + (parseInt(e.key, 10) - 1) + '"]');
      if (btn) { e.preventDefault(); btn.click(); }
    } else if (e.key === 'Backspace') {
      e.preventDefault();
      goBack();
    }
  });

  // Progress counter should reflect answers, not just position, on re-entry
  updateChrome();
  render();
})();
