import { Component, OnInit, OnChanges, Input } from '@angular/core';
import * as d3 from 'd3'; //types!

@Component({
  selector: 'app-gears',
  templateUrl: './gears.component.html',
  styleUrls: ['./gears.component.scss']
})
export class GearsComponent implements OnInit, OnChanges {

  @Input()
  public angle: number;

  private toothRadius = 0.008;
  private frameRadius = 0.5;
  private holeRadius = 0.02;
  private speed = 0.08;
  private x = Math.sin(2 * Math.PI / 3)
  private y = Math.cos(2 * Math.PI / 3)
  private frameAngle = 0;
  private viewbox : number[] = [-0.53, -0.53, 1.06, 1.06];

  private graphic: any;

  constructor() { }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
         
    if(!this.graphic)
      return;

    this.graphic.update(this.angle / 4, this.angle);
        
  }

  gears = [
    {fill: "#c6dbef", teeth: 80, radius: -0.5, origin: [0, 0], annulus: true},
    {fill: "#6baed6", teeth: 16, radius: +0.1, origin: [0, 0]},
    {fill: "#9ecae1", teeth: 32, radius: -0.2, origin: [0, -0.3]},
    {fill: "#9ecae1", teeth: 32, radius: -0.2, origin: [-0.3 * this.x, -0.3 * this.y]},
    {fill: "#9ecae1", teeth: 32, radius: -0.2, origin: [0.3 * this.x, -0.3 * this.y]}
  ]

  ngOnInit(): void {

        let svg = d3.select("svg")
          .attr("viewBox", this.viewbox as any)
          .attr("stroke", "black")
          .attr("stroke-width", 1 / 640)
          .style("max-width", "640px")
          .style("display", "block")
          .style("margin", "auto");
    
      const frame = svg.append("g");
    
      const path = frame.selectAll("path")
        .data(this.gears)
        .join("path")
          .attr("fill", d => d.fill)
          .attr("d", ({teeth, radius, annulus}) => {
            const n = teeth;
            let r2 = Math.abs(radius);
            let r0 = r2 - this.toothRadius;
            let r1 = r2 + this.toothRadius;
            let r3 = this.holeRadius;
            if (annulus) r3 = r0, r0 = r1, r1 = r3, r3 = r2 + this.toothRadius * 3;
            const da = Math.PI / n;
            let a0 = -Math.PI / 2 + (annulus ? Math.PI / n : 0);
            const path = ["M", r0 * Math.cos(a0), ",", r0 * Math.sin(a0)];
            let i = -1;
            while (++i < n) {
              path.push(
                "A", r0, ",", r0, " 0 0,1 ", r0 * Math.cos(a0 += da), ",", r0 * Math.sin(a0),
                "L", r2 * Math.cos(a0), ",", r2 * Math.sin(a0),
                "L", r1 * Math.cos(a0 += da / 3), ",", r1 * Math.sin(a0),
                "A", r1, ",", r1, " 0 0,1 ", r1 * Math.cos(a0 += da / 3), ",", r1 * Math.sin(a0),
                "L", r2 * Math.cos(a0 += da / 3), ",", r2 * Math.sin(a0),
                "L", r0 * Math.cos(a0), ",", r0 * Math.sin(a0)
              );
            }
            path.push("M0,", -r3, "A", r3, ",", r3, " 0 0,0 0,", r3, "A", r3, ",", r3, " 0 0,0 0,", -r3, "Z");
            return path.join("");
          });
    
      this.graphic = Object.assign(svg.node(), {
        update(angle, frameAngle) {
          path.attr("transform", d => `translate(${d.origin}) rotate(${(angle / d.radius) % 360})`);
          frame.attr("transform", `rotate(${frameAngle % 360})`);
        }
      });

      // while (true) {
        this.graphic.update(
          this.angle += this.speed,
          this.frameAngle += this.speed / this.frameRadius
        );
      //}
    
  }
}
