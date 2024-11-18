export const technologies = [
    { name: "FastAPI", date: "2018-12-05", long_date: "December 5, 2018", category: "Backend", importance: 2, tags: new Set(["backend", "python", "framework"]) },
    { name: "React", date: "2013-05-29", long_date: "May 29, 2013", category: "Frontend", importance: 3, tags: new Set(["frontend", "javascript", "library"]) },
    { name: "Angular", date: "2016-09-14", long_date: "September 14, 2016", category: "Frontend", importance: 3, tags: new Set(["frontend", "javascript", "framework"]) },
    { name: "Vue.js", date: "2014-02-01", long_date: "February 1, 2014", category: "Frontend", importance: 3, tags: new Set(["frontend", "javascript", "framework"]) },
    { name: "Node.js", date: "2009-05-27", long_date: "May 27, 2009", category: "Backend", importance: 2, tags: new Set(["backend", "javascript", "runtime"]) },
    { name: "Kubernetes", date: "2014-06-07", long_date: "June 7, 2014", category: "DevOps", importance: 4, tags: new Set(["container", "orchestration", "devops"]) },
    { name: "Docker", date: "2013-03-20", long_date: "March 20, 2013", category: "DevOps", importance: 4, tags: new Set(["container", "devops", "virtualization"]) },
    { name: "Terraform", date: "2014-07-28", long_date: "July 28, 2014", category: "DevOps", importance: 4, tags: new Set(["iac", "devops", "automation"]) },
    { name: "Flutter", date: "2017-05-12", long_date: "May 12, 2017", category: "Mobile Development", importance: 8, tags: new Set(["mobile", "dart", "cross-platform"]) },
    { name: "TensorFlow", date: "2015-11-09", long_date: "November 9, 2015", category: "Data", importance: 5, tags: new Set(["machine learning", "ai", "python"]) },
    { name: "PyTorch", date: "2016-09-01", long_date: "September 1, 2016", category: "Data", importance: 5, tags: new Set(["machine learning", "ai", "python"]) },
    { name: "GraphQL", date: "2015-09-14", long_date: "September 14, 2015", category: "Data", importance: 5, tags: new Set(["api", "query", "graphql"]) },
    { name: "Elasticsearch", date: "2010-02-08", long_date: "February 8, 2010", category: "Data", importance: 5, tags: new Set(["search", "database", "analytics"]) },
    { name: "MongoDB", date: "2009-02-11", long_date: "February 11, 2009", category: "Data", importance: 5, tags: new Set(["database", "nosql", "backend"]) },
    { name: "Kafka", date: "2011-01-01", long_date: "January 1, 2011", category: "Data", importance: 5, tags: new Set(["stream", "messaging", "backend"]) },
    { name: "Redis", date: "2009-02-26", long_date: "February 26, 2009", category: "Data", importance: 5, tags: new Set(["database", "cache", "backend"]) },
    { name: "PostgreSQL", date: "1996-07-08", long_date: "July 8, 1996", category: "Data", importance: 5, tags: new Set(["database", "sql", "backend"]) },
    { name: "MySQL", date: "1995-05-23", long_date: "May 23, 1995", category: "Data", importance: 5, tags: new Set(["database", "sql", "backend"]) },
    { name: "React Native", date: "2015-03-26", long_date: "March 26, 2015", category: "Mobile Development", importance: 8, tags: new Set(["mobile", "javascript", "framework"]) },
    { name: "Bootstrap", date: "2011-08-19", long_date: "August 19, 2011", category: "Frontend", importance: 3, tags: new Set(["css", "frontend", "framework"]) },
    { name: "jQuery", date: "2006-08-26", long_date: "August 26, 2006", category: "Frontend", importance: 3, tags: new Set(["javascript", "frontend", "library"]) },
    { name: "ASP.NET Core", date: "2016-06-07", long_date: "June 7, 2016", category: "Backend", importance: 2, tags: new Set(["backend", "csharp", "framework"]) },
    { name: "Spring Boot", date: "2014-04-01", long_date: "April 1, 2014", category: "Backend", importance: 2, tags: new Set(["backend", "java", "framework"]) },
    { name: "Django", date: "2005-07-21", long_date: "July 21, 2005", category: "Backend", importance: 2, tags: new Set(["backend", "python", "framework"]) },
    { name: "Ruby on Rails", date: "2004-07-01", long_date: "July 1, 2004", category: "Backend", importance: 2, tags: new Set(["backend", "ruby", "framework"]) },
    { name: "Laravel", date: "2011-06-09", long_date: "June 9, 2011", category: "Backend", importance: 2, tags: new Set(["backend", "php", "framework"]) },
    { name: "Go (Golang)", date: "2009-11-10", long_date: "November 10, 2009", category: "Programming Language", importance: 1, tags: new Set(["language", "backend", "concurrency"]) },
    { name: "Rust", date: "2010-05-15", long_date: "May 15, 2010", category: "Programming Language", importance: 1, tags: new Set(["language", "systems", "memory safety"]) },
    { name: "Swift", date: "2014-06-02", long_date: "June 2, 2014", category: "Programming Language", importance: 1, tags: new Set(["language", "apple", "ios"]) },
    { name: "TypeScript", date: "2012-10-01", long_date: "October 1, 2012", category: "Programming Language", importance: 1, tags: new Set(["language", "javascript", "static typing"]) },
    { name: "Git", date: "2005-04-07", long_date: "April 7, 2005", category: "CI/CD", importance: 6, tags: new Set(["version control", "vcs", "collaboration"]) },
    { name: "Jenkins", date: "2011-02-02", long_date: "February 2, 2011", category: "CI/CD", importance: 6, tags: new Set(["ci", "cd", "devops"]) },
    { name: "Ansible", date: "2012-02-20", long_date: "February 20, 2012", category: "DevOps", importance: 4, tags: new Set(["automation", "configuration", "devops"]) },
    { name: "Chef", date: "2009-01-01", long_date: "January 1, 2009", category: "DevOps", importance: 4, tags: new Set(["automation", "configuration", "devops"]) },
    { name: "Puppet", date: "2005-06-01", long_date: "June 1, 2005", category: "DevOps", importance: 4, tags: new Set(["automation", "configuration", "devops"]) },
    { name: "Prometheus", date: "2012-11-24", long_date: "November 24, 2012", category: "Monitoring", importance: 4, tags: new Set(["monitoring", "metrics", "devops"]) },
    { name: "Zabbix", date: "2001-04-07", long_date: "April 7, 2001", category: "Monitoring", importance: 4, tags: new Set(["monitoring", "metrics", "network"]) },
    { name: "Nagios", date: "2002-03-01", long_date: "March 1, 2002", category: "Monitoring", importance: 4, tags: new Set(["monitoring", "alerts", "network"]) },
    { name: "Elixir", date: "2011-01-09", long_date: "January 9, 2011", category: "Programming Language", importance: 1, tags: new Set(["language", "concurrency", "erlang"]) },
    { name: "R", date: "1993-08-01", long_date: "August 1, 1993", category: "Programming Language", importance: 1, tags: new Set(["language", "statistics", "data science"]) },
    { name: "Hadoop", date: "2006-04-01", long_date: "April 1, 2006", category: "Data", importance: 5, tags: new Set(["big data", "mapreduce", "analytics"]) },
    { name: "Apache Spark", date: "2014-05-26", long_date: "May 26, 2014", category: "Data", importance: 5, tags: new Set(["big data", "analytics", "distributed"]) },
    { name: "Flink", date: "2011-05-01", long_date: "May 1, 2011", category: "Data", importance: 5, tags: new Set(["big data", "stream processing", "analytics"]) },
    { name: "Cassandra", date: "2008-07-01", long_date: "July 1, 2008", category: "Data", importance: 5, tags: new Set(["database", "nosql", "distributed"]) },
    { name: "Nginx", date: "2004-10-04", long_date: "October 4, 2004", category: "Infrastructure", importance: 7, tags: new Set(["web server", "proxy", "http"]) },
    { name: "Next.js", date: "2016-10-25", long_date: "October 25, 2016", category: "Frontend", importance: 3, tags: new Set(["frontend", "javascript", "react"]) },
    { name: "Svelte", date: "2016-11-26", long_date: "November 26, 2016", category: "Frontend", importance: 3, tags: new Set(["frontend", "javascript", "framework"]) }
];