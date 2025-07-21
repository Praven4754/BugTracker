class Bug {
    constructor(id, title, description, status = 'open', priority = 'medium', createdAt = new Date()) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.priority = priority;
        this.createdAt = createdAt;
        this.comments = [];
    }

    addComment(comment) {
        this.comments.push({ text: comment, date: new Date() });
    }

    setPriority(priority) {
        this.priority = priority;
    }
}

class BugTracker {
    constructor() {
        this.bugs = [];
        this.nextId = 1;
    }

    addBug(title, description) {
        const bug = new Bug(this.nextId++, title, description);
        this.bugs.push(bug);
        return bug;
    }

    listBugs() {
        return this.bugs;
    }

    updateBugStatus(id, status) {
        const bug = this.bugs.find(b => b.id === id);
        if (bug) {
            bug.status = status;
            return true;
        }
        return false;
    }

    removeBug(id) {
        const index = this.bugs.findIndex(b => b.id === id);
        if (index !== -1) {
            this.bugs.splice(index, 1);
            return true;
        }
        return false;
    }
}

// Example usage:
const tracker = new BugTracker();
tracker.addBug('Login issue', 'User cannot login with correct credentials');
tracker.addBug('UI glitch', 'Button overlaps text on mobile');
console.log(tracker.listBugs());
tracker.updateBugStatus(1, 'closed');
console.log(tracker.listBugs());
tracker.removeBug(2);
console.log(tracker.listBugs());