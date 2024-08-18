from manim import *

config.pixel_height = 1080
config.pixel_width = 1920
config.frame_height = 6.0
config.frame_width = 6.0

class RectangleAreaScene(Scene):
    def construct(self):
        # Set up the scene
        title = Text("Area of a Rectangle", font_size=40)
        title.to_edge(UP)

        # Define a rectangle
        rectangle = Rectangle(width=4, height=2)
        rectangle.set_fill(BLUE, opacity=0.5)
        rectangle.set_stroke(BLUE_E, width=4)
        rectangle.to_edge(DOWN)

        # Define the labels for width and height
        width_label = MathTex("w", font_size=36)
        height_label = MathTex("h", font_size=36)
        
        width_label.next_to(rectangle, DOWN)
        height_label.rotate(PI / 2)
        height_label.next_to(rectangle, LEFT)
        
        # Display mathematical content
        area_formula = MathTex("A = w \\times h", font_size=36)
        area_formula.next_to(rectangle, RIGHT)

        # Provide explanations
        explanation = Text(
            "To find the area of a rectangle, "
            "multiply the width (w) by the height (h).",
            font_size=24
        )
        explanation.next_to(area_formula, DOWN)

        # Transition Effects
        self.play(Write(title))
        self.wait(1)
        self.play(Create(rectangle))
        self.wait(1)
        self.play(Write(width_label), Write(height_label))
        self.wait(1)
        self.play(Write(area_formula))
        self.wait(1)
        self.play(Write(explanation))
        self.wait(2)

        # Clear and rewrite content if boundaries exceeded
        if explanation.width > config.frame_width:
            self.play(FadeOut(explanation))
            explanation = Text(
                "The area (A) is the region covered by the rectangle.",
                font_size=24
            )
            explanation.next_to(area_formula, DOWN)
            self.play(Write(explanation))
            self.wait(2)

        # Ending the scene
        self.play(FadeOut(title), FadeOut(rectangle), FadeOut(width_label),
                  FadeOut(height_label), FadeOut(area_formula), FadeOut(explanation))
        self.wait(1)