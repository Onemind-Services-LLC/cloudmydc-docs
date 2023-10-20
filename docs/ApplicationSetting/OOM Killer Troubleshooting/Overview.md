---
sidebar_position: 1
---

## OOM Killer Issues Troubleshooting

When receiving an OOM killer [load alert](https://cloudmydc.com/) notification via email, the next step you should obviously take is to investigate the root cause of a happen problem and apply some resolution. To help you with that, we’ve already analyzed the most commonly met issues and defined the very efficient ways to fix them and prevent their occurrence in future. The three main groups of processes are highlighted below:

- **[Common Cases](https://cloudmydc.com/)** - processes that are run by default on any platform container and can be killed by OOM tool
- **[Processes of High Risk](https://cloudmydc.com/)** - possible memory leaks, which require special actions or application code optimization; are sorted based on used stack type/program language, where each section provides the appropriate engine-related general recommendations, as well as kill resolutions for specific processes
- **[Non-Leaking Processes](https://cloudmydc.com/)** - operations that could be terminated by OOM killer though not representing the root of the problem; the general fix for all such issues is to restart a container in order to restore the corresponding processes

So, fetch the process name you’ve received within the appropriate email notification and look for it within the linked above documents to find out the required solution.
