# Specification

## Summary
**Goal:** Refresh the app’s visual theme by switching the primary background gradient to a maroon/reddish palette and incorporating 😗/😘 into the existing ambient emoji visuals.

**Planned changes:**
- Replace the current purple-based background gradient with a maroon/reddish (not bright red) gradient wherever the main background is defined (app container and any surfaces using the existing purple glow/gradient variables).
- Add 😗 and 😘 to the existing emoji pools used by the ambient floating background effect and the Main Message section’s floating/burst emoji sets, without removing existing emojis.
- Preserve existing reduced-motion behavior so ambient effects remain disabled when prefers-reduced-motion is enabled.

**User-visible outcome:** The entire app displays a consistent maroon/reddish gradient background, and 😗/😘 appear intermittently among the existing floating and burst background emojis while readability and motion preferences remain unchanged.
