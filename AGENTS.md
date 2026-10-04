<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Subagent routing and orchestration

The primary agent acts as an orchestrator, coordinating work through context-scoped subagents rather than performing coding and edits directly. This division of labor optimizes reasoning effort and keeps the main conversation focused on coordination and decision-making.

When delegating to subagents, route work based on task complexity and requirements. Models are listed from cheapest to most capable; prices are Anthropic first-party API rates per million input/output tokens as of 2026-09-25 (see the Anthropic pricing page for current rates):

- **Haiku 4.5 ($1/$5):** Cheapest and fastest. Use for simple, well-defined tasks such as file reads, pattern matching, routine edits, small scripts, exploratory searches and quick lookups.
- **Sonnet 5.5 ($2/$10):** Balanced speed and capability for general-purpose work such as multi-file refactoring, feature implementation, moderate analysis and code review. The default choice for most substantive tasks.
- **Opus 5.5 ($4/$20):** Strong reasoning for complex, high-stakes work such as architecture decisions, cross-system design, deep codebase analysis, security review and intricate bug diagnosis. Use when Sonnet's output quality is insufficient.
- **Fable 5.1 ($10/$50):** Anthropic's most capable widely released model and the most expensive. Turns on hard tasks can run for many minutes. Reserve it for the most demanding reasoning and long-horizon agentic work where Opus falls short.

**Orchestrator responsibilities:** Define the task scope, provide context and constraints, verify subagent work, and coordinate across multiple efforts. Route simple, independent subtasks to Haiku or Sonnet to reduce latency and cost. Reserve Opus and Fable for genuinely complex problems requiring deep reasoning or when task failure would be costly.

**Subagent responsibilities:** Execute focused work within defined scope—code writes, edits, file operations, targeted analysis. Report results clearly so the orchestrator can verify and coordinate the next step.

## Deployment

Merging to `main` deploys this repository to Cloudflare automatically through Cloudflare Workers Builds (Worker `home-site`). Do not deploy by hand.

- To ship a change: open a PR, merge it to `main`. Cloudflare then runs the build command `npm run lint` and, only if it passes, `npx opennextjs-cloudflare build && npx opennextjs-cloudflare deploy`. A failing build deploys nothing.
- Never run `wrangler deploy`, `wrangler versions deploy`, `opennextjs-cloudflare deploy`, `wrangler d1 migrations apply --remote`, or any other command that changes production. You do not need a Cloudflare API token and should not look for one.
- Check the result on the commit's Workers Builds check in GitHub. If the build failed, fix it with another PR; do not deploy around it.
- The build only has this repository. Files outside the repo, gitignored files and local secrets are not available to it.
