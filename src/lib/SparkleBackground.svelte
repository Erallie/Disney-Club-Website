<script>
    import { onMount } from 'svelte';

    let canvas;

    onMount(() => {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let W = 0, H = 0, DPR = 1;
        let animationFrame;
        function resize(){
            DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
            W = Math.floor(window.innerWidth);
            H = Math.floor(window.innerHeight);
            canvas.width = Math.floor(W*DPR);
            canvas.height = Math.floor(H*DPR);
            canvas.style.width = W+"px";
            canvas.style.height = H+"px";
            ctx.setTransform(DPR,0,0,DPR,0,0);
        }
        window.addEventListener("resize", resize);
        resize();

        const sparkles = [];
        const N = Math.min(120, Math.floor((W*H)/14000));

        function rnd(a,b){ return a + Math.random()*(b-a); }

        for(let i=0;i<N;i++){
            sparkles.push({
                x: rnd(0,W),
                y: rnd(0,H),
                r: rnd(0.6, 2.2),
                a: rnd(0.15, 0.85),
                tw: rnd(0.01, 0.04),
                sp: rnd(0.08, 0.35),
                drift: rnd(-0.12, 0.12),
                hue: Math.random() < 0.5 ? "rgba(104,241,255," : "rgba(255,217,145,"
            });
        }

        function draw(){
            ctx.clearRect(0,0,W,H);

            for(const s of sparkles){
                s.y -= s.sp;
                s.x += s.drift;
                s.a += (Math.random() < 0.5 ? -1 : 1) * s.tw;

                if(s.a < 0.08) s.a = 0.08;
                if(s.a > 0.9) s.a = 0.9;

                if(s.y < -10) { s.y = H + 10; s.x = rnd(0,W); }
                if(s.x < -10) s.x = W + 10;
                if(s.x > W + 10) s.x = -10;

                const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r*6);
                g.addColorStop(0, s.hue + (s.a*0.9) + ")");
                g.addColorStop(1, "rgba(255,255,255,0)");
                ctx.fillStyle = g;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r*4, 0, Math.PI*2);
                ctx.fill();

                ctx.strokeStyle = s.hue + (s.a*0.28) + ")";
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(s.x - s.r*4, s.y);
                ctx.lineTo(s.x + s.r*4, s.y);
                ctx.moveTo(s.x, s.y - s.r*4);
                ctx.lineTo(s.x, s.y + s.r*4);
                ctx.stroke();
            }

            animationFrame = requestAnimationFrame(draw);
        }
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrame);
        };
    });
</script>

<canvas id="sparkles" bind:this={canvas} aria-hidden="true"></canvas>
<div class="pattern" aria-hidden="true"></div>
